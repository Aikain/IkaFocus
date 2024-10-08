import { City, Research } from '@/types';

type BuildingCost = { wood?: number; wine?: number; marble?: number; crystal?: number; sulphur?: number };
type Building =
    | 'WOOD_BOOSTER'
    | 'LUXURY_BOOSTER'
    | 'WOOD_REDUCER'
    | 'WINE_REDUCER'
    | 'MARBLE_REDUCER'
    | 'CRYSTAL_REDUCER'
    | 'SULPHUR_REDUCER'
    | 'SHRINE'
    | 'COVERNOR';

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

const WOOD_REDUCER: Record<number, BuildingCost> = {
    1: { wood: 63, marble: 0 },
    2: { wood: 122, marble: 0 },
    3: { wood: 192, marble: 0 },
    4: { wood: 274, marble: 0 },
    5: { wood: 372, marble: 0 },
    6: { wood: 486, marble: 0 },
    7: { wood: 620, marble: 0 },
    8: { wood: 777, marble: 359 },
    9: { wood: 962, marble: 444 },
    10: { wood: 1178, marble: 546 },
    11: { wood: 1432, marble: 669 },
    12: { wood: 1730, marble: 816 },
    13: { wood: 2078, marble: 993 },
    14: { wood: 2486, marble: 1205 },
    15: { wood: 2964, marble: 1459 },
    16: { wood: 3524, marble: 1765 },
    17: { wood: 4178, marble: 2131 },
    18: { wood: 4945, marble: 2571 },
    19: { wood: 5841, marble: 3098 },
    20: { wood: 6890, marble: 3731 },
    21: { wood: 8117, marble: 4491 },
    22: { wood: 9551, marble: 5402 },
    23: { wood: 11229, marble: 6496 },
    24: { wood: 13190, marble: 7809 },
    25: { wood: 15484, marble: 9384 },
    26: { wood: 18165, marble: 11275 },
    27: { wood: 21299, marble: 13543 },
    28: { wood: 24963, marble: 16265 },
    29: { wood: 29245, marble: 19531 },
    30: { wood: 34249, marble: 23451 },
    31: { wood: 40096, marble: 28154 },
    32: { wood: 46930, marble: 33799 },
    33: { wood: 54928, marble: 40575 },
    34: { wood: 64290, marble: 48711 },
    35: { wood: 75248, marble: 58478 },
    36: { wood: 88074, marble: 70203 },
    37: { wood: 103085, marble: 84279 },
    38: { wood: 120655, marble: 101178 },
    39: { wood: 141220, marble: 121464 },
    40: { wood: 165290, marble: 145818 },
    41: { wood: 193462, marble: 175056 },
    42: { wood: 226436, marble: 210155 },
    43: { wood: 265030, marble: 252292 },
    44: { wood: 310202, marble: 302878 },
    45: { wood: 363073, marble: 363607 },
    46: { wood: 424955, marble: 436512 },
    47: { wood: 497385, marble: 524034 },
    48: { wood: 582160, marble: 629105 },
    49: { wood: 681384, marble: 755244 },
    50: { wood: 797520, marble: 906674 },
};

const WINE_REDUCER: Record<number, BuildingCost> = {
    1: { wood: 339, marble: 123 },
    2: { wood: 423, marble: 198 },
    3: { wood: 520, marble: 285 },
    4: { wood: 631, marble: 387 },
    5: { wood: 758, marble: 504 },
    6: { wood: 905, marble: 640 },
    7: { wood: 1074, marble: 798 },
    8: { wood: 1269, marble: 981 },
    9: { wood: 1492, marble: 1194 },
    10: { wood: 1749, marble: 1440 },
    11: { wood: 2045, marble: 1726 },
    12: { wood: 2384, marble: 2058 },
    13: { wood: 2775, marble: 2443 },
    14: { wood: 3225, marble: 2889 },
    15: { wood: 3741, marble: 3407 },
    16: { wood: 4336, marble: 4008 },
    17: { wood: 5019, marble: 4705 },
    18: { wood: 5805, marble: 5513 },
    19: { wood: 6709, marble: 6450 },
    20: { wood: 7749, marble: 7538 },
    21: { wood: 8944, marble: 8800 },
    22: { wood: 10319, marble: 10263 },
    23: { wood: 11900, marble: 11961 },
    24: { wood: 13718, marble: 13930 },
    25: { wood: 15809, marble: 16214 },
    26: { wood: 18214, marble: 18864 },
    27: { wood: 20979, marble: 21938 },
    28: { wood: 24159, marble: 25503 },
    29: { wood: 27816, marble: 29639 },
    30: { wood: 32021, marble: 34437 },
    31: { wood: 36858, marble: 40002 },
    32: { wood: 42419, marble: 46458 },
    33: { wood: 48819, marble: 53955 },
    34: { wood: 56184, marble: 62664 },
    35: { wood: 64661, marble: 72777 },
    36: { wood: 74417, marble: 84523 },
    37: { wood: 85645, marble: 98164 },
    38: { wood: 98567, marble: 114007 },
    39: { wood: 113438, marble: 132407 },
    40: { wood: 130553, marble: 153776 },
    41: { wood: 150251, marble: 178595 },
    42: { wood: 172920, marble: 207419 },
    43: { wood: 199010, marble: 240894 },
    44: { wood: 229036, marble: 279773 },
    45: { wood: 263592, marble: 324926 },
    46: { wood: 303362, marble: 377366 },
    47: { wood: 349132, marble: 438270 },
    48: { wood: 401808, marble: 509004 },
    49: { wood: 462431, marble: 591153 },
    50: { wood: 532201, marble: 686560 },
};

