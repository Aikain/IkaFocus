import { useMemo } from 'react';

import { Account, CreateNewCity, NextStep } from '@/types';
import { convertIslandToText, getRelativeTimeString } from '@/utils';

import { calculateNextSteps } from '@/components/AccountList/utils.ts';

import styles from '@/styles/account.module.scss';

interface Props {
    account: Account;
}

const generateStepText = ({ target, type, ...rest }: NextStep): string => {
    switch (type) {
        case 'UPGRADE_WOOD':
            return `Nosta <b>saha</b> saarella <b>${convertIslandToText(target)}</b> tasosta ${target.woodLevel} tasolle ${target.woodLevel + 1}`;
        case 'UPGRADE_LUXURY':
            return `Nosta <b>yleellisuusresurssi</b> saarella <b>${convertIslandToText(target)}</b> tasosta ${target.luxuryLevel} tasolle ${target.luxuryLevel + 1}`;
        case 'UPGRADE_WOOD_BOOSTER':
            return `Päivitä <b>metsähoitajan talo</b> kaupungissa <b>${target.name}</b> tasosta ${target.woodBoosterLevel ?? 0} tasolle ${(target.woodBoosterLevel ?? 0) + 1}`;
        case 'UPGRADE_LUXURY_BOOSTER':
            return `Päivitä <b>yleellisyysresurssin</b> lisääjä kaupungissa <b>${target.name}</b> tasosta ${target.luxuryBoosterLevel ?? 0} tasolle ${(target.luxuryBoosterLevel ?? 0) + 1}`;
        case 'UPGRADE_SHRINE':
            return `Päivitä <b>Jumalien pyhäkkö</b> kaupungissa <b>${target.name}</b> tasosta ${target.shrineLevel ?? 0} tasoon ${(target.shrineLevel ?? 0) + 1}`;
        case 'UPGRADE_COVERNOR':
            return `Päivitä <b>Kuvernöörin asunto</b> kaupungissa <b>${target.name}</b> tasosta ${target.governorLevel ?? 0} tasoon ${(target.governorLevel ?? 0) + 1}`;
        case 'CREATE_NEW_CITY':
            const { luxuryBoosterLevel, woodBoosterLevel } = (rest as CreateNewCity).buildings;
            const tmp = [
                ...((woodBoosterLevel ?? 0) > 0 ? [`nosta puunlisääjä tasolle ${woodBoosterLevel}`] : []),
                ...((luxuryBoosterLevel ?? 0) > 0
                    ? [`nosta yleellisuusresurssin lisääjä tasolle ${luxuryBoosterLevel}`]
                    : []),
            ];
            return `Päivitä tarvittavat kuvernöörien asunnot, luo uusi kaupunki ${target.x === 0 ? 'tyhjälle saarelle' : `saarelle <b>${convertIslandToText(target)}</b>`} ja päivitä sen kuvernöörin asunto ${tmp.length > 0 ? `sekä ${tmp.join(' ja ')}` : ''}`;
    }
};

const NextSteps = ({ account }: Props) => {
    const nextSteps = useMemo(() => calculateNextSteps(account), [account]);

    return nextSteps.length ? (
        <table className={styles.nextSteps}>
            <thead>
                <tr>
                    <th></th>
                    <th>Vaikutus</th>
                    <th>Kustannus</th>
                    <th>Maksanut itsensä takaisin</th>
                </tr>
            </thead>
            <tbody>
                {nextSteps.map((nextStep, index) => (
                    <tr key={index}>
                        <td dangerouslySetInnerHTML={{ __html: generateStepText(nextStep) }} />
                        <td>
                            +
                            {new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 }).format(
                                nextStep.productionIncrease,
                            )}
                            /h
                        </td>
                        <td>{new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 }).format(nextStep.cost)}</td>
                        <td>{getRelativeTimeString(nextStep.paybackTime * 3600)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    ) : null;
};

export default NextSteps;
