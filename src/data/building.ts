/* Help > Building > *
$("#buildingDetail table.table01")
    .find("tr")
    .map((i, tr) => ({
        level: $(tr).find(".level").text(),
        costs: $(tr)
            .find(".costs .tooltip")
            .map((i, tooltip) => parseInt($(tooltip).text().replace(/[^\d]/g, "")))
            .toArray(),
    }))
    .toArray()
    .reduce((total, obj) => {
        total[obj.level] = { wood: obj.costs[0], marble: obj.costs[1] };
        return total;
    }, {});
*/

export type BuildingCost = { wood?: number; wine?: number; marble?: number; crystal?: number; sulphur?: number };

export const WOOD_BOOSTER: Record<number, BuildingCost> = {
    1: {
        wood: 219,
        marble: 0,
    },
    2: {
        wood: 278,
        marble: 68,
    },
    3: {
        wood: 366,
        marble: 115,
    },
    4: {
        wood: 494,
        marble: 184,
    },
    5: {
        wood: 678,
        marble: 282,
    },
    6: {
        wood: 938,
        marble: 423,
    },
    7: {
        wood: 1304,
        marble: 620,
    },
    8: {
        wood: 1812,
        marble: 894,
    },
    9: {
        wood: 2512,
        marble: 1272,
    },
    10: {
        wood: 3472,
        marble: 1791,
    },
    11: {
        wood: 4781,
        marble: 2500,
    },
    12: {
        wood: 6557,
        marble: 3464,
    },
    13: {
        wood: 8957,
        marble: 4767,
    },
    14: {
        wood: 12190,
        marble: 6525,
    },
    15: {
        wood: 16530,
        marble: 8887,
    },
    16: {
        wood: 22339,
        marble: 12053,
    },
    17: {
        wood: 30095,
        marble: 16285,
    },
    18: {
        wood: 40427,
        marble: 21929,
    },
    19: {
        wood: 54160,
        marble: 29440,
    },
    20: {
        wood: 72378,
        marble: 39416,
    },
    21: {
        wood: 96503,
        marble: 52642,
    },
    22: {
        wood: 128398,
        marble: 70149,
    },
    23: {
        wood: 170503,
        marble: 93287,
    },
    24: {
        wood: 226006,
        marble: 123823,
    },
    25: {
        wood: 299076,
        marble: 164072,
    },
    26: {
        wood: 395157,
        marble: 217058,
    },
    27: {
        wood: 521351,
        marble: 286731,
    },
    28: {
        wood: 686920,
        marble: 378252,
    },
    29: {
        wood: 903935,
        marble: 498349,
    },
    30: {
        wood: 1188113,
        marble: 655800,
    },
    31: {
        wood: 1559915,
        marble: 862038,
    },
    32: {
        wood: 2045952,
        marble: 1131957,
    },
    33: {
        wood: 2680826,
        marble: 1484943,
    },
    34: {
        wood: 3509498,
        marble: 1946216,
    },
    35: {
        wood: 4590364,
        marble: 2548570,
    },
    36: {
        wood: 5999235,
        marble: 3334631,
    },
    37: {
        wood: 7834483,
        marble: 4359772,
    },
    38: {
        wood: 10223701,
        marble: 5695903,
    },
    39: {
        wood: 13332318,
        marble: 7436364,
    },
    40: {
        wood: 17374727,
        marble: 9702264,
    },
    41: {
        wood: 22628675,
        marble: 12650687,
    },
    42: {
        wood: 29453849,
        marble: 16485295,
    },
    43: {
        wood: 38315889,
        marble: 21470052,
    },
    44: {
        wood: 49817389,
        marble: 27946958,
    },
    45: {
        wood: 64737919,
        marble: 36358976,
    },
    46: {
        wood: 84085688,
        marble: 47279647,
    },
    47: {
        wood: 109164190,
        marble: 61451364,
    },
    48: {
        wood: 141658200,
        marble: 79834790,
    },
    49: {
        wood: 183744666,
        marble: 103672679,
    },
    50: {
        wood: 238235716,
        marble: 134572258,
    },
};

export const WINE_BOOSTER: Record<number, BuildingCost> = {
    1: {
        wood: 232,
        marble: 0,
    },
    2: {
        wood: 294,
        marble: 84,
    },
    3: {
        wood: 388,
        marble: 134,
    },
    4: {
        wood: 525,
        marble: 207,
    },
    5: {
        wood: 721,
        marble: 312,
    },
    6: {
        wood: 1000,
        marble: 460,
    },
    7: {
        wood: 1390,
        marble: 669,
    },
    8: {
        wood: 1932,
        marble: 959,
    },
    9: {
        wood: 2680,
        marble: 1360,
    },
    10: {
        wood: 3705,
        marble: 1910,
    },
    11: {
        wood: 5103,
        marble: 2660,
    },
    12: {
        wood: 7001,
        marble: 3679,
    },
    13: {
        wood: 9565,
        marble: 5058,
    },
    14: {
        wood: 13020,
        marble: 6916,
    },
    15: {
        wood: 17658,
        marble: 9413,
    },
    16: {
        wood: 23868,
        marble: 12759,
    },
    17: {
        wood: 32159,
        marble: 17230,
    },
    18: {
        wood: 43204,
        marble: 23190,
    },
    19: {
        wood: 57888,
        marble: 31120,
    },
    20: {
        wood: 77369,
        marble: 41649,
    },
    21: {
        wood: 103170,
        marble: 55605,
    },
    22: {
        wood: 137284,
        marble: 74072,
    },
    23: {
        wood: 182324,
        marble: 98470,
    },
    24: {
        wood: 241702,
        marble: 130662,
    },
    25: {
        wood: 319882,
        marble: 173080,
    },
    26: {
        wood: 422694,
        marble: 228904,
    },
    27: {
        wood: 557744,
        marble: 302288,
    },
    28: {
        wood: 734952,
        marble: 398655,
    },
    29: {
        wood: 967247,
        marble: 525074,
    },
    30: {
        wood: 1271469,
        marble: 690763,
    },
    31: {
        wood: 1669538,
        marble: 907730,
    },
    32: {
        wood: 2189971,
        marble: 1191607,
    },
    33: {
        wood: 2869849,
        marble: 1562737,
    },
    34: {
        wood: 3757360,
        marble: 2047578,
    },
    35: {
        wood: 4915101,
        marble: 2680522,
    },
    36: {
        wood: 6424341,
        marble: 3506260,
    },
    37: {
        wood: 8390550,
        marble: 4582831,
    },
    38: {
        wood: 10950542,
        marble: 5985583,
    },
    39: {
        wood: 14281720,
        marble: 7812290,
    },
    40: {
        wood: 18614020,
        marble: 10189778,
    },
    41: {
        wood: 24245361,
        marble: 13282495,
    },
    42: {
        wood: 31561594,
        marble: 17303591,
    },
    43: {
        wood: 41062287,
        marble: 22529244,
    },
    44: {
        wood: 53394009,
        marble: 29317172,
    },
    45: {
        wood: 69393318,
        marble: 38130559,
    },
    46: {
        wood: 90142239,
        marble: 49568957,
    },
    47: {
        wood: 117039862,
        marble: 64408193,
    },
    48: {
        wood: 151894715,
        marble: 83651900,
    },
    49: {
        wood: 197043913,
        marble: 108598039,
    },
    50: {
        wood: 255506819,
        marble: 140924741,
    },
};

