import { ChangeEvent } from 'react';

import { Account, Account as AccountType, FormOfGovernment } from '@/types';
import { translateFormOfGovernment } from '@/utils';

import styles from '@/styles/account.module.scss';

interface Props {
    account: Account;
    updateAccount: (account: AccountType) => void;
}

const AccountDetails = ({ account, updateAccount }: Props) => {
    const handleChangeFormOfGovernment = (e: ChangeEvent<HTMLSelectElement>) =>
        updateAccount({ ...account, formOfGovernment: e.target.value as FormOfGovernment });

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
        </div>
    );
};

export default AccountDetails;
