import { useEffect, useLayoutEffect, useState } from 'react';

import AccountList from '@/components/AccountList';
import AddAccount from '@/components/AddAccount';
import type { Account, Server } from '@/types';

import styles from '@/styles/app.module.scss';

type Theme = 'light' | 'dark';
type ThemePreference = Theme | 'system';

const getThemePreference = (): ThemePreference => {
    const preference = localStorage.getItem('themePreference');
    return preference === 'light' || preference === 'dark' ? preference : 'system';
};

const getSystemTheme = (): Theme => (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

const fixOldAccounts = (accounts: Account[]): Account[] =>
    accounts.map(({ islands, ...rest }) => ({
        ...rest,
        islands: islands.map(({ cities, ...rest }) => ({
            ...rest,
            cities: cities.map((city) => ({ ...city, luxuryResource: rest.luxuryResource })),
        })),
    }));

const App = () => {
    const [servers, setServers] = useState<Server[]>([]);
    const [themePreference, setThemePreference] = useState<ThemePreference>(getThemePreference);
    const [systemTheme, setSystemTheme] = useState<Theme>(getSystemTheme);
    const [accounts, setAccounts] = useState<Account[]>(
        fixOldAccounts(JSON.parse(localStorage.getItem('accounts') ?? '[]') ?? []),
    );
    const activeTheme = themePreference === 'system' ? systemTheme : themePreference;

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const updateSystemTheme = () => setSystemTheme(mediaQuery.matches ? 'dark' : 'light');

        mediaQuery.addEventListener('change', updateSystemTheme);
        return () => mediaQuery.removeEventListener('change', updateSystemTheme);
    }, []);

    useLayoutEffect(() => {
        document.documentElement.dataset.theme = activeTheme;
        if (themePreference === 'system') localStorage.removeItem('themePreference');
        else localStorage.setItem('themePreference', themePreference);
    }, [activeTheme, themePreference]);

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

    const toggleTheme = () =>
        setThemePreference((preference) => {
            const currentTheme = preference === 'system' ? systemTheme : preference;
            return currentTheme === 'dark' ? 'light' : 'dark';
        });

    return (
        <div className={styles.main}>
            <header className={styles.masthead}>
                <div className={styles.brand}>
                    <span className={styles.brandMark} aria-hidden='true'>
                        IF
                    </span>
                    <div>
                        <p className={styles.eyebrow}>VALTAKUNNAN HALLINTA</p>
                        <h1>IkaFocus</h1>
                    </div>
                </div>
                <div className={styles.headerActions}>
                    <div className={styles.accountCount} aria-label={`${accounts.length} tiliä`}>
                        <strong>{accounts.length}</strong>
                        <span>tiliä</span>
                    </div>
                    <button
                        className={styles.themeToggle}
                        type='button'
                        onClick={toggleTheme}
                        aria-label={`Switch to ${activeTheme === 'dark' ? 'light' : 'dark'} theme`}
                        title={`Switch to ${activeTheme === 'dark' ? 'light' : 'dark'} theme`}
                    >
                        {activeTheme === 'dark' ? 'Vaalea' : 'Tumma'}
                    </button>
                </div>
            </header>
            <main className={styles.content}>
                <AccountList accounts={accounts} setAccounts={setAccounts} />
                <AddAccount addAccount={addAccount} servers={servers} />
            </main>
        </div>
    );
};

export default App;
