import { describe, expect, test } from 'vitest';

import { getBasicProduction, getCost, getTotalCost } from './island.ts';

describe.concurrent('basic production', () => {
    test('wood: lvl 1', () => {
        expect(getBasicProduction('wood', 1, false, 'IKACRACY')).toBe(30);
    });

    test('wood: lvl 17, technocracy', () => {
        expect(getBasicProduction('wood', 17, false, 'TECHNOCRACY')).toBe(340);
    });

    test('wood: lvl 44, hh', () => {
        expect(getBasicProduction('wood', 44, true, 'THEOCRACY')).toBe(1374.75);
    });

    test('wood: lvl 45, hh, technocracy', () => {
        expect(getBasicProduction('wood', 45, true, 'TECHNOCRACY')).toBe(1449);
    });

    test('wood: lvl 46, hh, technocracy', () => {
        expect(getBasicProduction('wood', 46, true, 'TECHNOCRACY')).toBe(1495);
    });

    test('luxury: lvl 1', () => {
        expect(getBasicProduction('luxury', 1, false, 'IKACRACY')).toBe(20);
    });

    test('luxury: lvl 23, technocracy', () => {
        expect(getBasicProduction('luxury', 23, false, 'ARISTOCRACY')).toBe(656);
    });

    test('luxury: lvl 38, hh', () => {
        expect(getBasicProduction('luxury', 36, true, 'THEOCRACY')).toBe(1370.25);
    });

    test('luxury: lvl 40, hh, technocracy', () => {
        expect(getBasicProduction('luxury', 40, true, 'TECHNOCRACY')).toBe(1621.5);
    });
});

describe.concurrent('cost', () => {
    test('wood: lvl 2', () => {
        expect(getCost('UPGRADE_WOOD', 2)).toBe(394);
    });

    test('wood: lvl 31', () => {
        expect(getCost('UPGRADE_WOOD', 31)).toBe(1995717);
    });

    test('wood: lvl 46', () => {
        expect(getCost('UPGRADE_WOOD', 46)).toBe(52472840);
    });

    test('wood: lvl 47', () => {
        expect(getCost('UPGRADE_WOOD', 47)).toBe(61315353);
    });

    test('luxury: lvl 2', () => {
        expect(getCost('UPGRADE_LUXURY', 2)).toBe(1303);
    });

    test('luxury: lvl 25', () => {
        expect(getCost('UPGRADE_LUXURY', 25)).toBe(1855942);
    });

    test('luxury: lvl 37', () => {
        expect(getCost('UPGRADE_LUXURY', 37)).toBe(35747356);
    });

    test('luxury: lvl 41', () => {
        expect(getCost('UPGRADE_LUXURY', 41)).toBe(93863574);
    });
});

describe.concurrent('total cost', () => {
    test('wood: lvl 1 -> 3', () => {
        expect(getTotalCost('UPGRADE_WOOD', 1, 3)).toBe(1386);
    });

    test('wood: lvl 1 -> 7', () => {
        expect(getTotalCost('UPGRADE_WOOD', 1, 7)).toBe(15321);
    });

    test('wood: lvl 1 -> 60', () => {
        expect(getTotalCost('UPGRADE_WOOD', 1, 60)).toBe(5299388126);
    });

    test('wood: lvl 40 -> 42', () => {
        expect(getTotalCost('UPGRADE_WOOD', 40, 42)).toBe(38334924);
    });

    test('luxury: lvl 1 -> 4', () => {
        expect(getTotalCost('UPGRADE_LUXURY', 1, 4)).toBe(8365);
    });

    test('luxury: lvl 1 -> 8', () => {
        expect(getTotalCost('UPGRADE_LUXURY', 1, 8)).toBe(59821);
    });

    test('luxury: lvl 1 -> 60', () => {
        expect(getTotalCost('UPGRADE_LUXURY', 1, 60)).toBe(41069205875);
    });

    test('luxury: lvl 32 -> 36', () => {
        expect(getTotalCost('UPGRADE_LUXURY', 32, 36)).toBe(79475497);
    });
});
