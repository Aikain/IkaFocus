import {
    Account,
    City,
    Island,
    LuxuryResource,
    NextStep,
    Server,
    UpgradeBooster,
    UpgradeIslandProduction,
} from '@/types';

const WOOD: Record<number, { donation: number; maxWorker: number }> = {
    1: { donation: 0, maxWorker: 30 },
    2: { donation: 394, maxWorker: 38 },
    3: { donation: 992, maxWorker: 50 },
    4: { donation: 1734, maxWorker: 64 },
    5: { donation: 2788, maxWorker: 80 },
    6: { donation: 3783, maxWorker: 96 },
    7: { donation: 5632, maxWorker: 117 },
    8: { donation: 8139, maxWorker: 134 },
    9: { donation: 10452, maxWorker: 154 },
    10: { donation: 13298, maxWorker: 174 },
    11: { donation: 18478, maxWorker: 196 },
    12: { donation: 23213, maxWorker: 218 },
    13: { donation: 29038, maxWorker: 240 },
    14: { donation: 39494, maxWorker: 264 },
    15: { donation: 49107, maxWorker: 288 },
    16: { donation: 66010, maxWorker: 314 },
    17: { donation: 81766, maxWorker: 340 },
    18: { donation: 101146, maxWorker: 366 },
    19: { donation: 134598, maxWorker: 394 },
    20: { donation: 154304, maxWorker: 420 },
    21: { donation: 205012, maxWorker: 448 },
    22: { donation: 270839, maxWorker: 478 },
    23: { donation: 311541, maxWorker: 506 },
    24: { donation: 411229, maxWorker: 536 },
    25: { donation: 506475, maxWorker: 566 },
    26: { donation: 665201, maxWorker: 598 },
    27: { donation: 767723, maxWorker: 628 },
    28: { donation: 1007959, maxWorker: 660 },
    29: { donation: 1240496, maxWorker: 692 },
    30: { donation: 1526516, maxWorker: 724 },
    31: { donation: 1995717, maxWorker: 758 },
    32: { donation: 2311042, maxWorker: 790 },
    33: { donation: 3020994, maxWorker: 824 },
    34: { donation: 3935195, maxWorker: 860 },
    35: { donation: 4572136, maxWorker: 894 },
    36: { donation: 5624478, maxWorker: 928 },
    37: { donation: 7325850, maxWorker: 964 },
    38: { donation: 9011590, maxWorker: 1000 },
    39: { donation: 11085051, maxWorker: 1036 },
    40: { donation: 13635408, maxWorker: 1072 },
    41: { donation: 17704143, maxWorker: 1110 },
    42: { donation: 20630781, maxWorker: 1146 },
    43: { donation: 26786470, maxWorker: 1184 },
    44: { donation: 32948197, maxWorker: 1222 },
    45: { donation: 40527121, maxWorker: 1260 },
    46: { donation: 52472840, maxWorker: 1300 },
    47: { donation: 61315353, maxWorker: 1338 },
    48: { donation: 79388129, maxWorker: 1378 },
    49: { donation: 98648282, maxWorker: 1418 },
    50: { donation: 120108270, maxWorker: 1458 },
    51: { donation: 147734055, maxWorker: 1498 },
    52: { donation: 181713771, maxWorker: 1538 },
    53: { donation: 234684263, maxWorker: 1578 },
    54: { donation: 274916734, maxWorker: 1620 },
    55: { donation: 355055889, maxWorker: 1662 },
    56: { donation: 436719671, maxWorker: 1704 },
    57: { donation: 537166123, maxWorker: 1746 },
    58: { donation: 660715259, maxWorker: 1788 },
    59: { donation: 851379776, maxWorker: 1832 },
    60: { donation: 999598183, maxWorker: 1874 },
};

