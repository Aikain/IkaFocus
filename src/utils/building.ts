import { City, Research } from '@/types';

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
    21: { wood: 113680, marble: 64569 },
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
    23: { wood: 206472, marble: 114290 },
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

const getBuildingCosts = (
    type: 'WOOD_BOOSTER' | 'LUXURY_BOOSTER' | 'SHRINE' | 'COVERNOR',
): Record<number, BuildingCost> => {
    switch (type) {
        case 'WOOD_BOOSTER':
            return WOOD_BOOSTER;
        case 'LUXURY_BOOSTER':
            return LUXURY_BOOSTER;
        case 'SHRINE':
            return SHRINE;
        case 'COVERNOR':
            return COVERNOR;
    }
};

export const calculateBuildCost = (
    type: 'WOOD_BOOSTER' | 'LUXURY_BOOSTER' | 'SHRINE' | 'COVERNOR',
    level: number,
    city: Omit<City, 'name'> = {},
    research?: Research,
): number => calculateTotalCost(getBuildingCosts(type)[level] ?? {}, city, research);

export const calculateBuildTotalCost = (
    type: 'WOOD_BOOSTER' | 'LUXURY_BOOSTER' | 'SHRINE' | 'COVERNOR',
    from: number,
    to: number,
    city: Omit<City, 'name'> = {},
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