const MARBLE_REDUCER: Record<number, BuildingCost> = {
    1: { wood: 185, marble: 106 },
    2: { wood: 291, marble: 160 },
    3: { wood: 413, marble: 222 },
    4: { wood: 555, marble: 295 },
    5: { wood: 720, marble: 379 },
    6: { wood: 911, marble: 475 },
    7: { wood: 1133, marble: 587 },
    8: { wood: 1390, marble: 716 },
    9: { wood: 1689, marble: 865 },
    10: { wood: 2035, marble: 1036 },
    11: { wood: 2437, marble: 1233 },
    12: { wood: 2902, marble: 1460 },
    13: { wood: 3443, marble: 1722 },
    14: { wood: 4070, marble: 2023 },
    15: { wood: 4797, marble: 2369 },
    16: { wood: 5640, marble: 2767 },
    17: { wood: 6619, marble: 3226 },
    18: { wood: 7754, marble: 3753 },
    19: { wood: 9070, marble: 4359 },
    20: { wood: 10598, marble: 5056 },
    21: { wood: 12369, marble: 5857 },
    22: { wood: 14424, marble: 6778 },
    23: { wood: 16808, marble: 7836 },
    24: { wood: 19573, marble: 9052 },
    25: { wood: 22781, marble: 10449 },
    26: { wood: 26502, marble: 12055 },
    27: { wood: 30818, marble: 13899 },
    28: { wood: 35825, marble: 16017 },
    29: { wood: 41633, marble: 18451 },
    30: { wood: 48371, marble: 21246 },
    31: { wood: 56186, marble: 24455 },
    32: { wood: 65252, marble: 28141 },
    33: { wood: 75780, marble: 32382 },
    34: { wood: 88008, marble: 37263 },
    35: { wood: 102209, marble: 42880 },
    36: { wood: 118701, marble: 49343 },
    37: { wood: 137854, marble: 56780 },
    38: { wood: 160098, marble: 65338 },
    39: { wood: 185931, marble: 75186 },
    40: { wood: 215933, marble: 86519 },
    41: { wood: 250775, marble: 99560 },
    42: { wood: 291239, marble: 114566 },
    43: { wood: 338233, marble: 131834 },
    44: { wood: 392809, marble: 151705 },
    45: { wood: 456192, marble: 174571 },
    46: { wood: 529802, marble: 200884 },
    47: { wood: 615289, marble: 231162 },
    48: { wood: 714570, marble: 266004 },
    49: { wood: 829871, marble: 306098 },
    50: { wood: 963777, marble: 352235 },
};

const CRYSTAL_REDUCER: Record<number, BuildingCost> = {
    1: { wood: 119, marble: 0 },
    2: { wood: 188, marble: 35 },
    3: { wood: 269, marble: 96 },
    4: { wood: 362, marble: 167 },
    5: { wood: 471, marble: 249 },
    6: { wood: 597, marble: 345 },
    7: { wood: 742, marble: 455 },
    8: { wood: 912, marble: 584 },
    9: { wood: 1108, marble: 733 },
    10: { wood: 1335, marble: 905 },
    11: { wood: 1600, marble: 1106 },
    12: { wood: 1906, marble: 1338 },
    13: { wood: 2261, marble: 1608 },
    14: { wood: 2673, marble: 1921 },
    15: { wood: 3152, marble: 2283 },
    16: { wood: 3706, marble: 2704 },
    17: { wood: 4350, marble: 3192 },
    18: { wood: 5096, marble: 3759 },
    19: { wood: 5962, marble: 4416 },
    20: { wood: 6966, marble: 5178 },
    21: { wood: 8131, marble: 6062 },
    22: { wood: 9482, marble: 7087 },
    23: { wood: 11050, marble: 8276 },
    24: { wood: 12868, marble: 9656 },
    25: { wood: 14978, marble: 11257 },
    26: { wood: 17424, marble: 13113 },
    27: { wood: 20263, marble: 15267 },
    28: { wood: 23555, marble: 17765 },
    29: { wood: 27374, marble: 20663 },
    30: { wood: 31805, marble: 24025 },
    31: { wood: 36944, marble: 27924 },
    32: { wood: 42905, marble: 32448 },
    33: { wood: 49827, marble: 37704 },
    34: { wood: 57867, marble: 43813 },
    35: { wood: 67204, marble: 50911 },
    36: { wood: 78048, marble: 59160 },
    37: { wood: 90641, marble: 68744 },
    38: { wood: 105266, marble: 79882 },
    39: { wood: 122251, marble: 92823 },
    40: { wood: 141977, marble: 107862 },
    41: { wood: 164886, marble: 125337 },
    42: { wood: 191490, marble: 145643 },
    43: { wood: 222388, marble: 169239 },
    44: { wood: 258271, marble: 196657 },
    45: { wood: 299943, marble: 228518 },
    46: { wood: 348340, marble: 265541 },
    47: { wood: 404545, marble: 308562 },
    48: { wood: 469820, marble: 358552 },
    49: { wood: 545626, marble: 416642 },
    50: { wood: 633665, marble: 484142 },
};

