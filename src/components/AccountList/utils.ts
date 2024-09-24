import { Account, City, Island, LuxuryResource, Server } from '@/types';

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
