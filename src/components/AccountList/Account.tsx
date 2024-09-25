import { Account as AccountType, City, Island } from '@/types';
import { generateServerName } from '@/utils';

import AccountDetails from '@/components/AccountList/AccountDetails.tsx';
import AddCity from '@/components/AccountList/AddCity.tsx';
import IslandList from '@/components/AccountList/IslandList.tsx';
import NextSteps from '@/components/AccountList/NextSteps.tsx';

import styles from '@/styles/account.module.scss';

interface Props {
    account: AccountType;
    deleteAccount: () => void;
    updateAccount: (account: AccountType) => void;
}

const Account = ({ account, deleteAccount, updateAccount }: Props) => {
    const handleAddCity = (newIsland: Pick<Island, 'luxuryResource' | 'x' | 'y'>, city: City) => {
        const oldIsland = account.islands.find(({ x, y }) => x === newIsland.x && y === newIsland.y);
        updateAccount({
            ...account,
            cityCount: account.islands.reduce((total, island) => total + island.cities.length, 0) + 1,
            islands: [
                ...account.islands.filter(({ x, y }) => x !== newIsland.x || y !== newIsland.y),
                {
                    ...newIsland,
                    woodLevel: oldIsland?.woodLevel ?? 1,
                    luxuryLevel: oldIsland?.luxuryLevel ?? 1,
                    cities: [...(oldIsland?.cities ?? []), city],
                },
            ].sort((a, b) => a.x - b.x || a.y - b.y),
        });
    };

    const handleUpdateIslands = (islands: Island[]) =>
        updateAccount({
            ...account,
            shrineLevel:
                islands
                    .flatMap(({ cities }) => cities.map(({ shrineLevel }) => shrineLevel))
                    .find((shrineLevel) => shrineLevel !== undefined) ?? 0,
            islands,
        });

    return (
        <div className={styles.account}>
            <div className={styles.header}>
                <h3>
                    {generateServerName(account.server)} - {account.name}
                </h3>
                <button onClick={deleteAccount}>Poista tili</button>
            </div>
            <AccountDetails account={account} updateAccount={updateAccount} />
            <IslandList account={account} islands={account.islands} updateIslands={handleUpdateIslands} />
            {account.cityCount < 21 ? <AddCity addCity={handleAddCity} /> : null}
            <NextSteps account={account} />
        </div>
    );
};

export default Account;
