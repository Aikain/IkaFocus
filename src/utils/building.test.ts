import { City } from '@/types';
import { describe, expect, test } from 'vitest';

import { calculateBuildCost, calculateBuildTotalCost } from './building.ts';

const MAX_REDUCERS: Omit<City, 'name'> = {
    woodReduceLevel: 50,
    wineReduceLevel: 50,
    marbleReduceLevel: 50,
    crystalReduceLevel: 50,
    sulphurReduceLevel: 50,
};

describe.concurrent('cost', () => {
    test("Forester's House: lvl 3", () => {
        expect(calculateBuildCost('WOOD_BOOSTER', 3)).toBe(664 + 237);
    });

    test("Forester's House: lvl 20, wood -7%, Pulley", () => {
        expect(calculateBuildCost('WOOD_BOOSTER', 20, { woodReduceLevel: 7 }, 'PULLEY')).toBe(
            Math.floor((87365 * (100 - 7 - 2)) / 100) + Math.floor((49590 * (100 - 2)) / 100),
        );
    });

    test("Forester's House: lvl 35, max reducers, Spirit Level", () => {
        expect(calculateBuildCost('WOOD_BOOSTER', 35, MAX_REDUCERS, 'SPIRIT_LEVEL')).toBe(
            Math.floor((4489711 * (100 - 50 - 14)) / 100) + Math.floor((2555649 * (100 - 50 - 14)) / 100),
        );
    });

    test('Stonemason: lvl 7', () => {
        expect(calculateBuildCost('LUXURY_BOOSTER', 7)).toBe(2738 + 1375);
    });

    test('Stonemason: lvl 23, wood -13%, wine -4%, Geometry', () => {
        expect(calculateBuildCost('LUXURY_BOOSTER', 23, { woodReduceLevel: 13, wineReduceLevel: 4 }, 'GEOMETRY')).toBe(
            Math.floor((206472 * (100 - 13 - 6)) / 100) + Math.floor((114290 * (100 - 6)) / 100),
        );
    });

    test('Stonemason: lvl 32, max reducers, Spirit level', () => {
        expect(calculateBuildCost('LUXURY_BOOSTER', 32, MAX_REDUCERS, 'SPIRIT_LEVEL')).toBe(
            Math.floor((2193090 * (100 - 50 - 14)) / 100) + Math.floor((1215330 * (100 - 50 - 14)) / 100),
        );
    });

    test('Shrine: lvl 15', () => {
        expect(calculateBuildCost('SHRINE', 15)).toBe(21162 + 1839 + 3017 + 1252 + 429);
    });

    test('Shrine: lvl 22, crystal -15%, sulphur -6%, Spirit Level', () => {
        expect(
            calculateBuildCost('SHRINE', 22, { crystalReduceLevel: 15, sulphurReduceLevel: 6 }, 'SPIRIT_LEVEL'),
        ).toBe(
            Math.floor((103190 * (100 - 14)) / 100) +
                Math.floor((8870 * (100 - 14)) / 100) +
                Math.floor((18230 * (100 - 14)) / 100) +
                Math.floor((7567 * (100 - 15 - 14)) / 100) +
                Math.floor((3327 * (100 - 6 - 14)) / 100),
        );
    });

    test('Shrine: lvl 41, max reducers, Spirit Level', () => {
        expect(calculateBuildCost('SHRINE', 41, MAX_REDUCERS, 'SPIRIT_LEVEL')).toBe(
            Math.floor((7608367 * (100 - 50 - 14)) / 100) +
                Math.floor((634434 * (100 - 50 - 14)) / 100) +
                Math.floor((2405243 * (100 - 50 - 14)) / 100) +
                Math.floor((998361 * (100 - 50 - 14)) / 100) +
                Math.floor((864959 * (100 - 50 - 14)) / 100),
        );
    });

    test('Covernor: lvl 6', () => {
        expect(calculateBuildCost('COVERNOR', 6)).toBe(159184 + 44534 + 48114 + 42400 + 53573);
    });

    test('Covernor: lvl 8, marble -7%, Spirit Level', () => {
        expect(calculateBuildCost('COVERNOR', 8, { marbleReduceLevel: 7 }, 'SPIRIT_LEVEL')).toBe(
            Math.floor((649936 * (100 - 14)) / 100) +
                Math.floor((179078 * (100 - 14)) / 100) +
                Math.floor((197490 * (100 - 7 - 14)) / 100) +
                Math.floor((169672 * (100 - 14)) / 100) +
                Math.floor((226661 * (100 - 14)) / 100),
        );
    });

    test('Covernor: lvl 15, max reducers, Spirit Level', () => {
        expect(calculateBuildCost('COVERNOR', 15, MAX_REDUCERS, 'SPIRIT_LEVEL')).toBe(
            Math.floor((51520771 * (100 - 50 - 14)) / 100) +
                Math.floor((22977258 * (100 - 50 - 14)) / 100) +
                Math.floor((25574331 * (100 - 50 - 14)) / 100) +
                Math.floor((21722240 * (100 - 50 - 14)) / 100) +
                Math.floor((29739739 * (100 - 50 - 14)) / 100),
        );
    });
});