export const MARBLE_BOOSTER: Record<number, BuildingCost> = {
    1: {
        wood: 229,
        marble: 0,
    },
    2: {
        wood: 288,
        marble: 84,
    },
    3: {
        wood: 376,
        marble: 134,
    },
    4: {
        wood: 505,
        marble: 207,
    },
    5: {
        wood: 691,
        marble: 312,
    },
    6: {
        wood: 954,
        marble: 460,
    },
    7: {
        wood: 1324,
        marble: 669,
    },
    8: {
        wood: 1838,
        marble: 959,
    },
    9: {
        wood: 2548,
        marble: 1360,
    },
    10: {
        wood: 3523,
        marble: 1910,
    },
    11: {
        wood: 4853,
        marble: 2660,
    },
    12: {
        wood: 6661,
        marble: 3679,
    },
    13: {
        wood: 9108,
        marble: 5058,
    },
    14: {
        wood: 12408,
        marble: 6916,
    },
    15: {
        wood: 16844,
        marble: 9413,
    },
    16: {
        wood: 22789,
        marble: 12759,
    },
    17: {
        wood: 30737,
        marble: 17230,
    },
    18: {
        wood: 41337,
        marble: 23190,
    },
    19: {
        wood: 55445,
        marble: 31120,
    },
    20: {
        wood: 74184,
        marble: 41649,
    },
    21: {
        wood: 99031,
        marble: 55605,
    },
    22: {
        wood: 131922,
        marble: 74072,
    },
    23: {
        wood: 175396,
        marble: 98470,
    },
    24: {
        wood: 232776,
        marble: 130662,
    },
    25: {
        wood: 308412,
        marble: 173080,
    },
    26: {
        wood: 407992,
        marble: 228904,
    },
    27: {
        wood: 538945,
        marble: 302288,
    },
    28: {
        wood: 710974,
        marble: 398655,
    },
    29: {
        wood: 936736,
        marble: 525074,
    },
    30: {
        wood: 1232740,
        marble: 690763,
    },
    31: {
        wood: 1620495,
        marble: 907730,
    },
    32: {
        wood: 2128021,
        marble: 1191607,
    },
    33: {
        wood: 2791790,
        marble: 1562737,
    },
    34: {
        wood: 3659255,
        marble: 2047578,
    },
    35: {
        wood: 4792129,
        marble: 2680522,
    },
    36: {
        wood: 6270626,
        marble: 3506260,
    },
    37: {
        wood: 8198966,
        marble: 4582831,
    },
    38: {
        wood: 10712495,
        marble: 5985583,
    },
    39: {
        wood: 13986913,
        marble: 7812290,
    },
    40: {
        wood: 18250213,
        marble: 10189778,
    },
    41: {
        wood: 23798128,
        marble: 13282495,
    },
    42: {
        wood: 31014120,
        marble: 17303591,
    },
    43: {
        wood: 40395228,
        marble: 22529244,
    },
    44: {
        wood: 52585483,
        marble: 29317172,
    },
    45: {
        wood: 68419105,
        marble: 38130559,
    },
    46: {
        wood: 88976329,
        marble: 49568957,
    },
    47: {
        wood: 115655515,
        marble: 64408193,
    },
    48: {
        wood: 150266308,
        marble: 83651900,
    },
    49: {
        wood: 195149923,
        marble: 108598039,
    },
    50: {
        wood: 253334458,
        marble: 140924741,
    },
};

export const CRYSTAL_BOOSTER: Record<number, BuildingCost> = {
    1: {
        wood: 232,
        marble: 0,
    },
    2: {
        wood: 294,
        marble: 81,
    },
    3: {
        wood: 388,
        marble: 128,
    },
    4: {
        wood: 525,
        marble: 197,
    },
    5: {
        wood: 721,
        marble: 297,
    },
    6: {
        wood: 1000,
        marble: 438,
    },
    7: {
        wood: 1390,
        marble: 636,
    },
    8: {
        wood: 1932,
        marble: 912,
    },
    9: {
        wood: 2680,
        marble: 1294,
    },
    10: {
        wood: 3705,
        marble: 1818,
    },
    11: {
        wood: 5103,
        marble: 2534,
    },
    12: {
        wood: 7000,
        marble: 3508,
    },
    13: {
        wood: 9565,
        marble: 4827,
    },
    14: {
        wood: 13020,
        marble: 6607,
    },
    15: {
        wood: 17658,
        marble: 9002,
    },
    16: {
        wood: 23867,
        marble: 12213,
    },
    17: {
        wood: 32158,
        marble: 16510,
    },
    18: {
        wood: 43204,
        marble: 22244,
    },
    19: {
        wood: 57887,
        marble: 29881,
    },
    20: {
        wood: 77367,
        marble: 40032,
    },
    21: {
        wood: 103168,
        marble: 53502,
    },
    22: {
        wood: 137281,
        marble: 71345,
    },
    23: {
        wood: 182319,
        marble: 94945,
    },
    24: {
        wood: 241696,
        marble: 126115,
    },
    25: {
        wood: 319875,
        marble: 167232,
    },
    26: {
        wood: 422683,
        marble: 221402,
    },
    27: {
        wood: 557729,
        marble: 292689,
    },
    28: {
        wood: 734931,
        marble: 386400,
    },
    29: {
        wood: 967219,
        marble: 509468,
    },
    30: {
        wood: 1271431,
        marble: 670936,
    },
    31: {
        wood: 1669486,
        marble: 882601,
    },
    32: {
        wood: 2189901,
        marble: 1159837,
    },
    33: {
        wood: 2869754,
        marble: 1522669,
    },
    34: {
        wood: 3757233,
        marble: 1997174,
    },
    35: {
        wood: 4914929,
        marble: 2617284,
    },
    36: {
        wood: 6424109,
        marble: 3427138,
    },
    37: {
        wood: 8390239,
        marble: 4484121,
    },
    38: {
        wood: 10950126,
        marble: 5862812,
    },
    39: {
        wood: 14281163,
        marble: 7660089,
    },
    40: {
        wood: 18613275,
        marble: 10001754,
    },
    41: {
        wood: 24244367,
        marble: 13051100,
    },
    42: {
        wood: 31560269,
        marble: 17020006,
    },
    43: {
        wood: 41060521,
        marble: 22183296,
    },
    44: {
        wood: 53391660,
        marble: 28897318,
    },
    45: {
        wood: 69390196,
        marble: 37623973,
    },
    46: {
        wood: 90138093,
        marble: 48961788,
    },
    47: {
        wood: 117034361,
        marble: 63686093,
    },
    48: {
        wood: 151887424,
        marble: 82800949,
    },
    49: {
        wood: 197034258,
        marble: 107606250,
    },
    50: {
        wood: 255494044,
        marble: 139784420,
    },
};

