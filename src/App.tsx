import { useEffect, useState } from 'react';

import { Account, Server } from '@/types';

import AccountList from '@/components/AccountList';
import AddAccount from '@/components/AddAccount';

import styles from '@/styles/app.module.scss';

const App = () => {
    const [servers, setServers] = useState<Server[]>();
    const [accounts, setAccounts] = useState<Account[]>(JSON.parse(localStorage.getItem('accounts') ?? '[]') ?? []);

    // TODO: remove
    if (accounts.filter((account) => account.cityCount === undefined).length > 0) {
        setAccounts((accounts) =>
            accounts.map((account) => ({
                ...account,
                cityCount: account.islands.reduce((total, island) => total + island.cities.length, 0),
            })),
        );
    }

    useEffect(() => {
        fetch('/api/servers.json')
            .then((res) => res.json())
            .then(setServers);
    }, []);

    useEffect(() => {
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }, [accounts]);

    const addAccount = (account: Pick<Account, 'server' | 'name'>) =>
        setAccounts((accounts) => [
            ...accounts,
            { ...account, formOfGovernment: 'IKACRACY', shrineLevel: 0, cityCount: 0, islands: [] },
        ]);

    return (
        <div className={styles.main}>
            <AccountList accounts={accounts} setAccounts={setAccounts} />
            <AddAccount addAccount={addAccount} servers={servers} />
        </div>
    );
};

export default App;
