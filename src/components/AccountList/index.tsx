import { Dispatch, SetStateAction } from 'react';

import { Account as AccountType } from '@/types';

import Account from '@/components/AccountList/Account.tsx';

import styles from '@/styles/account.module.scss';

interface Props {
    accounts: AccountType[];
    setAccounts: Dispatch<SetStateAction<AccountType[]>>;
}

const AccountList = ({ accounts, setAccounts }: Props) => {
    const handleAccountUpdate = (index: number) => (account: AccountType) =>
        setAccounts((accounts) => [...accounts.slice(0, index), account, ...accounts.slice(index + 1)]);

    return (
        <div className={styles.accountList}>
            {accounts.map((account, index) => (
                <Account key={index} account={account} updateAccount={handleAccountUpdate(index)} />
            ))}
        </div>
    );
};

export default AccountList;