export const SULPHUR_BOOSTER: Record<number, BuildingCost> = {
    1: {
        wood: 225,
        marble: 0,
    },
    2: {
        wood: 286,
        marble: 83,
    },
    3: {
        wood: 377,
        marble: 136,
    },
    4: {
        wood: 510,
        marble: 213,
    },
    5: {
        wood: 701,
        marble: 323,
    },
    6: {
        wood: 972,
        marble: 479,
    },
    7: {
        wood: 1352,
        marble: 698,
    },
    8: {
        wood: 1880,
        marble: 1002,
    },
    9: {
        wood: 2609,
        marble: 1422,
    },
    10: {
        wood: 3609,
        marble: 1997,
    },
    11: {
        wood: 4973,
        marble: 2781,
    },
    12: {
        wood: 6826,
        marble: 3844,
    },
    13: {
        wood: 9333,
        marble: 5281,
    },
    14: {
        wood: 12710,
        marble: 7217,
    },
    15: {
        wood: 17248,
        marble: 9814,
    },
    16: {
        wood: 23325,
        marble: 13291,
    },
    17: {
        wood: 31446,
        marble: 17932,
    },
    18: {
        wood: 42270,
        marble: 24114,
    },
    19: {
        wood: 56667,
        marble: 32329,
    },
    20: {
        wood: 75779,
        marble: 43225,
    },
    21: {
        wood: 101106,
        marble: 57653,
    },
    22: {
        wood: 134612,
        marble: 76726,
    },
    23: {
        wood: 178873,
        marble: 101899,
    },
    24: {
        wood: 237258,
        marble: 135078,
    },
    25: {
        wood: 314175,
        marble: 178753,
    },
    26: {
        wood: 415381,
        marble: 236174,
    },
    27: {
        wood: 548396,
        marble: 311581,
    },
    28: {
        wood: 723032,
        marble: 410502,
    },
    29: {
        wood: 952084,
        marble: 540143,
    },
    30: {
        wood: 1252226,
        marble: 709882,
    },
    31: {
        wood: 1645175,
        marble: 931928,
    },
    32: {
        wood: 2159202,
        marble: 1222157,
    },
    33: {
        wood: 2831085,
        marble: 1601210,
    },
    34: {
        wood: 3708648,
        marble: 2095901,
    },
    35: {
        wood: 4854048,
        marble: 2741056,
    },
    36: {
        wood: 6348032,
        marble: 3581878,
    },
    37: {
        wood: 8295448,
        marble: 4677012,
    },
    38: {
        wood: 10832382,
        marble: 6102518,
    },
    39: {
        wood: 14135388,
        marble: 7956992,
    },
    40: {
        wood: 18433436,
        marble: 10368196,
    },
    41: {
        wood: 24023354,
        marble: 13501626,
    },
    42: {
        wood: 31289801,
        marble: 17571570,
    },
    43: {
        wood: 40731076,
        marble: 22855400,
    },
    44: {
        wood: 52992468,
        marble: 29712020,
    },
    45: {
        wood: 68909347,
        marble: 38605677,
    },
    46: {
        wood: 89562806,
        marble: 50136691,
    },
    47: {
        wood: 116351508,
        marble: 65081100,
    },
    48: {
        wood: 151084440,
        marble: 84441797,
    },
    49: {
        wood: 196100620,
        marble: 109514474,
    },
    50: {
        wood: 254423546,
        marble: 141972643,
    },
};