const LUXURY: Record<number, { donation: number; maxWorker: number }> = {
    1: { donation: 0, maxWorker: 20 },
    2: { donation: 1303, maxWorker: 32 },
    3: { donation: 2689, maxWorker: 48 },
    4: { donation: 4373, maxWorker: 66 },
    5: { donation: 7421, maxWorker: 88 },
    6: { donation: 10037, maxWorker: 110 },
    7: { donation: 13333, maxWorker: 132 },
    8: { donation: 20665, maxWorker: 158 },
    9: { donation: 26849, maxWorker: 184 },
    10: { donation: 37305, maxWorker: 212 },
    11: { donation: 47879, maxWorker: 240 },
    12: { donation: 65572, maxWorker: 270 },
    13: { donation: 89127, maxWorker: 302 },
    14: { donation: 106217, maxWorker: 332 },
    15: { donation: 152739, maxWorker: 366 },
    16: { donation: 193512, maxWorker: 400 },
    17: { donation: 244886, maxWorker: 434 },
    18: { donation: 309618, maxWorker: 468 },
    19: { donation: 414190, maxWorker: 504 },
    20: { donation: 552058, maxWorker: 542 },
    21: { donation: 660106, maxWorker: 578 },
    22: { donation: 925396, maxWorker: 618 },
    23: { donation: 1108885, maxWorker: 656 },
    24: { donation: 1471979, maxWorker: 696 },
    25: { donation: 1855942, maxWorker: 736 },
    26: { donation: 2339735, maxWorker: 776 },
    27: { donation: 3096779, maxWorker: 818 },
    28: { donation: 3903252, maxWorker: 860 },
    29: { donation: 5153666, maxWorker: 904 },
    30: { donation: 6199765, maxWorker: 946 },
    31: { donation: 8185063, maxWorker: 990 },
    32: { donation: 10314552, maxWorker: 1034 },
    33: { donation: 13588513, maxWorker: 1080 },
    34: { donation: 17122961, maxWorker: 1126 },
    35: { donation: 21576366, maxWorker: 1172 },
    36: { donation: 27187657, maxWorker: 1218 },
    37: { donation: 35747356, maxWorker: 1266 },
    38: { donation: 45043166, maxWorker: 1314 },
    39: { donation: 56755887, maxWorker: 1362 },
    40: { donation: 71513915, maxWorker: 1410 },
    41: { donation: 93863574, maxWorker: 1460 },
    42: { donation: 118269663, maxWorker: 1510 },
    43: { donation: 149021335, maxWorker: 1560 },
    44: { donation: 187768443, maxWorker: 1610 },
    45: { donation: 246053390, maxWorker: 1662 },
    46: { donation: 298104705, maxWorker: 1712 },
    47: { donation: 390638028, maxWorker: 1764 },
    48: { donation: 511136520, maxWorker: 1818 },
    49: { donation: 620180600, maxWorker: 1870 },
    50: { donation: 811484147, maxWorker: 1924 },
    51: { donation: 1022471710, maxWorker: 1978 },
    52: { donation: 1288316039, maxWorker: 2032 },
    53: { donation: 1623279894, maxWorker: 2086 },
    54: { donation: 2121087475, maxWorker: 2142 },
    55: { donation: 2577122967, maxWorker: 2196 },
    56: { donation: 3367442424, maxWorker: 2222 },
    57: { donation: 4242949202, maxWorker: 2308 },
    58: { donation: 5537089668, maxWorker: 2366 },
    59: { donation: 6736157730, maxWorker: 2422 },
    60: { donation: 8790687647, maxWorker: 2480 },
};

const WOOD_BOOSTER: Record<number, { wood: number; marble: number }> = {
    1: { wood: 250, marble: 0 },
    2: { wood: 430, marble: 104 },
    3: { wood: 664, marble: 237 },
    4: { wood: 968, marble: 410 },
    5: { wood: 1364, marble: 635 },
    6: { wood: 1878, marble: 928 },
    7: { wood: 2546, marble: 1309 },
    8: { wood: 3415, marble: 1803 },
    9: { wood: 4544, marble: 2446 },
    10: { wood: 6013, marble: 3282 },
    11: { wood: 7922, marble: 4368 },
    12: { wood: 10403, marble: 5781 },
    13: { wood: 13629, marble: 7617 },
    14: { wood: 17823, marble: 10004 },
    15: { wood: 23274, marble: 13108 },
    16: { wood: 30362, marble: 17142 },
    17: { wood: 39575, marble: 22387 },
    18: { wood: 51552, marble: 29204 },
    19: { wood: 67123, marble: 38068 },
    20: { wood: 87365, marble: 4959 },
    21: { wood: 11368, marble: 64569 },
    22: { wood: 147889, marble: 84042 },
    23: { wood: 19236, marble: 109357 },
    24: { wood: 250173, marble: 142266 },
    25: { wood: 32533, marble: 185047 },
    26: { wood: 423035, marble: 240664 },
    27: { wood: 55005, marble: 312965 },
    28: { wood: 71517, marble: 406956 },
    29: { wood: 929826, marble: 529145 },
    30: { wood: 1208879, marble: 68799 },
    31: { wood: 1571647, marble: 894489 },
    32: { wood: 2043247, marble: 1162938 },
    33: { wood: 2656358, marble: 1511952 },
    34: { wood: 3453445, marble: 1965711 },
    35: { wood: 4489711, marble: 2555649 },
    36: { wood: 5836927, marble: 3322636 },
    37: { wood: 7588399, marble: 4319807 },
    38: { wood: 9865430, marble: 5616243 },
    39: { wood: 12825724, marble: 7301758 },
    40: { wood: 16674305, marble: 9493121 },
    41: { wood: 21677721, marble: 12342143 },
    42: { wood: 28182498, marble: 16046197 },
    43: { wood: 36639146, marble: 20861892 },
    44: { wood: 47633359, marble: 27122845 },
    45: { wood: 61926577, marble: 35262801 },
    46: { wood: 80508723, marble: 45845674 },
    47: { wood: 104666764, marble: 59604620 },
    48: { wood: 136073846, marble: 77492822 },
    49: { wood: 176905169, marble: 100749532 },
    50: { wood: 229988640, marble: 130985914 },
    51: { wood: 299000730, marble: 170296669 },
    52: { wood: 388721096, marble: 221405146 },
    53: { wood: 505363618, marble: 287852011 },
    54: { wood: 657006755, marble: 374240536 },
    55: { wood: 854153052, marble: 486555497 },
    56: { wood: 1110456522, marble: 632577793 },
    57: { wood: 1443668303, marble: 822423477 },
    58: { wood: 1876866070, marble: 1069244578 },
    59: { wood: 2440052358, marble: 1390140238 },
    60: { wood: 3172232480, marble: 1807341295 },
    61: { wood: 4124115974, marble: 2349750384 },
};

