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
            return `<b>${convertIslandToText(target)}</b>: <b>saha</b> ${target.woodLevel} ⇛ ${target.woodLevel + 1}`;
        case 'UPGRADE_LUXURY':
            return `<b>${convertIslandToText(target)}</b>: <b>yleellisuusresurssi</b> ${target.luxuryLevel} ⇛ ${target.luxuryLevel + 1}`;
        case 'UPGRADE_WOOD_BOOSTER':
            return `<b>${target.name}</b>: <b>metsänhoitajan talo</b> ${target.woodBoosterLevel ?? 0} ⇛ ${(target.woodBoosterLevel ?? 0) + 1}`;
        case 'UPGRADE_LUXURY_BOOSTER':
            return `<b>${target.name}</b>: <b>yleellisyysresurssin lisääjä</b> ${target.luxuryBoosterLevel ?? 0} ⇛ ${(target.luxuryBoosterLevel ?? 0) + 1}`;
        case 'UPGRADE_SHRINE':
            return `<b>${target.name}</b>: <b>Jumalien pyhäkkö</b> ${target.shrineLevel ?? 0} ⇛ ${(target.shrineLevel ?? 0) + 1}`;
        case 'UPGRADE_COVERNOR':
            return `<b>${target.name}</b>: <b>Kuvernöörin asunto</b> ${target.governorLevel ?? 0} ⇛ ${(target.governorLevel ?? 0) + 1}`;
        case 'CREATE_NEW_CITY':
            const {
                woodReduceLevel,
                marbleReduceLevel,
                wineReduceLevel,
                crystalReduceLevel,
                sulphurReduceLevel,
                governorLevel,
                luxuryBoosterLevel,
                woodBoosterLevel,
            } = (rest as CreateNewCity).buildings;
            const tmp = [
                ...((woodReduceLevel ?? 0) > 0 ? [`<b>Puusepän Paja</b> 0 ⇛ ${woodReduceLevel}`] : []),
                ...((marbleReduceLevel ?? 0) > 0 ? [`<b>Arkkitehdin Toimisto</b> 0 ⇛ ${marbleReduceLevel}`] : []),
                ...((wineReduceLevel ?? 0) > 0 ? [`<b>Viinipaino</b> 0 ⇛ ${wineReduceLevel}`] : []),
                ...((crystalReduceLevel ?? 0) > 0 ? [`<b>Optikko</b> 0 ⇛ ${crystalReduceLevel}`] : []),
                ...((sulphurReduceLevel ?? 0) > 0 ? [`<b>Ilotulite Testialue</b> 0 ⇛ ${sulphurReduceLevel}`] : []),
                ...((governorLevel ?? 0) > 0 ? [`<b>kuvernöörin asunto</b> 0 ⇛ ${governorLevel}`] : []),
                ...((woodBoosterLevel ?? 0) > 0 ? [`<b>metsänhoitajan talo</b> 0 ⇛ ${woodBoosterLevel}`] : []),
                ...((luxuryBoosterLevel ?? 0) > 0
                    ? [`<b>yleellisuusresurssin lisääjä</b> 0 ⇛ ${luxuryBoosterLevel}`]
                    : []),
            ];
            return `<div>
                        <b>${convertIslandToText(target)}</b>: <b>Uusi kaupunki</b>
                        <ul>
                            ${tmp.map((text) => `<li>${text}</li>`).join('')}
                            <li>muut tarvittavat kuvet</li>
                        </ul>
                    </div>`;
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