export const WOOD_REDUCER: Record<number, BuildingCost> = {
    1: {
        wood: 55,
        marble: 0,
    },
    2: {
        wood: 87,
        marble: 0,
    },
    3: {
        wood: 128,
        marble: 0,
    },
    4: {
        wood: 179,
        marble: 0,
    },
    5: {
        wood: 242,
        marble: 0,
    },
    6: {
        wood: 320,
        marble: 0,
    },
    7: {
        wood: 416,
        marble: 0,
    },
    8: {
        wood: 534,
        marble: 330,
    },
    9: {
        wood: 676,
        marble: 393,
    },
    10: {
        wood: 849,
        marble: 470,
    },
    11: {
        wood: 1057,
        marble: 567,
    },
    12: {
        wood: 1308,
        marble: 686,
    },
    13: {
        wood: 1608,
        marble: 834,
    },
    14: {
        wood: 1969,
        marble: 1015,
    },
    15: {
        wood: 2399,
        marble: 1239,
    },
    16: {
        wood: 2911,
        marble: 1513,
    },
    17: {
        wood: 3521,
        marble: 1848,
    },
    18: {
        wood: 4246,
        marble: 2257,
    },
    19: {
        wood: 5105,
        marble: 2755,
    },
    20: {
        wood: 6122,
        marble: 3362,
    },
    21: {
        wood: 7325,
        marble: 4099,
    },
    22: {
        wood: 8746,
        marble: 4994,
    },
    23: {
        wood: 10421,
        marble: 6078,
    },
    24: {
        wood: 12396,
        marble: 7390,
    },
    25: {
        wood: 14720,
        marble: 8976,
    },
    26: {
        wood: 17453,
        marble: 10892,
    },
    27: {
        wood: 20664,
        marble: 13204,
    },
    28: {
        wood: 24433,
        marble: 15990,
    },
    29: {
        wood: 28853,
        marble: 19346,
    },
    30: {
        wood: 34034,
        marble: 23385,
    },
    31: {
        wood: 40102,
        marble: 28242,
    },
    32: {
        wood: 47203,
        marble: 34077,
    },
    33: {
        wood: 55508,
        marble: 41084,
    },
    34: {
        wood: 65216,
        marble: 49493,
    },
    35: {
        wood: 76556,
        marble: 59576,
    },
    36: {
        wood: 89796,
        marble: 71661,
    },
    37: {
        wood: 105245,
        marble: 86136,
    },
    38: {
        wood: 123263,
        marble: 103465,
    },
    39: {
        wood: 144266,
        marble: 124200,
    },
    40: {
        wood: 168738,
        marble: 148998,
    },
    41: {
        wood: 197238,
        marble: 178641,
    },
    42: {
        wood: 230416,
        marble: 214059,
    },
    43: {
        wood: 269024,
        marble: 256359,
    },
    44: {
        wood: 313931,
        marble: 306857,
    },
    45: {
        wood: 366146,
        marble: 367118,
    },
    46: {
        wood: 426836,
        marble: 439001,
    },
    47: {
        wood: 497351,
        marble: 524716,
    },
    48: {
        wood: 579253,
        marble: 626889,
    },
    49: {
        wood: 674352,
        marble: 748637,
    },
    50: {
        wood: 784737,
        marble: 893662,
    },
};

export const WINE_REDUCER: Record<number, BuildingCost> = {
    1: {
        wood: 287,
        marble: 108,
    },
    2: {
        wood: 327,
        marble: 143,
    },
    3: {
        wood: 378,
        marble: 186,
    },
    4: {
        wood: 440,
        marble: 241,
    },
    5: {
        wood: 516,
        marble: 308,
    },
    6: {
        wood: 608,
        marble: 390,
    },
    7: {
        wood: 718,
        marble: 490,
    },
    8: {
        wood: 851,
        marble: 612,
    },
    9: {
        wood: 1010,
        marble: 759,
    },
    10: {
        wood: 1200,
        marble: 936,
    },
    11: {
        wood: 1425,
        marble: 1150,
    },
    12: {
        wood: 1692,
        marble: 1405,
    },
    13: {
        wood: 2007,
        marble: 1709,
    },
    14: {
        wood: 2379,
        marble: 2072,
    },
    15: {
        wood: 2817,
        marble: 2504,
    },
    16: {
        wood: 3331,
        marble: 3015,
    },
    17: {
        wood: 3934,
        marble: 3621,
    },
    18: {
        wood: 4639,
        marble: 4338,
    },
    19: {
        wood: 5464,
        marble: 5183,
    },
    20: {
        wood: 6426,
        marble: 6179,
    },
    21: {
        wood: 7548,
        marble: 7352,
    },
    22: {
        wood: 8855,
        marble: 8731,
    },
    23: {
        wood: 10374,
        marble: 10350,
    },
    24: {
        wood: 12140,
        marble: 12248,
    },
    25: {
        wood: 14189,
        marble: 14473,
    },
    26: {
        wood: 16566,
        marble: 17077,
    },
    27: {
        wood: 19319,
        marble: 20123,
    },
    28: {
        wood: 22507,
        marble: 23682,
    },
    29: {
        wood: 26194,
        marble: 27838,
    },
    30: {
        wood: 30457,
        marble: 32687,
    },
    31: {
        wood: 35381,
        marble: 38340,
    },
    32: {
        wood: 41065,
        marble: 44927,
    },
    33: {
        wood: 47623,
        marble: 52596,
    },
    34: {
        wood: 55184,
        marble: 61521,
    },
    35: {
        wood: 63897,
        marble: 71900,
    },
    36: {
        wood: 73932,
        marble: 83964,
    },
    37: {
        wood: 85483,
        marble: 97978,
    },
    38: {
        wood: 98773,
        marble: 114251,
    },
    39: {
        wood: 114056,
        marble: 133136,
    },
    40: {
        wood: 131624,
        marble: 155043,
    },
    41: {
        wood: 151810,
        marble: 180444,
    },
    42: {
        wood: 174992,
        marble: 209884,
    },
    43: {
        wood: 201607,
        marble: 243991,
    },
    44: {
        wood: 232150,
        marble: 283489,
    },
    45: {
        wood: 267188,
        marble: 329214,
    },
    46: {
        wood: 307369,
        marble: 382127,
    },
    47: {
        wood: 353431,
        marble: 443336,
    },
    48: {
        wood: 406217,
        marble: 514120,
    },
    49: {
        wood: 466690,
        marble: 595949,
    },
    50: {
        wood: 535948,
        marble: 690516,
    },
};