const SULPHUR_REDUCER: Record<number, BuildingCost> = {
    1: { wood: 273, marble: 135 },
    2: { wood: 353, marble: 212 },
    3: { wood: 445, marble: 302 },
    4: { wood: 551, marble: 405 },
    5: { wood: 673, marble: 526 },
    6: { wood: 813, marble: 665 },
    7: { wood: 974, marble: 827 },
    8: { wood: 1159, marble: 1015 },
    9: { wood: 1373, marble: 1233 },
    10: { wood: 1618, marble: 1486 },
    11: { wood: 1899, marble: 1779 },
    12: { wood: 2223, marble: 2120 },
    13: { wood: 2596, marble: 2514 },
    14: { wood: 3025, marble: 2972 },
    15: { wood: 3517, marble: 3503 },
    16: { wood: 4084, marble: 4119 },
    17: { wood: 4736, marble: 4834 },
    18: { wood: 5486, marble: 5662 },
    19: { wood: 6347, marble: 6624 },
    20: { wood: 7339, marble: 7739 },
    21: { wood: 8479, marble: 9033 },
    22: { wood: 9790, marble: 10534 },
    23: { wood: 11297, marble: 12275 },
    24: { wood: 13031, marble: 14294 },
    25: { wood: 15025, marble: 16637 },
    26: { wood: 17318, marble: 19354 },
    27: { wood: 19955, marble: 22507 },
    28: { wood: 22987, marble: 26163 },
    29: { wood: 26474, marble: 30405 },
    30: { wood: 30484, marble: 35325 },
    31: { wood: 35096, marble: 41033 },
    32: { wood: 40400, marble: 47653 },
    33: { wood: 46505, marble: 55341 },
    34: { wood: 53533, marble: 64269 },
    35: { wood: 61624, marble: 74638 },
    36: { wood: 70937, marble: 86679 },
    37: { wood: 81658, marble: 100664 },
    38: { wood: 93999, marble: 116904 },
    39: { wood: 108205, marble: 135765 },
    40: { wood: 124557, marble: 157668 },
    41: { wood: 143382, marble: 183106 },
    42: { wood: 165051, marble: 212647 },
    43: { wood: 189995, marble: 246954 },
    44: { wood: 218708, marble: 286796 },
    45: { wood: 251761, marble: 333066 },
    46: { wood: 289810, marble: 386801 },
    47: { wood: 333608, marble: 449205 },
    48: { wood: 384026, marble: 521677 },
    49: { wood: 442063, marble: 605841 },
    50: { wood: 508872, marble: 703583 },
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

const getBuildingCosts = (type: Building): Record<number, BuildingCost> => {
    switch (type) {
        case 'WOOD_BOOSTER':
            return WOOD_BOOSTER;
        case 'LUXURY_BOOSTER':
            return LUXURY_BOOSTER;
        case 'WOOD_REDUCER':
            return WOOD_REDUCER;
        case 'WINE_REDUCER':
            return WINE_REDUCER;
        case 'MARBLE_REDUCER':
            return MARBLE_REDUCER;
        case 'CRYSTAL_REDUCER':
            return CRYSTAL_REDUCER;
        case 'SULPHUR_REDUCER':
            return SULPHUR_REDUCER;
        case 'SHRINE':
            return SHRINE;
        case 'COVERNOR':
            return COVERNOR;
    }
};

export const calculateBuildCost = (
    type: Building,
    level: number,
    city: Omit<City, 'name'> = {},
    research?: Research,
): number => calculateTotalCost(getBuildingCosts(type)[level] ?? {}, city, research);

export const calculateBuildTotalCost = (
    type: Building,
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
