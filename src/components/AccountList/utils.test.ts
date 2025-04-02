import { Account, Island } from '@/types';
import { describe, expect, test } from 'vitest';

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
    test('wood: lvl 47, hh, technocracy, shrine 41 + PAN, wood booster 36, +25% server bonus', () => {
        expect(
            Math.floor(
                calculateWoodProduction(
                    { ...EMPTY_ISLAND, woodLevel: 47 },
                    { helpingHands: true, selectedGod: 'PAN', woodBoosterLevel: 36 },
                    {
                        ...EMPTY_ACCOUNT,
                        formOfGovernment: 'TECHNOCRACY',
                        shrineLevel: 41,
                        server: {
                            ...EMPTY_ACCOUNT.server,
                            bonuses: {
                                wood: 25,
                                wine: 25,
                                crystal: 25,
                            },
                        },
                    },
                ),
            ),
        ).toBe(4943);
    });
});
