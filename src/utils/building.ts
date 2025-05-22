import {
    BuildingCost,
    CRYSTAL_BOOSTER,
    CRYSTAL_REDUCER,
    GOVERNOR,
    MARBLE_BOOSTER,
    MARBLE_REDUCER,
    PALACE,
    SHRINE,
    SULPHUR_BOOSTER,
    SULPHUR_REDUCER,
    WINE_BOOSTER,
    WINE_REDUCER,
    WOOD_BOOSTER,
    WOOD_REDUCER,
} from '@/data/building.ts';
import { City, LuxuryResource, Research } from '@/types';

type Building =
    | 'WOOD_BOOSTER'
    | 'LUXURY_BOOSTER'
    | 'WOOD_REDUCER'
    | 'WINE_REDUCER'
    | 'MARBLE_REDUCER'
    | 'CRYSTAL_REDUCER'
    | 'SULPHUR_REDUCER'
    | 'SHRINE'
    | 'PALACE'
    | 'GOVERNOR';

const getBuildingCosts = (type: Building, luxuryResource: LuxuryResource): Record<number, BuildingCost> => {
    switch (type) {
        case 'WOOD_BOOSTER':
            return WOOD_BOOSTER;
        case 'LUXURY_BOOSTER':
            switch (luxuryResource) {
                case 'WINE':
                    return WINE_BOOSTER;
                case 'MARBLE':
                    return MARBLE_BOOSTER;
                case 'CRYSTAL':
                    return CRYSTAL_BOOSTER;
                case 'SULPHUR':
                    return SULPHUR_BOOSTER;
            }
            break;
        case 'WOOD_REDUCER':
            return WOOD_REDUCER;
        case 'WINE_REDUCER':
            return WINE_REDUCER;
        case 'MARBLE_REDUCER':
            return MARBLE_REDUCER;
        case 'CRYSTAL_REDUCER':
            return CRYSTAL_REDUCER;
        case 'SULPHUR_REDUCER':
            return SULPHUR_REDUCER;
        case 'SHRINE':
            return SHRINE;
        case 'PALACE':
            return PALACE;
        case 'GOVERNOR':
            return GOVERNOR;
    }
};

export const calculateBuildCost = (
    type: Building,
    level: number,
    city: Omit<City, 'name'>,
    research?: Research,
): number => calculateTotalCost(getBuildingCosts(type, city.luxuryResource)[level] ?? {}, city, research);

export const calculateBuildTotalCost = (
    type: Building,
    from: number,
    to: number,
    city: Omit<City, 'name'>,
    research?: Research,
): number =>
    Array.from(Array(to))
        .map((_, i) => i + 1)
        .filter((i) => i > Math.max(0, from))
        .reduce((total, level) => total + calculateBuildCost(type, level, city, research), 0);

const calculateTotalCost = (
    { wood, wine, marble, crystal, sulphur }: BuildingCost,
    city: Omit<City, 'name'>,
    research?: Research,
): number =>
    calculateCost(wood, research, city.woodReduceLevel) +
    calculateCost(wine, research, city.wineReduceLevel) +
    calculateCost(marble, research, city.marbleReduceLevel) +
    calculateCost(crystal, research, city.crystalReduceLevel) +
    calculateCost(sulphur, research, city.sulphurReduceLevel);

const calculateCost = (cost?: number, research?: Research, reducerLevel?: number): number =>
    Math.floor(
        (cost ?? 0) *
            ((100 -
                (research === 'SPIRIT_LEVEL' ? 14 : research === 'GEOMETRY' ? 6 : research === 'PULLEY' ? 2 : 0) -
                (reducerLevel ?? 0)) /
                100),
    );
