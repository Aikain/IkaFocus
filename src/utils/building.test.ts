import { describe, expect, test } from 'vitest';

import { City } from '@/types';

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
        expect(calculateBuildCost('WOOD_BOOSTER', 3, { luxuryResource: 'MARBLE' })).toBe(366 + 115);
    });

    test("Forester's House: lvl 20, wood -7%, Pulley", () => {
        expect(calculateBuildCost('WOOD_BOOSTER', 20, { luxuryResource: 'MARBLE', woodReduceLevel: 7 }, 'PULLEY')).toBe(
            Math.floor((72378 * (100 - 7 - 2)) / 100) + Math.floor((39416 * (100 - 2)) / 100),
        );
    });

    test("Forester's House: lvl 35, max reducers, Spirit Level", () => {
        expect(
            calculateBuildCost('WOOD_BOOSTER', 35, { luxuryResource: 'MARBLE', ...MAX_REDUCERS }, 'SPIRIT_LEVEL'),
        ).toBe(Math.floor((4590364 * (100 - 50 - 14)) / 100) + Math.floor((2548570 * (100 - 50 - 14)) / 100));
    });

    test('Stonemason: lvl 7', () => {
        expect(calculateBuildCost('LUXURY_BOOSTER', 7, { luxuryResource: 'MARBLE' })).toBe(1324 + 669);
    });

    test('Stonemason: lvl 23, wood -13%, wine -4%, Geometry', () => {
        expect(
            calculateBuildCost(
                'LUXURY_BOOSTER',
                23,
                { luxuryResource: 'MARBLE', woodReduceLevel: 13, wineReduceLevel: 4 },
                'GEOMETRY',
            ),
        ).toBe(Math.floor((175396 * (100 - 13 - 6)) / 100) + Math.floor((98470 * (100 - 6)) / 100));
    });

    test('Stonemason: lvl 32, max reducers, Spirit level', () => {
        expect(
            calculateBuildCost('LUXURY_BOOSTER', 32, { luxuryResource: 'MARBLE', ...MAX_REDUCERS }, 'SPIRIT_LEVEL'),
        ).toBe(Math.floor((2128021 * (100 - 50 - 14)) / 100) + Math.floor((1191607 * (100 - 50 - 14)) / 100));
    });

    test('Shrine: lvl 15', () => {
        expect(calculateBuildCost('SHRINE', 15, { luxuryResource: 'MARBLE' })).toBe(17420 + 1629 + 2408 + 1245 + 557);
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
            Math.floor((97349 * (100 - 14)) / 100) +
                Math.floor((8870 * (100 - 14)) / 100) +
                Math.floor((16846 * (100 - 14)) / 100) +
                Math.floor((8144 * (100 - 15 - 14)) / 100) +
                Math.floor((4416 * (100 - 6 - 14)) / 100),
        );
    });

    test('Shrine: lvl 41, max reducers, Spirit Level', () => {
        expect(calculateBuildCost('SHRINE', 41, { luxuryResource: 'MARBLE', ...MAX_REDUCERS }, 'SPIRIT_LEVEL')).toBe(
            Math.floor((7547835 * (100 - 50 - 14)) / 100) +
                Math.floor((619342 * (100 - 50 - 14)) / 100) +
                Math.floor((2394492 * (100 - 50 - 14)) / 100) +
                Math.floor((960142 * (100 - 50 - 14)) / 100) +
                Math.floor((801766 * (100 - 50 - 14)) / 100),
        );
    });

    test('GOVERNOR: lvl 6', () => {
        expect(calculateBuildCost('GOVERNOR', 6, { luxuryResource: 'MARBLE' })).toBe(
            153646 + 35701 + 36829 + 36765 + 38626,
        );
    });

    test('GOVERNOR: lvl 8, marble -7%, Spirit Level', () => {
        expect(
            calculateBuildCost('GOVERNOR', 8, { luxuryResource: 'MARBLE', marbleReduceLevel: 7 }, 'SPIRIT_LEVEL'),
        ).toBe(
            Math.floor((609013 * (100 - 14)) / 100) +
                Math.floor((151004 * (100 - 14)) / 100) +
                Math.floor((171872 * (100 - 7 - 14)) / 100) +
                Math.floor((143096 * (100 - 14)) / 100) +
                Math.floor((183448 * (100 - 14)) / 100),
        );
    });

    test('GOVERNOR: lvl 15, max reducers, Spirit Level', () => {
        expect(calculateBuildCost('GOVERNOR', 15, { luxuryResource: 'MARBLE', ...MAX_REDUCERS }, 'SPIRIT_LEVEL')).toBe(
            Math.floor((50768236 * (100 - 50 - 14)) / 100) +
                Math.floor((23118434 * (100 - 50 - 14)) / 100) +
                Math.floor((26290071 * (100 - 50 - 14)) / 100) +
                Math.floor((21641682 * (100 - 50 - 14)) / 100) +
                Math.floor((29726495 * (100 - 50 - 14)) / 100),
        );
    });
});