describe.concurrent('total cost', () => {
    test("Forester's House: lvl 0 -> 61", () => {
        expect(calculateBuildTotalCost('WOOD_BOOSTER', 0, 61)).toBe(17868072086 + 10179257792);
    });

    test("Forester's House: lvl 0 -> 61, max reducers, spirit level", () => {
        expect(calculateBuildTotalCost('WOOD_BOOSTER', 0, 61, MAX_REDUCERS, 'SPIRIT_LEVEL')).toBe(
            6432505920 + 3664532776, // calculated with excel
        );
    });

    test('Luxury booster: lvl 0 -> 61', () => {
        expect(calculateBuildTotalCost('LUXURY_BOOSTER', 0, 61)).toBe(19177819290 + 10637261737);
    });

    test('Luxury booster: lvl 0 -> 61, max reducers, spirit level', () => {
        expect(calculateBuildTotalCost('LUXURY_BOOSTER', 0, 61, MAX_REDUCERS, 'SPIRIT_LEVEL')).toBe(
            6904014913 + 3829414195, // calculated with excel
        );
    });

    test('Carpenter`s Workshop: lvl 0 -> 50', () => {
        expect(calculateBuildTotalCost('WOOD_REDUCER', 0, 50)).toBe(5468029 + 5425650);
    });

    test('Carpenter`s Workshop: lvl 0 -> 50, max reducers, spirit level', () => {
        expect(calculateBuildTotalCost('WOOD_REDUCER', 0, 50, MAX_REDUCERS, 'SPIRIT_LEVEL')).toBe(
            1968466 + 1953216, // calculated with excel
        );
    });

    test('Wine Press: lvl 0 -> 50', () => {
        expect(calculateBuildTotalCost('WINE_REDUCER', 0, 50)).toBe(4052131 + 4931529);
    });

    test('Wine Press: lvl 0 -> 50, max reducers, spirit level', () => {
        expect(calculateBuildTotalCost('WINE_REDUCER', 0, 50, MAX_REDUCERS, 'SPIRIT_LEVEL')).toBe(
            1458744 + 1775328, // calculated with excel
        );
    });

    test('Architect`s Office: lvl 0 -> 50', () => {
        expect(calculateBuildTotalCost('MARBLE_REDUCER', 0, 50)).toBe(6924265 + 2681355);
    });

    test('Architect`s Office: lvl 0 -> 50, max reducers, spirit level', () => {
        expect(calculateBuildTotalCost('MARBLE_REDUCER', 0, 50, MAX_REDUCERS, 'SPIRIT_LEVEL')).toBe(
            2492710 + 965261, // calculated with excel
        );
    });

    test('Optician: lvl 0 -> 50', () => {
        expect(calculateBuildTotalCost('CRYSTAL_REDUCER', 0, 50)).toBe(4552609 + 3464349);
    });

    test('Optician: lvl 0 -> 50, max reducers, spirit level', () => {
        expect(calculateBuildTotalCost('CRYSTAL_REDUCER', 0, 50, MAX_REDUCERS, 'SPIRIT_LEVEL')).toBe(
            1638914 + 1247143, // calculated with excel
        );
    });

    test('Firework Test Area: lvl 0 -> 50', () => {
        expect(calculateBuildTotalCost('SULPHUR_REDUCER', 0, 50)).toBe(3868114 + 5055489);
    });

    test('Firework Test Area: lvl 0 -> 50, max reducers, spirit level', () => {
        expect(calculateBuildTotalCost('SULPHUR_REDUCER', 0, 50, MAX_REDUCERS, 'SPIRIT_LEVEL')).toBe(
            1392496 + 1819950, // calculated with excel
        );
    });

    test('Shrine: lvl 0 -> 41', () => {
        expect(calculateBuildTotalCost('SHRINE', 0, 41)).toBe(37559062 + 3151535 + 10613472 + 4404823 + 3408566);
    });

    test('Shrine: lvl 0 -> 41, max reducers, spirit level', () => {
        expect(calculateBuildTotalCost('SHRINE', 0, 41, MAX_REDUCERS, 'SPIRIT_LEVEL')).toBe(
            13521243 + 1134532 + 3820830 + 1585718 + 1227071, // calculated with excel
        );
    });

    test('Covernor: lvl 0 -> 16, wood -50%, marble -20%, Spirit Level', () => {
        expect(
            calculateBuildTotalCost('COVERNOR', 0, 16, { woodReduceLevel: 50, marbleReduceLevel: 20 }, 'SPIRIT_LEVEL'),
        ).toBe(398263731);
    });

    test('Covernor: lvl 0 -> 20', () => {
        expect(calculateBuildTotalCost('COVERNOR', 0, 20)).toBe(
            2261086550 + 1471820149 + 1643666243 + 1390300393 + 1920460693,
        );
    });

    test('Covernor: lvl 0 -> 20, max reducers, spirit level', () => {
        expect(calculateBuildTotalCost('COVERNOR', 0, 20, MAX_REDUCERS, 'SPIRIT_LEVEL')).toBe(
            813991148 + 529855246 + 591719839 + 500508133 + 691365841, // calculated with excel
        );
    });
});