const LUXURY_BOOSTER: Record<number, { wood: number; marble: number }> = {
    1: { wood: 274, marble: 0 },
    2: { wood: 467, marble: 116 },
    3: { wood: 718, marble: 255 },
    4: { wood: 1045, marble: 436 },
    5: { wood: 1469, marble: 671 },
    6: { wood: 2021, marble: 977 },
    7: { wood: 2738, marble: 1375 },
    8: { wood: 3671, marble: 1892 },
    9: { wood: 4883, marble: 2564 },
    10: { wood: 6459, marble: 3437 },
    11: { wood: 8508, marble: 4572 },
    12: { wood: 11172, marble: 6049 },
    13: { wood: 14634, marble: 7968 },
    14: { wood: 19135, marble: 10462 },
    15: { wood: 24987, marble: 13705 },
    16: { wood: 32594, marble: 17921 },
    17: { wood: 42483, marble: 23402 },
    18: { wood: 55339, marble: 30527 },
    19: { wood: 72051, marble: 3979 },
    20: { wood: 93778, marble: 51831 },
    21: { wood: 122022, marble: 67485 },
    22: { wood: 15874, marble: 87835 },
    23: { wood: 206472, marble: 11429 },
    24: { wood: 268525, marble: 148681 },
    25: { wood: 349194, marble: 19339 },
    26: { wood: 454063, marble: 251512 },
    27: { wood: 590393, marble: 327069 },
    28: { wood: 767621, marble: 425295 },
    29: { wood: 998019, marble: 552987 },
    30: { wood: 1297536, marble: 718988 },
    31: { wood: 1686907, marble: 934789 },
    32: { wood: 2193090, marble: 1215330 },
    33: { wood: 2851161, marble: 1580064 },
    34: { wood: 3706696, marble: 2054260 },
    35: { wood: 4818949, marble: 2670767 },
    36: { wood: 6264951, marble: 3472295 },
    37: { wood: 8144848, marble: 4514372 },
    38: { wood: 10588838, marble: 5869187 },
    39: { wood: 13766186, marble: 7630598 },
    40: { wood: 17896947, marble: 9920629 },
    41: { wood: 23267208, marble: 12897924 },
    42: { wood: 30248900, marble: 16768741 },
    43: { wood: 39325559, marble: 21801234 },
    44: { wood: 51125812, marble: 28344037 },
    45: { wood: 66466917, marble: 36850411 },
    46: { wood: 86411362, marble: 47909647 },
    47: { wood: 112340452, marble: 62287886 },
    48: { wood: 146049973, marble: 80981202 },
    49: { wood: 189874567, marble: 105284598 },
    50: { wood: 246849419, marble: 136881725 },
    51: { wood: 320920474, marble: 177961516 },
    52: { wood: 417217714, marble: 231369827 },
    53: { wood: 542410456, marble: 300806590 },
    54: { wood: 705169252, marble: 391082130 },
    55: { wood: 916766387, marble: 508450405 },
    56: { wood: 1191856573, marble: 661042257 },
    57: { wood: 1549491900, marble: 859428691 },
    58: { wood: 2014441336, marble: 1117353190 },
    59: { wood: 2618906170, marble: 1452683817 },
    60: { wood: 3404750192, marble: 1888651047 },
    61: { wood: 4426399083, marble: 2455457089 },
};