export const MARBLE_REDUCER: Record<number, BuildingCost> = {
    1: {
        wood: 146,
        marble: 86,
    },
    2: {
        wood: 202,
        marble: 116,
    },
    3: {
        wood: 272,
        marble: 154,
    },
    4: {
        wood: 358,
        marble: 201,
    },
    5: {
        wood: 464,
        marble: 257,
    },
    6: {
        wood: 594,
        marble: 324,
    },
    7: {
        wood: 751,
        marble: 406,
    },
    8: {
        wood: 942,
        marble: 503,
    },
    9: {
        wood: 1172,
        marble: 619,
    },
    10: {
        wood: 1447,
        marble: 757,
    },
    11: {
        wood: 1776,
        marble: 920,
    },
    12: {
        wood: 2169,
        marble: 1113,
    },
    13: {
        wood: 2637,
        marble: 1340,
    },
    14: {
        wood: 3192,
        marble: 1606,
    },
    15: {
        wood: 3849,
        marble: 1919,
    },
    16: {
        wood: 4625,
        marble: 2284,
    },
    17: {
        wood: 5541,
        marble: 2712,
    },
    18: {
        wood: 6620,
        marble: 3211,
    },
    19: {
        wood: 7889,
        marble: 3791,
    },
    20: {
        wood: 9379,
        marble: 4467,
    },
    21: {
        wood: 11127,
        marble: 5252,
    },
    22: {
        wood: 13174,
        marble: 6164,
    },
    23: {
        wood: 15569,
        marble: 7220,
    },
    24: {
        wood: 18368,
        marble: 8443,
    },
    25: {
        wood: 21637,
        marble: 9859,
    },
    26: {
        wood: 25450,
        marble: 11495,
    },
    27: {
        wood: 29894,
        marble: 13384,
    },
    28: {
        wood: 35069,
        marble: 15565,
    },
    29: {
        wood: 41091,
        marble: 18079,
    },
    30: {
        wood: 48093,
        marble: 20976,
    },
    31: {
        wood: 56228,
        marble: 24312,
    },
    32: {
        wood: 65674,
        marble: 28151,
    },
    33: {
        wood: 76634,
        marble: 32566,
    },
    34: {
        wood: 89345,
        marble: 37640,
    },
    35: {
        wood: 104077,
        marble: 43469,
    },
    36: {
        wood: 121143,
        marble: 50160,
    },
    37: {
        wood: 140900,
        marble: 57839,
    },
    38: {
        wood: 163762,
        marble: 66646,
    },
    39: {
        wood: 190205,
        marble: 76742,
    },
    40: {
        wood: 220776,
        marble: 88310,
    },
    41: {
        wood: 256102,
        marble: 101561,
    },
    42: {
        wood: 296907,
        marble: 116732,
    },
    43: {
        wood: 344021,
        marble: 134094,
    },
    44: {
        wood: 398398,
        marble: 153957,
    },
    45: {
        wood: 461135,
        marble: 176672,
    },
    46: {
        wood: 533489,
        marble: 202640,
    },
    47: {
        wood: 616908,
        marble: 232316,
    },
    48: {
        wood: 713049,
        marble: 266218,
    },
    49: {
        wood: 823819,
        marble: 304938,
    },
    50: {
        wood: 951402,
        marble: 349144,
    },
};

export const CRYSTAL_REDUCER: Record<number, BuildingCost> = {
    1: {
        wood: 88,
        marble: 0,
    },
    2: {
        wood: 121,
        marble: 22,
    },
    3: {
        wood: 163,
        marble: 53,
    },
    4: {
        wood: 214,
        marble: 91,
    },
    5: {
        wood: 278,
        marble: 138,
    },
    6: {
        wood: 356,
        marble: 197,
    },
    7: {
        wood: 452,
        marble: 267,
    },
    8: {
        wood: 567,
        marble: 354,
    },
    9: {
        wood: 707,
        marble: 458,
    },
    10: {
        wood: 875,
        marble: 583,
    },
    11: {
        wood: 1077,
        marble: 734,
    },
    12: {
        wood: 1318,
        marble: 914,
    },
    13: {
        wood: 1606,
        marble: 1130,
    },
    14: {
        wood: 1949,
        marble: 1386,
    },
    15: {
        wood: 2356,
        marble: 1691,
    },
    16: {
        wood: 2838,
        marble: 2053,
    },
    17: {
        wood: 3409,
        marble: 2481,
    },
    18: {
        wood: 4083,
        marble: 2988,
    },
    19: {
        wood: 4878,
        marble: 3585,
    },
    20: {
        wood: 5814,
        marble: 4289,
    },
    21: {
        wood: 6914,
        marble: 5118,
    },
    22: {
        wood: 8207,
        marble: 6092,
    },
    23: {
        wood: 9723,
        marble: 7235,
    },
    24: {
        wood: 11501,
        marble: 8576,
    },
    25: {
        wood: 13581,
        marble: 10147,
    },
    26: {
        wood: 16015,
        marble: 11986,
    },
    27: {
        wood: 18859,
        marble: 14136,
    },
    28: {
        wood: 22179,
        marble: 16649,
    },
    29: {
        wood: 26053,
        marble: 19582,
    },
    30: {
        wood: 30568,
        marble: 23005,
    },
    31: {
        wood: 35829,
        marble: 26994,
    },
    32: {
        wood: 41953,
        marble: 31642,
    },
    33: {
        wood: 49078,
        marble: 37054,
    },
    34: {
        wood: 57362,
        marble: 43350,
    },
    35: {
        wood: 66988,
        marble: 50672,
    },
    36: {
        wood: 78167,
        marble: 59181,
    },
    37: {
        wood: 91144,
        marble: 69066,
    },
    38: {
        wood: 106198,
        marble: 80541,
    },
    39: {
        wood: 123656,
        marble: 93858,
    },
    40: {
        wood: 143890,
        marble: 109304,
    },
    41: {
        wood: 167332,
        marble: 127212,
    },
    42: {
        wood: 194480,
        marble: 147965,
    },
    43: {
        wood: 225905,
        marble: 172006,
    },
    44: {
        wood: 262268,
        marble: 199844,
    },
    45: {
        wood: 304328,
        marble: 232067,
    },
    46: {
        wood: 352960,
        marble: 269352,
    },
    47: {
        wood: 409173,
        marble: 312478,
    },
    48: {
        wood: 474125,
        marble: 362346,
    },
    49: {
        wood: 549150,
        marble: 419988,
    },
    50: {
        wood: 635784,
        marble: 486597,
    },
};

