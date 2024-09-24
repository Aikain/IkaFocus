import { ChangeEvent } from 'react';

import { Island as IslandType } from '@/types';

import styles from '@/styles/account.module.scss';

interface Props {
    island: IslandType;
    updateIsland: (island: IslandType) => void;
}

const Island = ({ island, updateIsland }: Props) => {
    const handleWoodLevelChange = (e: ChangeEvent<HTMLInputElement>) => {
        updateIsland({
            ...island,
            woodLevel: e.target.value === '' ? 1 : Math.min(Math.max(parseInt(e.target.value), 1), 60),
        });
    };

    const handleLuxuryLevelChange = (e: ChangeEvent<HTMLInputElement>) =>
        updateIsland({
            ...island,
            luxuryLevel: e.target.value === '' ? 1 : Math.min(Math.max(parseInt(e.target.value), 1), 60),
        });

    return (
        <div className={styles.island}>
            <div className={styles.islandDetails}>
                <span>
                    [{(island.x < 10 ? '0' : '') + island.x}:{(island.y < 10 ? '0' : '') + island.y}]{' '}
                    {island.luxuryResource}
                </span>
                <div>
                    <label htmlFor='woodLevel'>Sahan taso:</label>
                    <input
                        id='woodLevel'
                        type='number'
                        value={island.woodLevel}
                        onChange={handleWoodLevelChange}
                        min={1}
                        max={60}
                    />
                </div>
                <div>
                    <label htmlFor='woodLevel'>Yleellisyysresurssin taso:</label>
                    <input
                        id='woodLevel'
                        type='number'
                        value={island.luxuryLevel}
                        onChange={handleLuxuryLevelChange}
                        min={1}
                        max={60}
                    />
                </div>
            </div>
            <div>
                {island.cities.map(({ name }, index) => (
                    <div key={index}>{name}</div>
                ))}
            </div>
        </div>
    );
};

export default Island;
