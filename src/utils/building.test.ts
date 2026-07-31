import { describe, expect, test } from 'vitest';

import { GOVERNOR, MARBLE_BOOSTER, SHRINE, WOOD_BOOSTER } from '@/data/building.ts';
import type { City } from '@/types';

import { calculateBuildCost, calculateBuildTotalCost } from './building.ts';

const MAX_REDUCERS: Omit<City, 'name' | 'luxuryResource'> = {
    woodReduceLevel: 50,
    wineReduceLevel: 50,
    marbleReduceLevel: 50,
    crystalReduceLevel: 50,
    sulphurReduceLevel: 50,
};

describe.concurrent('cost', () => {
    test("Forester's House: lvl 3", () => {
        expect(calculateBuildCost('WOOD_BOOSTER', 3, { luxuryResource: 'MARBLE' })).toBe(
            (WOOD_BOOSTER['3'].wood ?? 0) + (WOOD_BOOSTER['3'].marble ?? 0),
        );
    });

    test("Forester's House: lvl 20, wood -7%, Pulley", () => {
        expect(calculateBuildCost('WOOD_BOOSTER', 20, { luxuryResource: 'MARBLE', woodReduceLevel: 7 }, 'PULLEY')).toBe(
            Math.floor(((WOOD_BOOSTER['20'].wood ?? 0) * (100 - 7 - 2)) / 100) +
                Math.floor(((WOOD_BOOSTER['20'].marble ?? 0) * (100 - 2)) / 100),
        );
    });

    test("Forester's House: lvl 35, max reducers, Spirit Level", () => {
        expect(
            calculateBuildCost('WOOD_BOOSTER', 35, { luxuryResource: 'MARBLE', ...MAX_REDUCERS }, 'SPIRIT_LEVEL'),
        ).toBe(
            Math.floor(((WOOD_BOOSTER['35'].wood ?? 0) * (100 - 50 - 14)) / 100) +
                Math.floor(((WOOD_BOOSTER['35'].marble ?? 0) * (100 - 50 - 14)) / 100),
        );
    });

    test('Stonemason: lvl 7', () => {
        expect(calculateBuildCost('LUXURY_BOOSTER', 7, { luxuryResource: 'MARBLE' })).toBe(
            (MARBLE_BOOSTER['7'].wood ?? 0) + (MARBLE_BOOSTER['7'].marble ?? 0),
        );
    });

    test('Stonemason: lvl 23, wood -13%, wine -4%, Geometry', () => {
        expect(
            calculateBuildCost(
                'LUXURY_BOOSTER',
                23,
                { luxuryResource: 'MARBLE', woodReduceLevel: 13, wineReduceLevel: 4 },
                'GEOMETRY',
            ),
        ).toBe(
            Math.floor(((MARBLE_BOOSTER['23'].wood ?? 0) * (100 - 13 - 6)) / 100) +
                Math.floor(((MARBLE_BOOSTER['23'].marble ?? 0) * (100 - 6)) / 100),
        );
    });

    test('Stonemason: lvl 32, max reducers, Spirit level', () => {
        expect(
            calculateBuildCost('LUXURY_BOOSTER', 32, { luxuryResource: 'MARBLE', ...MAX_REDUCERS }, 'SPIRIT_LEVEL'),
        ).toBe(
            Math.floor(((MARBLE_BOOSTER['32'].wood ?? 0) * (100 - 50 - 14)) / 100) +
                Math.floor(((MARBLE_BOOSTER['32'].marble ?? 0) * (100 - 50 - 14)) / 100),
        );
    });

    test('Shrine: lvl 15', () => {
        expect(calculateBuildCost('SHRINE', 15, { luxuryResource: 'MARBLE' })).toBe(
            (SHRINE['15'].wood ?? 0) +
                (SHRINE['15'].wine ?? 0) +
                (SHRINE['15'].marble ?? 0) +
                (SHRINE['15'].crystal ?? 0) +
                (SHRINE['15'].sulphur ?? 0),
        );
    });

    test('Shrine: lvl 22, crystal -15%, sulphur -6%, Spirit Level', () => {
        expect(
            calculateBuildCost(
                'SHRINE',
                22,
                { luxuryResource: 'MARBLE', crystalReduceLevel: 15, sulphurReduceLevel: 6 },
                'SPIRIT_LEVEL',
            ),
        ).toBe(
            Math.floor(((SHRINE['22'].wood ?? 0) * (100 - 14)) / 100) +
                Math.floor(((SHRINE['22'].wine ?? 0) * (100 - 14)) / 100) +
                Math.floor(((SHRINE['22'].marble ?? 0) * (100 - 14)) / 100) +
                Math.floor(((SHRINE['22'].crystal ?? 0) * (100 - 15 - 14)) / 100) +
                Math.floor(((SHRINE['22'].sulphur ?? 0) * (100 - 6 - 14)) / 100),
        );
    });

    test('Shrine: lvl 41, max reducers, Spirit Level', () => {
        expect(calculateBuildCost('SHRINE', 41, { luxuryResource: 'MARBLE', ...MAX_REDUCERS }, 'SPIRIT_LEVEL')).toBe(
            Math.floor(((SHRINE['41'].wood ?? 0) * (100 - 50 - 14)) / 100) +
                Math.floor(((SHRINE['41'].wine ?? 0) * (100 - 50 - 14)) / 100) +
                Math.floor(((SHRINE['41'].marble ?? 0) * (100 - 50 - 14)) / 100) +
                Math.floor(((SHRINE['41'].crystal ?? 0) * (100 - 50 - 14)) / 100) +
                Math.floor(((SHRINE['41'].sulphur ?? 0) * (100 - 50 - 14)) / 100),
        );
    });

    test('GOVERNOR: lvl 6', () => {
        expect(calculateBuildCost('GOVERNOR', 6, { luxuryResource: 'MARBLE' })).toBe(
            (GOVERNOR['6'].wood ?? 0) +
                (GOVERNOR['6'].wine ?? 0) +
                (GOVERNOR['6'].marble ?? 0) +
                (GOVERNOR['6'].crystal ?? 0) +
                (GOVERNOR['6'].sulphur ?? 0),
        );
    });

    test('GOVERNOR: lvl 8, marble -7%, Spirit Level', () => {
        expect(
            calculateBuildCost('GOVERNOR', 8, { luxuryResource: 'MARBLE', marbleReduceLevel: 7 }, 'SPIRIT_LEVEL'),
        ).toBe(
            Math.floor(((GOVERNOR['8'].wood ?? 0) * (100 - 14)) / 100) +
                Math.floor(((GOVERNOR['8'].wine ?? 0) * (100 - 14)) / 100) +
                Math.floor(((GOVERNOR['8'].marble ?? 0) * (100 - 7 - 14)) / 100) +
                Math.floor(((GOVERNOR['8'].crystal ?? 0) * (100 - 14)) / 100) +
                Math.floor(((GOVERNOR['8'].sulphur ?? 0) * (100 - 14)) / 100),
        );
    });

    test('GOVERNOR: lvl 15, max reducers, Spirit Level', () => {
        expect(calculateBuildCost('GOVERNOR', 15, { luxuryResource: 'MARBLE', ...MAX_REDUCERS }, 'SPIRIT_LEVEL')).toBe(
            Math.floor(((GOVERNOR['15'].wood ?? 0) * (100 - 50 - 14)) / 100) +
                Math.floor(((GOVERNOR['15'].wine ?? 0) * (100 - 50 - 14)) / 100) +
                Math.floor(((GOVERNOR['15'].marble ?? 0) * (100 - 50 - 14)) / 100) +
                Math.floor(((GOVERNOR['15'].crystal ?? 0) * (100 - 50 - 14)) / 100) +
                Math.floor(((GOVERNOR['15'].sulphur ?? 0) * (100 - 50 - 14)) / 100),
        );
    });
});

