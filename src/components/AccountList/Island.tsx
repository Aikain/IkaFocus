import { ChangeEvent, ReactNode } from 'react';

import { City, Island as IslandType, LuxuryResource } from '@/types';

import styles from '@/styles/account.module.scss';

interface Props {
    island: IslandType;
    updateIsland: (island: IslandType) => void;
}

const LUXURY_BOOSTERS: Record<LuxuryResource, ReactNode> = {
    WINE: <img src='https://gf1.geo.gfsrv.net/cdnc7/42c2e1f976461dc30b570491eb8f24.png' alt='Viinitarhuri' />,
    MARBLE: <img src='https://gf1.geo.gfsrv.net/cdn81/8fe0d653c5a0bc7c8d4b4710c223e7.png' alt='Kivenhakkaaja' />,
    CRYSTAL: <img src='https://gf1.geo.gfsrv.net/cdn27/44ce72d8d36d85d4d5b3b925d699d7.png' alt='Lasinpuhaltaja' />,
    SULPHUR: <img src='https://gf1.geo.gfsrv.net/cdn1f/8ec9cc6328b473542c8e347ab93d0d.png' alt='Alkemistin torni' />,
};

const LUXURY_RESOURCE: Record<LuxuryResource, ReactNode> = {
    WINE: <img src='https://gf1.geo.gfsrv.net/cdnc6/94ddfda045a8f5ced3397d791fd064.png' alt='Viini' />,
    MARBLE: <img src='https://gf1.geo.gfsrv.net/cdnbf/fc258b990c1a2a36c5aeb9872fc08a.png' alt='Marmori' />,
    CRYSTAL: <img src='https://gf1.geo.gfsrv.net/cdn1e/417b4059940b2ae2680c070a197d8c.png' alt='Kristalli' />,
    SULPHUR: <img src='https://gf1.geo.gfsrv.net/cdn9b/5578a7dfa3e98124439cca4a387a61.png' alt='Rikki' />,
};

type Building = keyof Omit<City, 'name'>;

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

    const handleBuildLevelChange = (index: number, building: Building, newValue?: number) =>
        updateIsland({
            ...island,
            cities: [
                ...island.cities.slice(0, index),
                { ...island.cities[index], [building]: newValue },
                ...island.cities.slice(index + 1),
            ],
        });

    return (
        <div className={styles.island}>
            <div className={styles.islandDetails}>
                <span>
                    [{(island.x < 10 ? '0' : '') + island.x}:{(island.y < 10 ? '0' : '') + island.y}]{' '}
                    {LUXURY_RESOURCE[island.luxuryResource]}
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
            <table className={styles.cityTable}>
                <thead>
                    <tr>
                        <th>Kaupungin nimi</th>
                        <th className={styles.building}>
                            <img
                                src='https://gf1.geo.gfsrv.net/cdn86/102a0c388301526586234c78b9ae59.png'
                                alt='Metsänhoitajan talo'
                            />
                        </th>
                        <th className={styles.building}>{LUXURY_BOOSTERS[island.luxuryResource]}</th>
                        <th className={styles.building}>
                            <img
                                src='https://gf3.geo.gfsrv.net/cdn84/9fbac676e42d5178c554b02ce07c22.png'
                                alt='Puusepän paja'
                            />
                        </th>
                        <th className={styles.building}>
                            <img
                                src='https://gf3.geo.gfsrv.net/cdnb1/401736ad0eff8413c956821a2d6a77.png'
                                alt='Viinipaino'
                            />
                        </th>
                        <th className={styles.building}>
                            <img
                                src='https://gf1.geo.gfsrv.net/cdn31/8f3547aad3daa47c32623215940b17.png'
                                alt='Arkkitehdin toimisto'
                            />
                        </th>
                        <th className={styles.building}>
                            <img
                                src='https://gf3.geo.gfsrv.net/cdn5f/0706504997edbca28e82fc40c9fc53.png'
                                alt='Optikko'
                            />
                        </th>
                        <th className={styles.building}>
                            <img
                                src='https://gf2.geo.gfsrv.net/cdn46/6635661a7757f975c1d57cf609cbc9.png'
                                alt='Ilotulite testialue'
                            />
                        </th>
                        <th>
                            <img
                                src='https://gf1.geo.gfsrv.net/cdn19/c3527b2f694fb882563c04df6d8972.png'
                                alt='Rakennusmateriaali'
                            />
                        </th>
                        <th>{LUXURY_RESOURCE[island.luxuryResource]}</th>
                    </tr>
                </thead>
                <tbody>
                    {island.cities.map(({ name, ...rest }, index) => (
                        <tr key={index}>
                            <td>{name}</td>
                            {(['woodBoosterLevel', 'luxuryBoosterLevel'] as Building[]).map((building) => (
                                <td key={building} className={styles.building}>
                                    <input
                                        type='number'
                                        value={rest[building] ?? ''}
                                        onChange={(e) =>
                                            handleBuildLevelChange(
                                                index,
                                                building,
                                                e.target.value !== ''
                                                    ? Math.min(Math.max(parseInt(e.target.value), 0), 61)
                                                    : undefined,
                                            )
                                        }
                                        min={0}
                                        max={61}
                                    />
                                </td>
                            ))}
                            {(
                                [
                                    'woodReduceLevel',
                                    'wineReduceLevel',
                                    'marbleReduceLevel',
                                    'crystalReduceLevel',
                                    'sulphurReduceLevel',
                                ] as Building[]
                            ).map((building) => (
                                <td key={building} className={styles.building}>
                                    <input
                                        type='number'
                                        value={rest[building] ?? ''}
                                        onChange={(e) =>
                                            handleBuildLevelChange(
                                                index,
                                                building,
                                                e.target.value !== ''
                                                    ? Math.min(Math.max(parseInt(e.target.value), 0), 50)
                                                    : undefined,
                                            )
                                        }
                                        min={0}
                                        max={50}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Island;
