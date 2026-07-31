import { describe, expect, test } from 'vitest';

import type { Account, Island } from '@/types';

import { calculateWoodProduction } from './utils.ts';

const EMPTY_ISLAND: Island = {
    woodLevel: 1,
    luxuryLevel: 1,
    luxuryResource: 'MARBLE',
    cities: [],
    x: 0,
    y: 0,
};

const EMPTY_ACCOUNT: Account = {
    cityCount: 1,
    formOfGovernment: 'IKACRACY',
    islands: [],
    name: '',
    server: {
        id: '0-en',
        community: 'en',
        number: 0,
        bonuses: {},
    },
    shrineLevel: 0,
};

describe.concurrent('total production', () => {
    test('wood: lvl 47, hh, technocracy, shrine 41 + PAN, wood booster 34, +35% server bonus', () => {
        expect(
            round(
                calculateWoodProduction(
                    { ...EMPTY_ISLAND, woodLevel: 47 },
                    { helpingHands: true, selectedGod: 'PAN', woodBoosterLevel: 34, luxuryResource: 'MARBLE' },
                    {
                        ...EMPTY_ACCOUNT,
                        formOfGovernment: 'TECHNOCRACY',
                        shrineLevel: 41,
                        server: {
                            ...EMPTY_ACCOUNT.server,
                            bonuses: {
                                wood: 35,
                                marble: 35,
                            },
                        },
                    },
                ),
            ),
        ).toBe(5255.43);
    });
});

const round = (n: number): number => Math.round(n * 100) / 100;