describe.concurrent('total cost', () => {
    test("Forester's House: lvl 0 -> 50", () => {
        expect(calculateBuildTotalCost('WOOD_BOOSTER', 0, 50, { luxuryResource: 'MARBLE' })).toBe(1618806028);
    });

    test("Forester's House: lvl 0 -> 50, max reducers, spirit level", () => {
        expect(
            calculateBuildTotalCost(
                'WOOD_BOOSTER',
                0,
                50,
                { luxuryResource: 'MARBLE', ...MAX_REDUCERS },
                'SPIRIT_LEVEL',
            ),
        ).toBe(582770120);
    });

    test('Winery: lvl 0 -> 50', () => {
        expect(calculateBuildTotalCost('LUXURY_BOOSTER', 0, 50, { luxuryResource: 'WINE' })).toBe(1721604384);
    });

    test('Winery: lvl 0 -> 50, max reducers, spirit level', () => {
        expect(
            calculateBuildTotalCost(
                'LUXURY_BOOSTER',
                0,
                50,
                { luxuryResource: 'WINE', ...MAX_REDUCERS },
                'SPIRIT_LEVEL',
            ),
        ).toBe(619777531);
    });

    test('Stonemason: lvl 0 -> 50', () => {
        expect(calculateBuildTotalCost('LUXURY_BOOSTER', 0, 50, { luxuryResource: 'MARBLE' })).toBe(1708086176);
    });

    test('Stonemason: lvl 0 -> 50, max reducers, spirit level', () => {
        expect(
            calculateBuildTotalCost(
                'LUXURY_BOOSTER',
                0,
                50,
                { luxuryResource: 'MARBLE', ...MAX_REDUCERS },
                'SPIRIT_LEVEL',
            ),
        ).toBe(614910977);
    });

    test('Glassblower: lvl 0 -> 50', () => {
        expect(calculateBuildTotalCost('LUXURY_BOOSTER', 0, 50, { luxuryResource: 'CRYSTAL' })).toBe(1714511257);
    });

    test('Glassblower: lvl 0 -> 50, max reducers, spirit level', () => {
        expect(
            calculateBuildTotalCost(
                'LUXURY_BOOSTER',
                0,
                50,
                { luxuryResource: 'CRYSTAL', ...MAX_REDUCERS },
                'SPIRIT_LEVEL',
            ),
        ).toBe(617224004);
    });

    test('Alchemist`s Tower: lvl 0 -> 50', () => {
        expect(calculateBuildTotalCost('LUXURY_BOOSTER', 0, 50, { luxuryResource: 'SULPHUR' })).toBe(1721458422);
    });

    test('Alchemist`s Tower: lvl 0 -> 50, max reducers, spirit level', () => {
        expect(
            calculateBuildTotalCost(
                'LUXURY_BOOSTER',
                0,
                50,
                { luxuryResource: 'SULPHUR', ...MAX_REDUCERS },
                'SPIRIT_LEVEL',
            ),
        ).toBe(619724984);
    });

    test('Carpenter`s Workshop: lvl 0 -> 50', () => {
        expect(calculateBuildTotalCost('WOOD_REDUCER', 0, 50, { luxuryResource: 'MARBLE' })).toBe(10902398);
    });

    test('Carpenter`s Workshop: lvl 0 -> 50, max reducers, spirit level', () => {
        expect(
            calculateBuildTotalCost(
                'WOOD_REDUCER',
                0,
                50,
                { luxuryResource: 'MARBLE', ...MAX_REDUCERS },
                'SPIRIT_LEVEL',
            ),
        ).toBe(3924820);
    });

    test('Wine Press: lvl 0 -> 50', () => {
        expect(calculateBuildTotalCost('WINE_REDUCER', 0, 50, { luxuryResource: 'MARBLE' })).toBe(8989609);
    });

    test('Wine Press: lvl 0 -> 50, max reducers, spirit level', () => {
        expect(
            calculateBuildTotalCost(
                'WINE_REDUCER',
                0,
                50,
                { luxuryResource: 'MARBLE', ...MAX_REDUCERS },
                'SPIRIT_LEVEL',
            ),
        ).toBe(3236214);
    });

    test('Architect`s Office: lvl 0 -> 50', () => {
        expect(calculateBuildTotalCost('MARBLE_REDUCER', 0, 50, { luxuryResource: 'MARBLE' })).toBe(9624755);
    });

    test('Architect`s Office: lvl 0 -> 50, max reducers, spirit level', () => {
        expect(
            calculateBuildTotalCost(
                'MARBLE_REDUCER',
                0,
                50,
                { luxuryResource: 'MARBLE', ...MAX_REDUCERS },
                'SPIRIT_LEVEL',
            ),
        ).toBe(3464866);
    });

    test('Optician: lvl 0 -> 50', () => {
        expect(calculateBuildTotalCost('CRYSTAL_REDUCER', 0, 50, { luxuryResource: 'MARBLE' })).toBe(8043930);
    });

    test('Optician: lvl 0 -> 50, max reducers, spirit level', () => {
        expect(
            calculateBuildTotalCost(
                'CRYSTAL_REDUCER',
                0,
                50,
                { luxuryResource: 'MARBLE', ...MAX_REDUCERS },
                'SPIRIT_LEVEL',
            ),
        ).toBe(2895773);
    });

    test('Firework Test Area: lvl 0 -> 50', () => {
        expect(calculateBuildTotalCost('SULPHUR_REDUCER', 0, 50, { luxuryResource: 'MARBLE' })).toBe(8935036);
    });

    test('Firework Test Area: lvl 0 -> 50, max reducers, spirit level', () => {
        expect(
            calculateBuildTotalCost(
                'SULPHUR_REDUCER',
                0,
                50,
                { luxuryResource: 'MARBLE', ...MAX_REDUCERS },
                'SPIRIT_LEVEL',
            ),
        ).toBe(3216559);
    });

    test('Shrine: lvl 0 -> 41', () => {
        expect(calculateBuildTotalCost('SHRINE', 0, 41, { luxuryResource: 'MARBLE' })).toBe(59141091);
    });

    test('Shrine: lvl 0 -> 41, max reducers, spirit level', () => {
        expect(
            calculateBuildTotalCost('SHRINE', 0, 41, { luxuryResource: 'MARBLE', ...MAX_REDUCERS }, 'SPIRIT_LEVEL'),
        ).toBe(21290703);
    });

    test('GOVERNOR: lvl 0 -> 16, wood -50%, marble -20%, Spirit Level', () => {
        expect(
            calculateBuildTotalCost(
                'GOVERNOR',
                0,
                16,
                { luxuryResource: 'MARBLE', woodReduceLevel: 50, marbleReduceLevel: 20 },
                'SPIRIT_LEVEL',
            ),
        ).toBe(397271142);
    });

    test('GOVERNOR: lvl 0 -> 20', () => {
        expect(calculateBuildTotalCost('GOVERNOR', 0, 20, { luxuryResource: 'MARBLE' })).toBe(8686865493);
    });

    test('GOVERNOR: lvl 0 -> 20, max reducers, spirit level', () => {
        expect(
            calculateBuildTotalCost('GOVERNOR', 0, 20, { luxuryResource: 'MARBLE', ...MAX_REDUCERS }, 'SPIRIT_LEVEL'),
        ).toBe(3127271534);
    });
});
