import { Account, Island as IslandType } from '@/types';

import Island from '@/components/AccountList/Island.tsx';

import styles from '@/styles/account.module.scss';

interface Props {
    account: Account;
    islands: IslandType[];
    updateIslands: (islands: IslandType[]) => void;
}

const IslandList = ({ account, islands, updateIslands }: Props) => {
    const handleUpdateIsland = (index: number) => (island: IslandType) =>
        updateIslands([...islands.slice(0, index), island, ...islands.slice(index + 1)]);

    return (
        <div className={styles.islandList}>
            {islands.map((island, index) => (
                <Island key={index} account={account} island={island} updateIsland={handleUpdateIsland(index)} />
            ))}
        </div>
    );
};

export default IslandList;
