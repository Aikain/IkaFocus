import { ChangeEvent } from 'react';

import { Account, Account as AccountType, FormOfGovernment, Research } from '@/types';
import { translateFormOfGovernment } from '@/utils';

import styles from '@/styles/account.module.scss';

interface Props {
    account: Account;
    updateAccount: (account: AccountType) => void;
}

const AccountDetails = ({ account, updateAccount }: Props) => {
    const handleChangeFormOfGovernment = (e: ChangeEvent<HTMLSelectElement>) =>
        updateAccount({ ...account, formOfGovernment: e.target.value as FormOfGovernment });

    const handleChangeResearch = (e: ChangeEvent<HTMLSelectElement>) =>
        updateAccount({ ...account, research: e.target.value !== '' ? (e.target.value as Research) : undefined });

    return (
        <div>
            <div className={styles.accountDetailRow}>
                <label htmlFor='formOfGovernment'>Hallintomuoto</label>
                <select id='formOfGovernment' value={account.formOfGovernment} onChange={handleChangeFormOfGovernment}>
                    {(
                        [
                            'IKACRACY',
                            'ARISTOCRACY',
                            'DEMOCRACY',
                            'DICTATORSHIP',
                            'NOMOCRACY',
                            'OLIGARCHY',
                            'TECHNOCRACY',
                            'THEOCRACY',
                        ] as FormOfGovernment[]
                    ).map((formOfGovernment) => (
                        <option key={formOfGovernment} value={formOfGovernment}>
                            {translateFormOfGovernment(formOfGovernment)}
                        </option>
                    ))}
                </select>
            </div>
            <div className={styles.accountDetailRow}>
                <label htmlFor='research'>Korkein tehty tutkimus</label>
                <select id='research' value={account.research} onChange={handleChangeResearch}>
                    <option value=''>-</option>
                    <option value='PULLEY'>Väkipyörä</option>
                    <option value='GEOMETRY'>Geometria</option>
                    <option value='SPIRIT_LEVEL'>Vatupassi</option>
                </select>
            </div>
        </div>
    );
};

export default AccountDetails;