export const calculateWoodProduction = (island: Island, city: Omit<City, 'name'>, account: Account): number =>
    WOOD[island.woodLevel].maxWorker *
    (city.helpingHands ? (account.formOfGovernment === 'TECHNOCRACY' ? 1.15 : 1.125) : 1) *
    (1 + (account.server.bonuses.wood ?? 0) / 100) *
    (1 + 0.02 * (city.woodBoosterLevel ?? 0));

export const calculateLuxuryProduction = (island: Island, city: Omit<City, 'name'>, account: Account): number =>
    LUXURY[island.luxuryLevel].maxWorker *
    (city.helpingHands ? 1.125 : 1) *
    (1 + (getLuxuryBonus(account.server, island.luxuryResource) ?? 0) / 100) *
    (1 + 0.02 * (city.luxuryBoosterLevel ?? 0));

const getLuxuryBonus = (server: Server, luxury: LuxuryResource): number | undefined => {
    switch (luxury) {
        case 'WINE':
            return server.bonuses.wine;
        case 'MARBLE':
            return server.bonuses.marble;
        case 'CRYSTAL':
            return server.bonuses.crystal;
        case 'SULPHUR':
            return server.bonuses.sulphur;
    }
};

const calculateBuildTotalCost = (
    {
        wood,
        wine,
        marble,
        crystal,
        sulphur,
    }: Partial<{ wood: number; wine: number; marble: number; crystal: number; sulphur: number }>,
    city: City,
): number =>
    (wood ?? 0) * ((100 - (city.woodReduceLevel ?? 0)) / 100) +
    (wine ?? 0) * ((100 - (city.wineReduceLevel ?? 0)) / 100) +
    (marble ?? 0) * ((100 - (city.marbleReduceLevel ?? 0)) / 100) +
    (crystal ?? 0) * ((100 - (city.crystalReduceLevel ?? 0)) / 100) +
    (sulphur ?? 0) * ((100 - (city.sulphurReduceLevel ?? 0)) / 100);

export const calculateNextSteps = (account: Account): NextStep[] =>
    [
        ...account.islands.flatMap(
            (island) =>
                [
                    {
                        productionIncrease:
                            island.cities.reduce(
                                (total, city) =>
                                    total +
                                    calculateWoodProduction(
                                        { ...island, woodLevel: island.woodLevel + 1 },
                                        city,
                                        account,
                                    ),
                                0,
                            ) -
                            island.cities.reduce(
                                (total, city) => total + calculateWoodProduction(island, city, account),
                                0,
                            ),
                        cost: WOOD[island.woodLevel + 1].donation,
                        type: 'UPGRADE_WOOD',
                        target: island,
                    },
                    {
                        productionIncrease:
                            island.cities.reduce(
                                (total, city) =>
                                    total +
                                    calculateLuxuryProduction(
                                        { ...island, luxuryLevel: island.luxuryLevel + 1 },
                                        city,
                                        account,
                                    ),
                                0,
                            ) -
                            island.cities.reduce(
                                (total, city) => total + calculateLuxuryProduction(island, city, account),
                                0,
                            ),
                        cost: LUXURY[island.luxuryLevel + 1].donation,
                        type: 'UPGRADE_LUXURY',
                        target: island,
                    },
                ] as UpgradeIslandProduction[],
        ),
        ...account.islands.flatMap((island) =>
            island.cities.flatMap(
                (city) =>
                    [
                        {
                            productionIncrease:
                                calculateWoodProduction(
                                    island,
                                    { ...city, woodBoosterLevel: (city.woodBoosterLevel ?? 0) + 1 },
                                    account,
                                ) - calculateWoodProduction(island, city, account),
                            cost: calculateBuildTotalCost(WOOD_BOOSTER[(city.woodBoosterLevel ?? 0) + 1], city),
                            type: 'UPGRADE_WOOD_BOOSTER',
                            target: city,
                        },
                        {
                            productionIncrease:
                                calculateLuxuryProduction(
                                    island,
                                    { ...city, luxuryBoosterLevel: (city.luxuryBoosterLevel ?? 0) + 1 },
                                    account,
                                ) - calculateLuxuryProduction(island, city, account),
                            cost: calculateBuildTotalCost(LUXURY_BOOSTER[(city.luxuryBoosterLevel ?? 0) + 1], city),
                            type: 'UPGRADE_LUXURY_BOOSTER',
                            target: city,
                        },
                    ] as UpgradeBooster[],
            ),
        ),
    ]
        .map((nextStep) => ({ ...nextStep, paybackTime: nextStep.cost / nextStep.productionIncrease }))
        .sort((a, b) => a.paybackTime - b.paybackTime);