export const SULPHUR_REDUCER: Record<number, BuildingCost> = {
    1: {
        wood: 248,
        marble: 115,
    },
    2: {
        wood: 288,
        marble: 153,
    },
    3: {
        wood: 339,
        marble: 202,
    },
    4: {
        wood: 400,
        marble: 262,
    },
    5: {
        wood: 476,
        marble: 336,
    },
    6: {
        wood: 567,
        marble: 427,
    },
    7: {
        wood: 676,
        marble: 537,
    },
    8: {
        wood: 807,
        marble: 671,
    },
    9: {
        wood: 964,
        marble: 832,
    },
    10: {
        wood: 1151,
        marble: 1026,
    },
    11: {
        wood: 1373,
        marble: 1259,
    },
    12: {
        wood: 1635,
        marble: 1536,
    },
    13: {
        wood: 1945,
        marble: 1867,
    },
    14: {
        wood: 2310,
        marble: 2259,
    },
    15: {
        wood: 2738,
        marble: 2725,
    },
    16: {
        wood: 3241,
        marble: 3276,
    },
    17: {
        wood: 3830,
        marble: 3927,
    },
    18: {
        wood: 4519,
        marble: 4695,
    },
    19: {
        wood: 5323,
        marble: 5599,
    },
    20: {
        wood: 6260,
        marble: 6663,
    },
    21: {
        wood: 7352,
        marble: 7911,
    },
    22: {
        wood: 8621,
        marble: 9376,
    },
    23: {
        wood: 10096,
        marble: 11091,
    },
    24: {
        wood: 11808,
        marble: 13099,
    },
    25: {
        wood: 13793,
        marble: 15447,
    },
    26: {
        wood: 16091,
        marble: 18189,
    },
    27: {
        wood: 18752,
        marble: 21389,
    },
    28: {
        wood: 21829,
        marble: 25119,
    },
    29: {
        wood: 25385,
        marble: 29466,
    },
    30: {
        wood: 29490,
        marble: 34526,
    },
    31: {
        wood: 34227,
        marble: 40413,
    },
    32: {
        wood: 39690,
        marble: 47257,
    },
    33: {
        wood: 45986,
        marble: 55208,
    },
    34: {
        wood: 53237,
        marble: 64441,
    },
    35: {
        wood: 61583,
        marble: 75155,
    },
    36: {
        wood: 71185,
        marble: 87581,
    },
    37: {
        wood: 82226,
        marble: 101985,
    },
    38: {
        wood: 94916,
        marble: 118673,
    },
    39: {
        wood: 109494,
        marble: 138000,
    },
    40: {
        wood: 126232,
        marble: 160370,
    },
    41: {
        wood: 145444,
        marble: 186253,
    },
    42: {
        wood: 167485,
        marble: 216186,
    },
    43: {
        wood: 192762,
        marble: 250790,
    },
    44: {
        wood: 221739,
        marble: 290778,
    },
    45: {
        wood: 254945,
        marble: 336970,
    },
    46: {
        wood: 292983,
        marble: 390309,
    },
    47: {
        wood: 336543,
        marble: 451879,
    },
    48: {
        wood: 386410,
        marble: 522928,
    },
    49: {
        wood: 443477,
        marble: 604886,
    },
    50: {
        wood: 508765,
        marble: 699401,
    },
};

export const PALACE: Record<number, BuildingCost> = {
    1: {
        wood: 622,
        wine: 0,
        marble: 0,
        crystal: 0,
        sulphur: 0,
    },
    2: {
        wood: 5068,
        wine: 0,
        marble: 1221,
        crystal: 0,
        sulphur: 0,
    },
    3: {
        wood: 14922,
        wine: 0,
        marble: 2744,
        crystal: 0,
        sulphur: 2994,
    },
    4: {
        wood: 35635,
        wine: 9761,
        marble: 6330,
        crystal: 0,
        sulphur: 7524,
    },
    5: {
        wood: 77682,
        wine: 18090,
        marble: 14455,
        crystal: 20037,
        sulphur: 17729,
    },
    6: {
        wood: 160955,
        wine: 36261,
        marble: 32373,
        crystal: 36913,
        sulphur: 40101,
    },
    7: {
        wood: 322862,
        wine: 75122,
        marble: 71101,
        crystal: 73060,
        sulphur: 88188,
    },
    8: {
        wood: 633202,
        wine: 156979,
        marble: 153545,
        crystal: 149310,
        sulphur: 189979,
    },
    9: {
        wood: 1221326,
        wine: 327341,
        marble: 326935,
        crystal: 308230,
        sulphur: 402867,
    },
    10: {
        wood: 2325576,
        wine: 678454,
        marble: 688033,
        crystal: 636231,
        sulphur: 843767,
    },
    11: {
        wood: 4382952,
        wine: 1396260,
        marble: 1433964,
        crystal: 1307743,
        sulphur: 1749519,
    },
    12: {
        wood: 8191215,
        wine: 2853770,
        marble: 2964361,
        crystal: 2673193,
        sulphur: 3597584,
    },
    13: {
        wood: 15201180,
        wine: 5796118,
        marble: 6085968,
        crystal: 5433606,
        sulphur: 7346435,
    },
    14: {
        wood: 28042396,
        wine: 11706279,
        marble: 12421275,
        crystal: 10986181,
        sulphur: 14912996,
    },
    15: {
        wood: 51466445,
        wine: 23525973,
        marble: 25222525,
        crystal: 22106453,
        sulphur: 30118390,
    },
    16: {
        wood: 94036144,
        wine: 47073382,
        marble: 50989414,
        crystal: 44291771,
        sulphur: 60556964,
    },
    17: {
        wood: 171144741,
        wine: 93825301,
        marble: 102677064,
        crystal: 88401538,
        sulphur: 121282082,
    },
    18: {
        wood: 310402929,
        wine: 186366298,
        marble: 206045135,
        crystal: 175835828,
        sulphur: 242060454,
    },
    19: {
        wood: 561235268,
        wine: 369042505,
        marble: 412201170,
        crystal: 348674711,
        sulphur: 481624482,
    },
    20: {
        wood: 1011950005,
        wine: 728757004,
        marble: 822340320,
        crystal: 689497720,
        sulphur: 955627336,
    },
    21: {
        wood: 1820060719,
        wine: 1435499430,
        marble: 1636465888,
        crystal: 1360066463,
        sulphur: 1891391699,
    },
    22: {
        wood: 3266078968,
        wine: 2821226215,
        marble: 3249200176,
        crystal: 2676717429,
        sulphur: 3734981713,
    },
    23: {
        wood: 5848832680,
        wine: 5533180363,
        marble: 6437952590,
        crystal: 5257111647,
        sulphur: 7360329383,
    },
    24: {
        wood: 10454179023,
        wine: 10831537959,
        marble: 12732020923,
        crystal: 10305531196,
        sulphur: 14477189884,
    },
    25: {
        wood: 18653314481,
        wine: 21166587854,
        marble: 25135775046,
        crystal: 20166895888,
        sulphur: 28426058971,
    },
    26: {
        wood: 33229717869,
        wine: 41296779750,
        marble: 49544082926,
        crystal: 39401464926,
        sulphur: 55725452921,
    },
    27: {
        wood: 59109102787,
        wine: 80452328037,
        marble: 97509826883,
        crystal: 76867506354,
        sulphur: 109080630160,
    },
    28: {
        wood: 104999185098,
        wine: 156518221314,
        marble: 191650002267,
        crystal: 149753535422,
        sulphur: 213228631886,
    },
    29: {
        wood: 186278695277,
        wine: 304114337860,
        marble: 376196691556,
        crystal: 291378218732,
        sulphur: 416283408604,
    },
    30: {
        wood: 330083439181,
        wine: 590190453920,
        marble: 737571972745,
        crystal: 566265859698,
        sulphur: 811738180745,
    },
};

