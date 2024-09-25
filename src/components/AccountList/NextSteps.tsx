import { useMemo } from 'react';

import { Account, NextStep } from '@/types';
import { convertIslandToText, getRelativeTimeString } from '@/utils';

import { calculateNextSteps } from '@/components/AccountList/utils.ts';

import styles from '@/styles/account.module.scss';

interface Props {
    account: Account;
}

const generateStepText = ({ target, type }: NextStep): string =>
    type === 'UPGRADE_WOOD'
        ? `Nosta <b>saha</b> saarella <b>${convertIslandToText(target)}</b> tasosta ${target.woodLevel} tasolle ${target.woodLevel + 1}`
        : type === 'UPGRADE_LUXURY'
          ? `Nosta <b>yleellisuusresurssi</b> saarella <b>${convertIslandToText(target)}</b> tasosta ${target.luxuryLevel} tasolle ${target.luxuryLevel + 1}`
          : type === 'UPGRADE_WOOD_BOOSTER'
            ? `Päivitä <b>metsähoitajan talo</b> kaupungissa <b>${target.name}</b> tasosta ${target.woodBoosterLevel ?? 0} tasolle ${(target.woodBoosterLevel ?? 0) + 1}`
            : type === 'UPGRADE_LUXURY_BOOSTER'
              ? `Päivitä <b>yleellisyysresurssin</b> lisääjä kaupungissa <b>${target.name}</b> tasosta ${target.luxuryBoosterLevel ?? 0} tasolle ${(target.luxuryBoosterLevel ?? 0) + 1}`
              : type === 'UPGRADE_SHRINE'
                ? `Päivitä <b>Jumalien pyhäkkö</b> kaupungissa <b>${target.name}</b> tasosta ${target.shrineLevel ?? 0} tasoon ${(target.shrineLevel ?? 0) + 1}`
                : '';

const NextSteps = ({ account }: Props) => {
    const nextSteps = useMemo(() => calculateNextSteps(account), [account]);

    return (
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
                        <td>+ {nextStep.productionIncrease.toFixed(0)} / h.</td>
                        <td>{nextStep.cost}</td>
                        <td>{getRelativeTimeString(nextStep.paybackTime * 3600)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default NextSteps;
