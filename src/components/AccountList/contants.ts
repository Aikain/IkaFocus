import {
    CRYSTAL_BOOSTER,
    CRYSTAL_REDUCER,
    GOVERNOR,
    MARBLE_BOOSTER,
    MARBLE_REDUCER,
    SHRINE,
    SULPHUR_BOOSTER,
    SULPHUR_REDUCER,
    WINE_BOOSTER,
    WINE_REDUCER,
    WOOD_BOOSTER,
    WOOD_REDUCER,
} from '@/data/building.ts';

import type { BuildingKey } from './types';

const findMaxLevel = (buildingDetails: Record<number, unknown>): number =>
    Math.max(...Object.keys(buildingDetails).map((level) => parseInt(level)));

export const BUILDINGS: { name: BuildingKey; min: number; max: number }[] = [
    { name: 'governorLevel', min: 0, max: findMaxLevel(GOVERNOR) },
    { name: 'woodBoosterLevel', min: 0, max: findMaxLevel(WOOD_BOOSTER) },
    {
        name: 'luxuryBoosterLevel',
        min: 0,
        max: Math.min(
            findMaxLevel(WINE_BOOSTER),
            findMaxLevel(MARBLE_BOOSTER),
            findMaxLevel(CRYSTAL_BOOSTER),
            findMaxLevel(SULPHUR_BOOSTER),
        ),
    },
    { name: 'shrineLevel', min: 0, max: findMaxLevel(SHRINE) },
    { name: 'woodReduceLevel', min: 0, max: findMaxLevel(WOOD_REDUCER) },
    { name: 'wineReduceLevel', min: 0, max: findMaxLevel(WINE_REDUCER) },
    { name: 'marbleReduceLevel', min: 0, max: findMaxLevel(MARBLE_REDUCER) },
    { name: 'crystalReduceLevel', min: 0, max: findMaxLevel(CRYSTAL_REDUCER) },
    { name: 'sulphurReduceLevel', min: 0, max: findMaxLevel(SULPHUR_REDUCER) },
];
