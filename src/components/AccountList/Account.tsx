import { Account as AccountType, City, Island } from '@/types';
import { generateServerName } from '@/utils';

import AddCity from '@/components/AccountList/AddCity.tsx';
import IslandList from '@/components/AccountList/IslandList.tsx';

import styles from '@/styles/account.module.scss';

interface Props {
    account: AccountType;
    deleteAccount?: () => void;
    updateAccount: (account: AccountType) => void;
}

const Account = ({ account, deleteAccount, updateAccount }: Props) => {
    const handleAddCity = (newIsland: Pick<Island, 'luxuryResource' | 'x' | 'y'>, city: City) => {
        const oldIsland = account.islands.find(({ x, y }) => x === newIsland.x && y === newIsland.y);
        updateAccount({
            ...account,
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

    const handleUpdateIslands = (islands: Island[]) => updateAccount({ ...account, islands });

    return (
        <div className={styles.account}>
            <div className={styles.header}>
                <h3>
                    {generateServerName(account.server)} - {account.name}
                </h3>
                <button onClick={deleteAccount}>Poista tili</button>
            </div>
            <IslandList islands={account.islands} updateIslands={handleUpdateIslands} />
            <AddCity addCity={handleAddCity} />
        </div>
    );
};

export default Account;