describe.concurrent('total cost', () => {
    test("Forester's House: lvl 0 -> 50", () => {
        expect(calculateBuildTotalCost('WOOD_BOOSTER', 0, 50, { luxuryResource: 'MARBLE' })).toBe(1618806091);
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
        ).toBe(582770150);
    });

    test('Winery: lvl 0 -> 50', () => {
        expect(calculateBuildTotalCost('LUXURY_BOOSTER', 0, 50, { luxuryResource: 'WINE' })).toBe(1721604428);
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
        ).toBe(619777543);
    });

    test('Stonemason: lvl 0 -> 50', () => {
        expect(calculateBuildTotalCost('LUXURY_BOOSTER', 0, 50, { luxuryResource: 'MARBLE' })).toBe(1708086215);
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
        ).toBe(614910987);
    });

    test('Glassblower: lvl 0 -> 50', () => {
        expect(calculateBuildTotalCost('LUXURY_BOOSTER', 0, 50, { luxuryResource: 'CRYSTAL' })).toBe(1714511301);
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
        ).toBe(617224021);
    });

    test('Alchemist`s Tower: lvl 0 -> 50', () => {
        expect(calculateBuildTotalCost('LUXURY_BOOSTER', 0, 50, { luxuryResource: 'SULPHUR' })).toBe(1721458469);
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
        ).toBe(619725006);
    });

    test('Carpenter`s Workshop: lvl 0 -> 50', () => {
        expect(calculateBuildTotalCost('WOOD_REDUCER', 0, 50, { luxuryResource: 'MARBLE' })).toBe(10902448);
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
        ).toBe(3924837);
    });

    test('Wine Press: lvl 0 -> 50', () => {
        expect(calculateBuildTotalCost('WINE_REDUCER', 0, 50, { luxuryResource: 'MARBLE' })).toBe(8989654);
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
        ).toBe(3236230);
    });

    test('Architect`s Office: lvl 0 -> 50', () => {
        expect(calculateBuildTotalCost('MARBLE_REDUCER', 0, 50, { luxuryResource: 'MARBLE' })).toBe(9624801);
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
        ).toBe(3464878);
    });

    test('Optician: lvl 0 -> 50', () => {
        expect(calculateBuildTotalCost('CRYSTAL_REDUCER', 0, 50, { luxuryResource: 'MARBLE' })).toBe(8043976);
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
        ).toBe(2895787);
    });

    test('Firework Test Area: lvl 0 -> 50', () => {
        expect(calculateBuildTotalCost('SULPHUR_REDUCER', 0, 50, { luxuryResource: 'MARBLE' })).toBe(8935079);
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
        ).toBe(3216579);
    });

    test('Shrine: lvl 0 -> 41', () => {
        expect(calculateBuildTotalCost('SHRINE', 0, 41, { luxuryResource: 'MARBLE' })).toBe(59141176);
    });

    test('Shrine: lvl 0 -> 41, max reducers, spirit level', () => {
        expect(
            calculateBuildTotalCost('SHRINE', 0, 41, { luxuryResource: 'MARBLE', ...MAX_REDUCERS }, 'SPIRIT_LEVEL'),
        ).toBe(21290734);
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
        ).toBe(397271164);
    });

    test('GOVERNOR: lvl 0 -> 20', () => {
        expect(calculateBuildTotalCost('GOVERNOR', 0, 20, { luxuryResource: 'MARBLE' })).toBe(8686865534);
    });

    test('GOVERNOR: lvl 0 -> 20, max reducers, spirit level', () => {
        expect(
            calculateBuildTotalCost('GOVERNOR', 0, 20, { luxuryResource: 'MARBLE', ...MAX_REDUCERS }, 'SPIRIT_LEVEL'),
        ).toBe(3127271549);
    });
});