export const GOVERNOR: Record<number, BuildingCost> = {
    1: {
        wood: 499,
        wine: 0,
        marble: 0,
        crystal: 0,
        sulphur: 0,
    },
    2: {
        wood: 4691,
        wine: 0,
        marble: 1229,
        crystal: 0,
        sulphur: 0,
    },
    3: {
        wood: 14021,
        wine: 0,
        marble: 3016,
        crystal: 0,
        sulphur: 3039,
    },
    4: {
        wood: 33715,
        wine: 10619,
        marble: 7176,
        crystal: 0,
        sulphur: 7361,
    },
    5: {
        wood: 73851,
        wine: 18478,
        marble: 16498,
        crystal: 20945,
        sulphur: 17131,
    },
    6: {
        wood: 153646,
        wine: 35701,
        marble: 36829,
        crystal: 36765,
        sulphur: 38626,
    },
    7: {
        wood: 309381,
        wine: 72705,
        marble: 80306,
        crystal: 70835,
        sulphur: 84984,
    },
    8: {
        wood: 609013,
        wine: 151004,
        marble: 171872,
        crystal: 143096,
        sulphur: 183448,
    },
    9: {
        wood: 1178963,
        wine: 314697,
        marble: 362413,
        crystal: 294523,
        sulphur: 390071,
    },
    10: {
        wood: 2253058,
        wine: 653580,
        marble: 755059,
        crystal: 608747,
        sulphur: 819434,
    },
    11: {
        wood: 4261639,
        wine: 1349489,
        marble: 1557659,
        crystal: 1255521,
        sulphur: 1704434,
    },
    12: {
        wood: 7993261,
        wine: 2768847,
        marble: 3187112,
        crystal: 2577735,
        sulphur: 3516179,
    },
    13: {
        wood: 14887354,
        wine: 5646947,
        marble: 6476103,
        crystal: 5265080,
        sulphur: 7203584,
    },
    14: {
        wood: 27562545,
        wine: 11453781,
        marble: 13081615,
        crystal: 10699617,
        sulphur: 14670852,
    },
    15: {
        wood: 50768236,
        wine: 23118434,
        marble: 26290071,
        crystal: 21641682,
        sulphur: 29726495,
    },
    16: {
        wood: 93094987,
        wine: 46460109,
        marble: 52600479,
        crystal: 43588048,
        sulphur: 59965170,
    },
    17: {
        wood: 170042922,
        wine: 93009045,
        marble: 104830791,
        crystal: 87455521,
        sulphur: 120491216,
    },
    18: {
        wood: 309516851,
        wine: 185556480,
        marble: 208201174,
        crystal: 174873076,
        sulphur: 241271883,
    },
    19: {
        wood: 561651487,
        wine: 369054235,
        marble: 412225873,
        crystal: 348599454,
        sulphur: 481632442,
    },
    20: {
        wood: 1016352782,
        wine: 731985299,
        marble: 813921918,
        crystal: 692996405,
        sulphur: 958782590,
    },
    21: {
        wood: 1834572005,
        wine: 1448200944,
        marble: 1603035750,
        crystal: 1374202620,
        sulphur: 1903870896,
    },
    22: {
        wood: 3303992303,
        wine: 2858709877,
        marble: 3150052491,
        crystal: 2718854425,
        sulphur: 3771976337,
    },
    23: {
        wood: 5938065771,
        wine: 5631362182,
        marble: 6177235499,
        crystal: 5368136633,
        sulphur: 7457653557,
    },
    24: {
        wood: 10651951959,
        wine: 11072234267,
        marble: 12090625934,
        crystal: 10578881384,
        sulphur: 14716810759,
    },
    25: {
        wood: 19074744888,
        wine: 21732141463,
        marble: 23623746667,
        crystal: 20811407902,
        sulphur: 28991492282,
    },
    26: {
        wood: 34103020030,
        wine: 42586740231,
        marble: 46084336912,
        crystal: 40875947402,
        sulphur: 57020629714,
    },
    27: {
        wood: 60881313467,
        wine: 83330382226,
        marble: 89766643618,
        crystal: 80166204327,
        sulphur: 111982594552,
    },
    28: {
        wood: 108537305239,
        wine: 162830670767,
        marble: 174614571647,
        crystal: 157006880025,
        sulphur: 219620508766,
    },
    29: {
        wood: 193250111745,
        wine: 317771361940,
        marble: 339227989378,
        crystal: 307108442988,
        sulphur: 430170833117,
    },
    30: {
        wood: 343671692759,
        wine: 619407688860,
        marble: 658242870743,
        crystal: 599995681652,
        sulphur: 841574016487,
    },
};

