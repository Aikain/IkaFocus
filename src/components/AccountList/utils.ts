import {
    Account,
    City,
    CreateNewCity,
    God,
    Island,
    LuxuryResource,
    NextStep,
    Research,
    Server,
    UpgradeBuilding,
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

type BuildingCost = { wood?: number; wine?: number; marble?: number; crystal?: number; sulphur?: number };

const WOOD_BOOSTER: Record<number, BuildingCost> = {
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
    20: { wood: 87365, marble: 49590 },
    21: { wood: 11368, marble: 64569 },
    22: { wood: 147889, marble: 84042 },
    23: { wood: 192360, marble: 109357 },
    24: { wood: 250173, marble: 142266 },
    25: { wood: 325330, marble: 185047 },
    26: { wood: 423035, marble: 240664 },
    27: { wood: 550050, marble: 312965 },
    28: { wood: 715170, marble: 406956 },
    29: { wood: 929826, marble: 529145 },
    30: { wood: 1208879, marble: 687990 },
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

const LUXURY_BOOSTER: Record<number, BuildingCost> = {
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
    19: { wood: 72051, marble: 39790 },
    20: { wood: 93778, marble: 51831 },
    21: { wood: 122022, marble: 67485 },
    22: { wood: 158740, marble: 87835 },
    23: { wood: 206472, marble: 11429 },
    24: { wood: 268525, marble: 148681 },
    25: { wood: 349194, marble: 193390 },
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

const SHRINE: Record<number, BuildingCost> = {
    1: { wood: 890, wine: 0, marble: 0, crystal: 0, sulphur: 0 },
    2: { wood: 1116, wine: 0, marble: 0, crystal: 0, sulphur: 0 },
    3: { wood: 1400, wine: 124, marble: 0, crystal: 0, sulphur: 0 },
    4: { wood: 1755, wine: 155, marble: 0, crystal: 0, sulphur: 0 },
    5: { wood: 2201, wine: 194, marble: 231, crystal: 0, sulphur: 0 },
    6: { wood: 2760, wine: 243, marble: 299, crystal: 0, sulphur: 0 },
    7: { wood: 3461, wine: 305, marble: 386, crystal: 0, sulphur: 0 },
    8: { wood: 4340, wine: 381, marble: 499, crystal: 0, sulphur: 0 },
    9: { wood: 5442, wine: 478, marble: 646, crystal: 268, sulphur: 0 },
    10: { wood: 6824, wine: 598, marble: 835, crystal: 347, sulphur: 0 },
    11: { wood: 8558, wine: 749, marble: 1079, crystal: 448, sulphur: 133 },
    12: { wood: 10732, wine: 937, marble: 1396, crystal: 579, sulphur: 178 },
    13: { wood: 13457, wine: 1173, marble: 1805, crystal: 749, sulphur: 239 },
    14: { wood: 16876, wine: 1469, marble: 2333, crystal: 969, sulphur: 320 },
    15: { wood: 21162, wine: 1839, marble: 3017, crystal: 1252, sulphur: 429 },
    16: { wood: 26537, wine: 2303, marble: 3901, crystal: 1619, sulphur: 575 },
    17: { wood: 33277, wine: 2883, marble: 5044, crystal: 2094, sulphur: 770 },
    18: { wood: 41730, wine: 3610, marble: 6522, crystal: 2707, sulphur: 1032 },
    19: { wood: 52329, wine: 4520, marble: 8433, crystal: 3500, sulphur: 1383 },
    20: { wood: 65621, wine: 5658, marble: 10904, crystal: 4526, sulphur: 1853 },
    21: { wood: 82289, wine: 7084, marble: 14099, crystal: 5852, sulphur: 2483 },
    22: { wood: 103190, wine: 8870, marble: 18230, crystal: 7567, sulphur: 3327 },
    23: { wood: 129400, wine: 11105, marble: 23571, crystal: 9784, sulphur: 4458 },
    24: { wood: 162268, wine: 13903, marble: 30478, crystal: 12651, sulphur: 5973 },
    25: { wood: 203484, wine: 17407, marble: 39408, crystal: 16357, sulphur: 8004 },
    26: { wood: 255169, wine: 21793, marble: 50954, crystal: 21150, sulphur: 10726 },
    27: { wood: 319982, wine: 27285, marble: 65884, crystal: 27347, sulphur: 14372 },
    28: { wood: 401258, wine: 34161, marble: 85188, crystal: 35360, sulphur: 19259 },
    29: { wood: 503177, wine: 42770, marble: 110148, crystal: 45720, sulphur: 25807 },
    30: { wood: 630984, wine: 53547, marble: 142421, crystal: 59116, sulphur: 34581 },
    31: { wood: 791254, wine: 67041, marble: 184151, crystal: 76437, sulphur: 46339 },
    32: { wood: 992233, wine: 83936, marble: 238107, crystal: 98833, sulphur: 62094 },
    33: { wood: 1244260, wine: 105088, marble: 307872, crystal: 127791, sulphur: 83206 },
    34: { wood: 1560302, wine: 131570, marble: 398079, crystal: 165233, sulphur: 111497 },
    35: { wood: 1956619, wine: 164725, marble: 514716, crystal: 213647, sulphur: 149406 },
    36: { wood: 2453600, wine: 206236, marble: 665528, crystal: 276245, sulphur: 200203 },
    37: { wood: 3076815, wine: 258208, marble: 860528, crystal: 357185, sulphur: 268273 },
    38: { wood: 3858325, wine: 323276, marble: 1112662, crystal: 461841, sulphur: 359485 },
    39: { wood: 4838340, wine: 404741, marble: 1438672, crystal: 597160, sulphur: 481710 },
    40: { wood: 6067278, wine: 506736, marble: 1860203, crystal: 772128, sulphur: 645492 },
    41: { wood: 7608367, wine: 634434, marble: 2405243, crystal: 998361, sulphur: 864959 },
};

const COVERNOR: Record<number, BuildingCost> = {
    1: { wood: 712, wine: 0, marble: 0, crystal: 0, sulphur: 0 },
    2: { wood: 5824, wine: 0, marble: 1434, crystal: 0, sulphur: 0 },
    3: { wood: 16048, wine: 0, marble: 4546, crystal: 0, sulphur: 3089 },
    4: { wood: 36496, wine: 10898, marble: 10770, crystal: 0, sulphur: 10301 },
    5: { wood: 77392, wine: 22110, marble: 23218, crystal: 21188, sulphur: 24725 },
    6: { wood: 159184, wine: 44534, marble: 48114, crystal: 42400, sulphur: 53573 },
    7: { wood: 322768, wine: 89382, marble: 97906, crystal: 84824, sulphur: 111269 },
    8: { wood: 649936, wine: 179078, marble: 197490, crystal: 169672, sulphur: 226661 },
    9: { wood: 1304272, wine: 358470, marble: 396658, crystal: 339368, sulphur: 457445 },
    10: { wood: 2612944, wine: 717254, marble: 794994, crystal: 678760, sulphur: 919013 },
    11: { wood: 4743518, wine: 1434822, marble: 1591666, crystal: 1357544, sulphur: 1842149 },
    12: { wood: 8611345, wine: 2870272, marble: 3186691, crystal: 2715136, sulphur: 3692562 },
    13: { wood: 15632968, wine: 5741800, marble: 6380109, crystal: 5430368, sulphur: 7401691 },
    14: { wood: 28379968, wine: 11486115, marble: 12773685, crystal: 10860928, sulphur: 14836588 },
    15: { wood: 51520771, wine: 22977258, marble: 25574331, crystal: 21722240, sulphur: 29739739 },
    16: { wood: 93530403, wine: 45964577, marble: 51202643, crystal: 43445248, sulphur: 59612900 },
    17: { wood: 169794358, wine: 91949276, marble: 102513360, crystal: 86892032, sulphur: 119493244 },
    18: { wood: 308243344, wine: 183938806, marble: 205243096, crystal: 173787137, sulphur: 239522576 },
    19: { wood: 559582545, wine: 367958137, marble: 410919400, crystal: 347580419, sulphur: 480119730 },
    20: { wood: 1015861754, wine: 736077360, marble: 822706132, crystal: 695173129, sulphur: 962393438 },
};

// TODO: premium
// TODO: Cinetheatre
// TODO: Helios
export const calculateWoodProduction = (island: Island, city: Omit<City, 'name'>, account: Account): number =>
    // Basic
    WOOD[island.woodLevel].maxWorker *
    (city.helpingHands ? (account.formOfGovernment === 'TECHNOCRACY' ? 1.15 : 1.125) : 1) *
    // World
    (1 + (account.server.bonuses.wood ?? 0) / 100) *
    // Bonuses
    (1 +
        0.02 * (city.woodBoosterLevel ?? 0) +
        (account.shrineLevel !== 0 && city.selectedGod === 'PAN' ? 0.03 + 0.02 * account.shrineLevel : 0)) *
    // Corruption
    (1 - calculateCorruptionPercent(city, account) / 100);

// TODO: premium
// TODO: Cinetheatre
// TODO: Helios
export const calculateLuxuryProduction = (island: Island, city: Omit<City, 'name'>, account: Account): number =>
    // Basic
    LUXURY[island.luxuryLevel].maxWorker *
    (city.helpingHands ? 1.125 : 1) *
    // World
    (1 + (getLuxuryBonus(account.server, island.luxuryResource) ?? 0) / 100) *
    // Bonuses
    (1 +
        0.02 * (city.luxuryBoosterLevel ?? 0) +
        (account.shrineLevel !== 0 && city.selectedGod && isGodActive(city.selectedGod, island.luxuryResource)
            ? 0.03 + 0.02 * account.shrineLevel
            : 0)) *
    // Corruption
    (1 - calculateCorruptionPercent(city, account) / 100);

export const calculateCorruptionPercent = (city: Omit<City, 'name'>, account: Account): number =>
    Math.min(
        Math.max(
            (1 - ((city.governorLevel ?? 0) + 1) / account.cityCount) * 100 +
                (account.formOfGovernment === 'ARISTOCRACY' || account.formOfGovernment === 'OLIGARCHY'
                    ? 3
                    : account.formOfGovernment === 'NOMOCRACY'
                      ? -5
                      : 0),
            0,
        ),
        100,
    );

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

const isGodActive = (god: God, luxury: LuxuryResource): boolean =>
    (god === 'DIONYSUS' && luxury === 'WINE') ||
    (god === 'TYCHE' && luxury === 'MARBLE') ||
    (god === 'THEIA' && luxury === 'CRYSTAL') ||
    (god === 'HEPHAESTUS' && luxury === 'SULPHUR');

const calculateBuildTotalCost = (
    level: number,
    levelCosts: Record<number, BuildingCost>,
    city: Omit<City, 'name'>,
    research?: Research,
): number =>
    Array.from(Array(level))
        .map((_, i) => calculateBuildLevelTotalCost(levelCosts[level - i], city, research))
        .reduce((total, cost) => total + cost, 0);

const calculateBuildLevelTotalCost = (
    {
        wood,
        wine,
        marble,
        crystal,
        sulphur,
    }: Partial<{ wood: number; wine: number; marble: number; crystal: number; sulphur: number }>,
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

// TODO: pick best resource (server bonuses)?
const EMPTY_ISLAND: Island = {
    x: 0,
    y: 0,
    luxuryResource: 'MARBLE' as const,
    woodLevel: 1,
    luxuryLevel: 1,
    cities: [],
};

export const calculateNextSteps = (account: Account): NextStep[] =>
    [
        ...calculateIslandUpgrades(account),
        ...calculateCityUpgrades(account),
        ...calculateShrineUpgrade(account),
        ...calculateNewCities(account),
    ]
        .filter(({ productionIncrease }) => productionIncrease !== 0)
        .map((nextStep) => ({ ...nextStep, paybackTime: nextStep.cost / nextStep.productionIncrease }))
        .sort((a, b) => a.paybackTime - b.paybackTime);

const calculateIslandUpgrades = (account: Account): Omit<UpgradeIslandProduction, 'paybackTime'>[] =>
    account.islands.flatMap((island) => [
        ...calculateIslandUpgrade(island, 'UPGRADE_WOOD', island.woodLevel, (city: City, upgrade: boolean) =>
            calculateWoodProduction({ ...island, woodLevel: island.woodLevel + (upgrade ? 1 : 0) }, city, account),
        ),
        ...calculateIslandUpgrade(island, 'UPGRADE_LUXURY', island.luxuryLevel, (city: City, upgrade: boolean) =>
            calculateLuxuryProduction(
                { ...island, luxuryLevel: island.luxuryLevel + (upgrade ? 1 : 0) },
                city,
                account,
            ),
        ),
    ]);

const calculateIslandUpgrade = (
    island: Island,
    type: 'UPGRADE_WOOD' | 'UPGRADE_LUXURY',
    level: number,
    calculateIncrease: (city: City, upgrade: boolean) => number,
): Omit<UpgradeIslandProduction, 'paybackTime'>[] =>
    level < 60
        ? [
              {
                  type,
                  target: island,
                  productionIncrease:
                      island.cities.reduce((total, city) => total + calculateIncrease(city, true), 0) -
                      island.cities.reduce((total, city) => total + calculateIncrease(city, false), 0),
                  cost: (type === 'UPGRADE_WOOD' ? WOOD : LUXURY)[level + 1].donation,
              },
          ]
        : [];

const calculateCityUpgrades = (account: Account): Omit<UpgradeBuilding, 'paybackTime'>[] =>
    account.islands.flatMap((island) =>
        island.cities.flatMap((city) => [
            ...calculateCityUpgrade(
                city,
                'UPGRADE_WOOD_BOOSTER',
                (city.woodBoosterLevel ?? 0) < 61,
                (city: City, upgrade: boolean) =>
                    calculateWoodProduction(
                        island,
                        { ...city, woodBoosterLevel: (city.woodBoosterLevel ?? 0) + (upgrade ? 1 : 0) },
                        account,
                    ),
                (city: City) =>
                    calculateBuildLevelTotalCost(
                        WOOD_BOOSTER[(city.woodBoosterLevel ?? 0) + 1],
                        city,
                        account.research,
                    ),
            ),
            ...calculateCityUpgrade(
                city,
                'UPGRADE_LUXURY_BOOSTER',
                (city.luxuryBoosterLevel ?? 0) < 61,
                (city: City, upgrade: boolean) =>
                    calculateLuxuryProduction(
                        island,
                        { ...city, luxuryBoosterLevel: (city.luxuryBoosterLevel ?? 0) + (upgrade ? 1 : 0) },
                        account,
                    ),
                (city: City) =>
                    calculateBuildLevelTotalCost(
                        LUXURY_BOOSTER[(city.luxuryBoosterLevel ?? 0) + 1],
                        city,
                        account.research,
                    ),
            ),
            ...calculateCityUpgrade(
                city,
                'UPGRADE_COVERNOR',
                (city.governorLevel ?? 0) < account.cityCount - 1,
                (city: City, upgrade: boolean) =>
                    calculateWoodProduction(
                        island,
                        { ...city, governorLevel: (city.governorLevel ?? 0) + (upgrade ? 1 : 0) },
                        account,
                    ) +
                    calculateLuxuryProduction(
                        island,
                        { ...city, governorLevel: (city.governorLevel ?? 0) + (upgrade ? 1 : 0) },
                        account,
                    ),
                (city: City) =>
                    calculateBuildLevelTotalCost(COVERNOR[(city.governorLevel ?? 0) + 1], city, account.research),
            ),
        ]),
    );

const calculateCityUpgrade = (
    city: City,
    type: 'UPGRADE_WOOD_BOOSTER' | 'UPGRADE_LUXURY_BOOSTER' | 'UPGRADE_COVERNOR',
    calculate: boolean,
    calculateIncrease: (city: City, upgrade: boolean) => number,
    calculateCost: (city: City) => number,
): Omit<UpgradeBuilding, 'paybackTime'>[] =>
    calculate
        ? [
              {
                  type,
                  target: city,
                  productionIncrease: calculateIncrease(city, true) - calculateIncrease(city, false),
                  cost: calculateCost(city),
              },
          ]
        : [];

const calculateShrineUpgrade = (account: Account): Omit<UpgradeBuilding, 'paybackTime'>[] =>
    findCityForShrine(account).map((city) => ({
        type: 'UPGRADE_SHRINE' as const,
        target: city,
        productionIncrease:
            account.islands.reduce(
                (total, island) =>
                    total +
                    island.cities.reduce(
                        (total, city) =>
                            total +
                            calculateWoodProduction(island, city, {
                                ...account,
                                shrineLevel: account.shrineLevel + 1,
                            }) +
                            calculateLuxuryProduction(island, city, {
                                ...account,
                                shrineLevel: account.shrineLevel + 1,
                            }),
                        0,
                    ),
                0,
            ) -
            account.islands.reduce(
                (total, island) =>
                    total +
                    island.cities.reduce(
                        (total, city) =>
                            total +
                            calculateWoodProduction(island, city, account) +
                            calculateLuxuryProduction(island, city, account),
                        0,
                    ),
                0,
            ),
        cost: calculateBuildLevelTotalCost(SHRINE[(city.shrineLevel ?? 0) + 1], city, account.research),
    }));

const findCityForShrine = ({ islands, shrineLevel }: Account): City[] =>
    islands
        .flatMap((island) => island.cities.filter((city) => city.shrineLevel !== undefined || shrineLevel === 0))
        .filter(({ shrineLevel }) => (shrineLevel ?? 0) < 41);

const calculateNewCities = (account: Account): Omit<CreateNewCity, 'paybackTime'>[] =>
    account.cityCount < 21
        ? [
              ...account.islands.map((island) => calculateNewCity(account, island)),
              calculateNewCity(account, EMPTY_ISLAND),
          ]
        : [];

const calculateNewCity = (account: Account, island: Island): Omit<CreateNewCity, 'paybackTime'> =>
    calculateNewCityWithBooster(account, island, {
        woodBoosterLevel: findBestBoosterLevel(account, island, (level: number) => ({ woodBoosterLevel: level })),
        luxuryBoosterLevel: findBestBoosterLevel(account, island, (level: number) => ({ luxuryBoosterLevel: level })),
    });

const findBestBoosterLevel = (
    account: Account,
    island: Island,
    getBoosterLevel: (level: number) => Omit<City, 'name'>,
): number => {
    if (account.cityCount === 0) return 0;
    const { cost, productionIncrease } = calculateNewCityWithBooster(account, island);
    let paybackTime = cost / productionIncrease;
    for (let i = 1; i <= 61; i++) {
        const { cost, productionIncrease } = calculateNewCityWithBooster(account, island, getBoosterLevel(i));
        if (cost / productionIncrease > paybackTime) return i - 1;
        paybackTime = cost / productionIncrease;
    }
    return 61;
};

const calculateNewCityWithBooster = (
    account: Account,
    island: Island,
    city: Omit<City, 'name'> = {},
): Omit<CreateNewCity, 'paybackTime'> => ({
    type: 'CREATE_NEW_CITY' as const,
    target: island,
    productionIncrease:
        calculateWoodProduction(island, { ...city, governorLevel: account.cityCount }, account) +
        calculateLuxuryProduction(island, { ...city, governorLevel: account.cityCount }, account),
    cost:
        account.islands
            .flatMap(({ cities }) => cities.filter(({ governorLevel }) => (governorLevel ?? 0) < account.cityCount))
            .flatMap((city) =>
                Array.from(Array(account.cityCount - (city.governorLevel ?? 0))).map((_, i) =>
                    calculateBuildLevelTotalCost(COVERNOR[account.cityCount - i], city, account.research),
                ),
            )
            .reduce((total, cost) => total + cost, 0) +
        calculateBuildTotalCost(account.cityCount, COVERNOR, city, account.research) +
        (city.woodBoosterLevel
            ? calculateBuildTotalCost(city.woodBoosterLevel, WOOD_BOOSTER, city, account.research)
            : 0) +
        (city.luxuryBoosterLevel
            ? calculateBuildTotalCost(city.luxuryBoosterLevel, LUXURY_BOOSTER, city, account.research)
            : 0),
    buildings: city,
});
