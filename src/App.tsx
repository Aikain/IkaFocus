import { useEffect, useState } from 'react';

import { Account, Server } from '@/types';

import AccountList from '@/components/AccountList';
import AddAccount from '@/components/AddAccount';

import styles from '@/styles/app.module.scss';

const App = () => {
    const [servers, setServers] = useState<Server[]>();
    const [accounts, setAccounts] = useState<Account[]>([]);

    useEffect(() => {
        fetch('/api/servers.json')
            .then((res) => res.json())
            .then(setServers);
    }, []);

    const addAccount = (account: Account) => setAccounts((accounts) => [...accounts, account]);

    return (
        <div className={styles.main}>
            <AddAccount addAccount={addAccount} servers={servers} />
            <AccountList accounts={accounts} />
        </div>
    );
};

export default App;