export const SHRINE: Record<number, BuildingCost> = {
    1: {
        wood: 873,
        wine: 0,
        marble: 0,
        crystal: 0,
        sulphur: 0,
    },
    2: {
        wood: 974,
        wine: 0,
        marble: 0,
        crystal: 0,
        sulphur: 0,
    },
    3: {
        wood: 1116,
        wine: 82,
        marble: 0,
        crystal: 0,
        sulphur: 0,
    },
    4: {
        wood: 1311,
        wine: 102,
        marble: 0,
        crystal: 0,
        sulphur: 0,
    },
    5: {
        wood: 1577,
        wine: 128,
        marble: 178,
        crystal: 0,
        sulphur: 0,
    },
    6: {
        wood: 1934,
        wine: 163,
        marble: 218,
        crystal: 0,
        sulphur: 0,
    },
    7: {
        wood: 2410,
        wine: 210,
        marble: 273,
        crystal: 0,
        sulphur: 0,
    },
    8: {
        wood: 3039,
        wine: 271,
        marble: 349,
        crystal: 0,
        sulphur: 0,
    },
    9: {
        wood: 3866,
        wine: 351,
        marble: 452,
        crystal: 243,
        sulphur: 0,
    },
    10: {
        wood: 4946,
        wine: 455,
        marble: 591,
        crystal: 317,
        sulphur: 0,
    },
    11: {
        wood: 6352,
        wine: 590,
        marble: 779,
        crystal: 415,
        sulphur: 156,
    },
    12: {
        wood: 8172,
        wine: 762,
        marble: 1030,
        crystal: 546,
        sulphur: 216,
    },
    13: {
        wood: 10521,
        wine: 984,
        marble: 1366,
        crystal: 719,
        sulphur: 298,
    },
    14: {
        wood: 13543,
        wine: 1268,
        marble: 1814,
        crystal: 946,
        sulphur: 409,
    },
    15: {
        wood: 17420,
        wine: 1629,
        marble: 2408,
        crystal: 1245,
        sulphur: 557,
    },
    16: {
        wood: 22380,
        wine: 2089,
        marble: 3193,
        crystal: 1636,
        sulphur: 756,
    },
    17: {
        wood: 28711,
        wine: 2673,
        marble: 4230,
        crystal: 2147,
        sulphur: 1023,
    },
    18: {
        wood: 36775,
        wine: 3411,
        marble: 5595,
        crystal: 2812,
        sulphur: 1378,
    },
    19: {
        wood: 47025,
        wine: 4345,
        marble: 7388,
        crystal: 3678,
        sulphur: 1851,
    },
    20: {
        wood: 60032,
        wine: 5523,
        marble: 9741,
        crystal: 4802,
        sulphur: 2479,
    },
    21: {
        wood: 76508,
        wine: 7005,
        marble: 12821,
        crystal: 6259,
        sulphur: 3313,
    },
    22: {
        wood: 97349,
        wine: 8870,
        marble: 16846,
        crystal: 8144,
        sulphur: 4416,
    },
    23: {
        wood: 123673,
        wine: 11212,
        marble: 22101,
        crystal: 10579,
        sulphur: 5875,
    },
    24: {
        wood: 156878,
        wine: 14148,
        marble: 28948,
        crystal: 13721,
        sulphur: 7801,
    },
    25: {
        wood: 198712,
        wine: 17827,
        marble: 37862,
        crystal: 17771,
        sulphur: 10341,
    },
    26: {
        wood: 251358,
        wine: 22429,
        marble: 49451,
        crystal: 22982,
        sulphur: 13686,
    },
    27: {
        wood: 317540,
        wine: 28180,
        marble: 64501,
        crystal: 29683,
        sulphur: 18085,
    },
    28: {
        wood: 400653,
        wine: 35362,
        marble: 84025,
        crystal: 38289,
        sulphur: 23866,
    },
    29: {
        wood: 504932,
        wine: 44320,
        marble: 109329,
        crystal: 49332,
        sulphur: 31454,
    },
    30: {
        wood: 635650,
        wine: 55484,
        marble: 142093,
        crystal: 63487,
        sulphur: 41407,
    },
    31: {
        wood: 799374,
        wine: 69388,
        marble: 184480,
        crystal: 81619,
        sulphur: 54447,
    },
    32: {
        wood: 1004276,
        wine: 86688,
        marble: 239271,
        crystal: 104823,
        sulphur: 71520,
    },
    33: {
        wood: 1260523,
        wine: 108199,
        marble: 310040,
        crystal: 134496,
        sulphur: 93855,
    },
    34: {
        wood: 1580752,
        wine: 134927,
        marble: 401381,
        crystal: 172416,
        sulphur: 123052,
    },
    35: {
        wood: 1980671,
        wine: 168115,
        marble: 519192,
        crystal: 220838,
        sulphur: 161191,
    },
    36: {
        wood: 2479792,
        wine: 209299,
        marble: 671041,
        crystal: 282634,
        sulphur: 210980,
    },
    37: {
        wood: 3102347,
        wine: 260373,
        marble: 866642,
        crystal: 361446,
        sulphur: 275934,
    },
    38: {
        wood: 3878411,
        wine: 323677,
        marble: 1118449,
        crystal: 461901,
        sulphur: 360622,
    },
    39: {
        wood: 4845302,
        wine: 402096,
        marble: 1442429,
        crystal: 589871,
        sulphur: 470976,
    },
    40: {
        wood: 6049312,
        wine: 499189,
        marble: 1859041,
        crystal: 752802,
        sulphur: 614694,
    },
    41: {
        wood: 7547835,
        wine: 619342,
        marble: 2394492,
        crystal: 960142,
        sulphur: 801766,
    },
    42: {
        wood: 9412017,
        wine: 767961,
        marble: 3082341,
        crystal: 1223863,
        sulphur: 1045149,
    },
    43: {
        wood: 11730015,
        wine: 951707,
        marble: 3965543,
        crystal: 1559139,
        sulphur: 1361640,
    },
    44: {
        wood: 14611034,
        wine: 1178781,
        marble: 5099062,
        crystal: 1985194,
        sulphur: 1773011,
    },
    45: {
        wood: 18190310,
        wine: 1459284,
        marble: 6553211,
        crystal: 2526371,
        sulphur: 2307471,
    },
    46: {
        wood: 22635269,
        wine: 1805645,
        marble: 8417902,
        crystal: 3213494,
        sulphur: 3001556,
    },
    47: {
        wood: 28153130,
        wine: 2233163,
        marble: 10808082,
        crystal: 4085571,
        sulphur: 3902577,
    },
    48: {
        wood: 35000291,
        wine: 2760655,
        marble: 13870657,
        crystal: 5191966,
        sulphur: 5071773,
    },
    49: {
        wood: 43493921,
        wine: 3411267,
        marble: 17793323,
        crystal: 6595118,
        sulphur: 6588395,
    },
    50: {
        wood: 54026264,
        wine: 4213458,
        marble: 22815833,
        crystal: 8373992,
        sulphur: 8554970,
    },
};
