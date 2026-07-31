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

/* Help > Building > Palace / Governor`s Residence / Gods’ Shrine
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
        total[obj.level] = { wood: obj.costs[0], wine: obj.costs[1], marble: obj.costs[2], crystal: obj.costs[3], sulphur: obj.costs[4] };
        return total;
    }, {});
*/

export interface BuildingCost {
    wood?: number;
    wine?: number;
    marble?: number;
    crystal?: number;
    sulphur?: number;
}

export const WOOD_BOOSTER: Record<number, BuildingCost> = {
    1: {
        wood: 219,
        marble: 0,
    },
    2: {
        wood: 277,
        marble: 67,
    },
    3: {
        wood: 365,
        marble: 114,
    },
    4: {
        wood: 493,
        marble: 183,
    },
    5: {
        wood: 677,
        marble: 282,
    },
    6: {
        wood: 938,
        marble: 422,
    },
    7: {
        wood: 1303,
        marble: 619,
    },
    8: {
        wood: 1811,
        marble: 893,
    },
    9: {
        wood: 2511,
        marble: 1272,
    },
    10: {
        wood: 3471,
        marble: 1791,
    },
    11: {
        wood: 4780,
        marble: 2500,
    },
    12: {
        wood: 6556,
        marble: 3463,
    },
    13: {
        wood: 8957,
        marble: 4767,
    },
    14: {
        wood: 12189,
        marble: 6524,
    },
    15: {
        wood: 16529,
        marble: 8886,
    },
    16: {
        wood: 22339,
        marble: 12052,
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
        wood: 54159,
        marble: 29440,
    },
    20: {
        wood: 72377,
        marble: 39415,
    },
    21: {
        wood: 96502,
        marble: 52642,
    },
    22: {
        wood: 128398,
        marble: 70149,
    },
    23: {
        wood: 170502,
        marble: 93286,
    },
    24: {
        wood: 226005,
        marble: 123823,
    },
    25: {
        wood: 299076,
        marble: 164072,
    },
    26: {
        wood: 395156,
        marble: 217057,
    },
    27: {
        wood: 521350,
        marble: 286731,
    },
    28: {
        wood: 686920,
        marble: 378251,
    },
    29: {
        wood: 903934,
        marble: 498349,
    },
    30: {
        wood: 1188113,
        marble: 655799,
    },
    31: {
        wood: 1559914,
        marble: 862037,
    },
    32: {
        wood: 2045951,
        marble: 1131957,
    },
    33: {
        wood: 2680825,
        marble: 1484943,
    },
    34: {
        wood: 3509497,
        marble: 1946215,
    },
    35: {
        wood: 4590363,
        marble: 2548570,
    },
    36: {
        wood: 5999234,
        marble: 3334630,
    },
    37: {
        wood: 7834482,
        marble: 4359771,
    },
    38: {
        wood: 10223701,
        marble: 5695902,
    },
    39: {
        wood: 13332318,
        marble: 7436363,
    },
    40: {
        wood: 17374727,
        marble: 9702264,
    },
    41: {
        wood: 22628674,
        marble: 12650686,
    },
    42: {
        wood: 29453848,
        marble: 16485294,
    },
    43: {
        wood: 38315888,
        marble: 21470051,
    },
    44: {
        wood: 49817388,
        marble: 27946958,
    },
    45: {
        wood: 64737919,
        marble: 36358975,
    },
    46: {
        wood: 84085687,
        marble: 47279646,
    },
    47: {
        wood: 109164190,
        marble: 61451363,
    },
    48: {
        wood: 141658199,
        marble: 79834790,
    },
    49: {
        wood: 183744665,
        marble: 103672678,
    },
    50: {
        wood: 238235716,
        marble: 134572257,
    },
};

export const WINE_BOOSTER: Record<number, BuildingCost> = {
    1: {
        wood: 231,
        marble: 0,
    },
    2: {
        wood: 294,
        marble: 83,
    },
    3: {
        wood: 388,
        marble: 133,
    },
    4: {
        wood: 524,
        marble: 206,
    },
    5: {
        wood: 721,
        marble: 311,
    },
    6: {
        wood: 999,
        marble: 460,
    },
    7: {
        wood: 1389,
        marble: 669,
    },
    8: {
        wood: 1931,
        marble: 959,
    },
    9: {
        wood: 2679,
        marble: 1360,
    },
    10: {
        wood: 3705,
        marble: 1909,
    },
    11: {
        wood: 5103,
        marble: 2660,
    },
    12: {
        wood: 7000,
        marble: 3679,
    },
    13: {
        wood: 9565,
        marble: 5057,
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
        wood: 23867,
        marble: 12759,
    },
    17: {
        wood: 32158,
        marble: 17229,
    },
    18: {
        wood: 43204,
        marble: 23190,
    },
    19: {
        wood: 57887,
        marble: 31120,
    },
    20: {
        wood: 77368,
        marble: 41649,
    },
    21: {
        wood: 103169,
        marble: 55604,
    },
    22: {
        wood: 137284,
        marble: 74071,
    },
    23: {
        wood: 182323,
        marble: 98470,
    },
    24: {
        wood: 241701,
        marble: 130662,
    },
    25: {
        wood: 319882,
        marble: 173079,
    },
    26: {
        wood: 422694,
        marble: 228903,
    },
    27: {
        wood: 557743,
        marble: 302288,
    },
    28: {
        wood: 734951,
        marble: 398654,
    },
    29: {
        wood: 967247,
        marble: 525073,
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
        marble: 2047577,
    },
    35: {
        wood: 4915100,
        marble: 2680522,
    },
    36: {
        wood: 6424340,
        marble: 3506260,
    },
    37: {
        wood: 8390549,
        marble: 4582831,
    },
    38: {
        wood: 10950541,
        marble: 5985583,
    },
    39: {
        wood: 14281719,
        marble: 7812290,
    },
    40: {
        wood: 18614019,
        marble: 10189778,
    },
    41: {
        wood: 24245360,
        marble: 13282495,
    },
    42: {
        wood: 31561594,
        marble: 17303591,
    },
    43: {
        wood: 41062287,
        marble: 22529243,
    },
    44: {
        wood: 53394009,
        marble: 29317171,
    },
    45: {
        wood: 69393318,
        marble: 38130559,
    },
    46: {
        wood: 90142239,
        marble: 49568956,
    },
    47: {
        wood: 117039862,
        marble: 64408192,
    },
    48: {
        wood: 151894714,
        marble: 83651900,
    },
    49: {
        wood: 197043912,
        marble: 108598039,
    },
    50: {
        wood: 255506818,
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
        marble: 83,
    },
    3: {
        wood: 376,
        marble: 133,
    },
    4: {
        wood: 505,
        marble: 206,
    },
    5: {
        wood: 690,
        marble: 311,
    },
    6: {
        wood: 954,
        marble: 460,
    },
    7: {
        wood: 1323,
        marble: 669,
    },
    8: {
        wood: 1837,
        marble: 959,
    },
    9: {
        wood: 2547,
        marble: 1360,
    },
    10: {
        wood: 3522,
        marble: 1909,
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
        marble: 5057,
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
        marble: 17229,
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
        marble: 55604,
    },
    22: {
        wood: 131922,
        marble: 74071,
    },
    23: {
        wood: 175395,
        marble: 98470,
    },
    24: {
        wood: 232776,
        marble: 130662,
    },
    25: {
        wood: 308412,
        marble: 173079,
    },
    26: {
        wood: 407991,
        marble: 228903,
    },
    27: {
        wood: 538944,
        marble: 302288,
    },
    28: {
        wood: 710973,
        marble: 398654,
    },
    29: {
        wood: 936736,
        marble: 525073,
    },
    30: {
        wood: 1232739,
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
        wood: 2791789,
        marble: 1562737,
    },
    34: {
        wood: 3659254,
        marble: 2047577,
    },
    35: {
        wood: 4792128,
        marble: 2680522,
    },
    36: {
        wood: 6270626,
        marble: 3506260,
    },
    37: {
        wood: 8198965,
        marble: 4582831,
    },
    38: {
        wood: 10712494,
        marble: 5985583,
    },
    39: {
        wood: 13986913,
        marble: 7812290,
    },
    40: {
        wood: 18250212,
        marble: 10189778,
    },
    41: {
        wood: 23798127,
        marble: 13282495,
    },
    42: {
        wood: 31014120,
        marble: 17303591,
    },
    43: {
        wood: 40395228,
        marble: 22529243,
    },
    44: {
        wood: 52585482,
        marble: 29317171,
    },
    45: {
        wood: 68419105,
        marble: 38130559,
    },
    46: {
        wood: 88976328,
        marble: 49568956,
    },
    47: {
        wood: 115655515,
        marble: 64408192,
    },
    48: {
        wood: 150266307,
        marble: 83651900,
    },
    49: {
        wood: 195149923,
        marble: 108598039,
    },
    50: {
        wood: 253334457,
        marble: 140924741,
    },
};

export const CRYSTAL_BOOSTER: Record<number, BuildingCost> = {
    1: {
        wood: 231,
        marble: 0,
    },
    2: {
        wood: 294,
        marble: 80,
    },
    3: {
        wood: 388,
        marble: 128,
    },
    4: {
        wood: 524,
        marble: 197,
    },
    5: {
        wood: 721,
        marble: 296,
    },
    6: {
        wood: 999,
        marble: 437,
    },
    7: {
        wood: 1389,
        marble: 635,
    },
    8: {
        wood: 1931,
        marble: 912,
    },
    9: {
        wood: 2679,
        marble: 1293,
    },
    10: {
        wood: 3705,
        marble: 1817,
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
        wood: 13019,
        marble: 6607,
    },
    15: {
        wood: 17658,
        marble: 9001,
    },
    16: {
        wood: 23867,
        marble: 12213,
    },
    17: {
        wood: 32158,
        marble: 16509,
    },
    18: {
        wood: 43203,
        marble: 22243,
    },
    19: {
        wood: 57886,
        marble: 29881,
    },
    20: {
        wood: 77367,
        marble: 40032,
    },
    21: {
        wood: 103167,
        marble: 53501,
    },
    22: {
        wood: 137281,
        marble: 71344,
    },
    23: {
        wood: 182319,
        marble: 94944,
    },
    24: {
        wood: 241696,
        marble: 126115,
    },
    25: {
        wood: 319874,
        marble: 167232,
    },
    26: {
        wood: 422683,
        marble: 221402,
    },
    27: {
        wood: 557728,
        marble: 292688,
    },
    28: {
        wood: 734931,
        marble: 386399,
    },
    29: {
        wood: 967219,
        marble: 509467,
    },
    30: {
        wood: 1271430,
        marble: 670936,
    },
    31: {
        wood: 1669486,
        marble: 882601,
    },
    32: {
        wood: 2189901,
        marble: 1159836,
    },
    33: {
        wood: 2869754,
        marble: 1522669,
    },
    34: {
        wood: 3757232,
        marble: 1997174,
    },
    35: {
        wood: 4914928,
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
        wood: 10950125,
        marble: 5862811,
    },
    39: {
        wood: 14281162,
        marble: 7660088,
    },
    40: {
        wood: 18613275,
        marble: 10001754,
    },
    41: {
        wood: 24244366,
        marble: 13051100,
    },
    42: {
        wood: 31560268,
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
        wood: 69390195,
        marble: 37623972,
    },
    46: {
        wood: 90138092,
        marble: 48961787,
    },
    47: {
        wood: 117034361,
        marble: 63686093,
    },
    48: {
        wood: 151887423,
        marble: 82800949,
    },
    49: {
        wood: 197034258,
        marble: 107606250,
    },
    50: {
        wood: 255494043,
        marble: 139784419,
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
        marble: 135,
    },
    4: {
        wood: 510,
        marble: 212,
    },
    5: {
        wood: 701,
        marble: 322,
    },
    6: {
        wood: 971,
        marble: 479,
    },
    7: {
        wood: 1351,
        marble: 698,
    },
    8: {
        wood: 1879,
        marble: 1002,
    },
    9: {
        wood: 2608,
        marble: 1421,
    },
    10: {
        wood: 3608,
        marble: 1996,
    },
    11: {
        wood: 4973,
        marble: 2780,
    },
    12: {
        wood: 6826,
        marble: 3844,
    },
    13: {
        wood: 9332,
        marble: 5281,
    },
    14: {
        wood: 12710,
        marble: 7216,
    },
    15: {
        wood: 17247,
        marble: 9814,
    },
    16: {
        wood: 23325,
        marble: 13291,
    },
    17: {
        wood: 31445,
        marble: 17932,
    },
    18: {
        wood: 42269,
        marble: 24113,
    },
    19: {
        wood: 56666,
        marble: 32328,
    },
    20: {
        wood: 75779,
        marble: 43225,
    },
    21: {
        wood: 101105,
        marble: 57653,
    },
    22: {
        wood: 134612,
        marble: 76725,
    },
    23: {
        wood: 178873,
        marble: 101898,
    },
    24: {
        wood: 237258,
        marble: 135078,
    },
    25: {
        wood: 314174,
        marble: 178753,
    },
    26: {
        wood: 415381,
        marble: 236174,
    },
    27: {
        wood: 548396,
        marble: 311580,
    },
    28: {
        wood: 723032,
        marble: 410502,
    },
    29: {
        wood: 952083,
        marble: 540142,
    },
    30: {
        wood: 1252225,
        marble: 709882,
    },
    31: {
        wood: 1645175,
        marble: 931927,
    },
    32: {
        wood: 2159201,
        marble: 1222157,
    },
    33: {
        wood: 2831084,
        marble: 1601209,
    },
    34: {
        wood: 3708647,
        marble: 2095901,
    },
    35: {
        wood: 4854048,
        marble: 2741056,
    },
    36: {
        wood: 6348032,
        marble: 3581877,
    },
    37: {
        wood: 8295448,
        marble: 4677012,
    },
    38: {
        wood: 10832381,
        marble: 6102517,
    },
    39: {
        wood: 14135388,
        marble: 7956991,
    },
    40: {
        wood: 18433436,
        marble: 10368196,
    },
    41: {
        wood: 24023354,
        marble: 13501625,
    },
    42: {
        wood: 31289801,
        marble: 17571569,
    },
    43: {
        wood: 40731075,
        marble: 22855399,
    },
    44: {
        wood: 52992468,
        marble: 29712019,
    },
    45: {
        wood: 68909347,
        marble: 38605676,
    },
    46: {
        wood: 89562805,
        marble: 50136690,
    },
    47: {
        wood: 116351507,
        marble: 65081100,
    },
    48: {
        wood: 151084440,
        marble: 84441797,
    },
    49: {
        wood: 196100619,
        marble: 109514474,
    },
    50: {
        wood: 254423546,
        marble: 141972642,
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
        wood: 127,
        marble: 0,
    },
    4: {
        wood: 178,
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
        wood: 533,
        marble: 330,
    },
    9: {
        wood: 676,
        marble: 392,
    },
    10: {
        wood: 848,
        marble: 470,
    },
    11: {
        wood: 1056,
        marble: 566,
    },
    12: {
        wood: 1307,
        marble: 686,
    },
    13: {
        wood: 1608,
        marble: 833,
    },
    14: {
        wood: 1968,
        marble: 1015,
    },
    15: {
        wood: 2398,
        marble: 1238,
    },
    16: {
        wood: 2911,
        marble: 1512,
    },
    17: {
        wood: 3521,
        marble: 1847,
    },
    18: {
        wood: 4245,
        marble: 2256,
    },
    19: {
        wood: 5104,
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
        wood: 8745,
        marble: 4993,
    },
    23: {
        wood: 10421,
        marble: 6077,
    },
    24: {
        wood: 12395,
        marble: 7389,
    },
    25: {
        wood: 14719,
        marble: 8976,
    },
    26: {
        wood: 17452,
        marble: 10892,
    },
    27: {
        wood: 20663,
        marble: 13203,
    },
    28: {
        wood: 24432,
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
        wood: 40101,
        marble: 28241,
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
        marble: 49492,
    },
    35: {
        wood: 76556,
        marble: 59576,
    },
    36: {
        wood: 89795,
        marble: 71660,
    },
    37: {
        wood: 105244,
        marble: 86136,
    },
    38: {
        wood: 123262,
        marble: 103465,
    },
    39: {
        wood: 144265,
        marble: 124200,
    },
    40: {
        wood: 168737,
        marble: 148998,
    },
    41: {
        wood: 197238,
        marble: 178640,
    },
    42: {
        wood: 230416,
        marble: 214058,
    },
    43: {
        wood: 269023,
        marble: 256358,
    },
    44: {
        wood: 313930,
        marble: 306856,
    },
    45: {
        wood: 366145,
        marble: 367117,
    },
    46: {
        wood: 426835,
        marble: 439000,
    },
    47: {
        wood: 497350,
        marble: 524716,
    },
    48: {
        wood: 579253,
        marble: 626889,
    },
    49: {
        wood: 674351,
        marble: 748636,
    },
    50: {
        wood: 784736,
        marble: 893662,
    },
};

export const WINE_REDUCER: Record<number, BuildingCost> = {
    1: {
        wood: 286,
        marble: 108,
    },
    2: {
        wood: 327,
        marble: 142,
    },
    3: {
        wood: 378,
        marble: 186,
    },
    4: {
        wood: 440,
        marble: 240,
    },
    5: {
        wood: 515,
        marble: 307,
    },
    6: {
        wood: 607,
        marble: 389,
    },
    7: {
        wood: 718,
        marble: 489,
    },
    8: {
        wood: 851,
        marble: 611,
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
        marble: 1149,
    },
    12: {
        wood: 1692,
        marble: 1404,
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
        marble: 2503,
    },
    16: {
        wood: 3331,
        marble: 3015,
    },
    17: {
        wood: 3933,
        marble: 3621,
    },
    18: {
        wood: 4639,
        marble: 4337,
    },
    19: {
        wood: 5463,
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
        wood: 8854,
        marble: 8730,
    },
    23: {
        wood: 10374,
        marble: 10349,
    },
    24: {
        wood: 12139,
        marble: 12248,
    },
    25: {
        wood: 14189,
        marble: 14473,
    },
    26: {
        wood: 16565,
        marble: 17077,
    },
    27: {
        wood: 19319,
        marble: 20123,
    },
    28: {
        wood: 22506,
        marble: 23682,
    },
    29: {
        wood: 26194,
        marble: 27838,
    },
    30: {
        wood: 30456,
        marble: 32686,
    },
    31: {
        wood: 35380,
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
        marble: 61520,
    },
    35: {
        wood: 63896,
        marble: 71899,
    },
    36: {
        wood: 73931,
        marble: 83963,
    },
    37: {
        wood: 85482,
        marble: 97978,
    },
    38: {
        wood: 98772,
        marble: 114250,
    },
    39: {
        wood: 114056,
        marble: 133135,
    },
    40: {
        wood: 131624,
        marble: 155042,
    },
    41: {
        wood: 151809,
        marble: 180443,
    },
    42: {
        wood: 174992,
        marble: 209883,
    },
    43: {
        wood: 201607,
        marble: 243990,
    },
    44: {
        wood: 232150,
        marble: 283489,
    },
    45: {
        wood: 267188,
        marble: 329213,
    },
    46: {
        wood: 307368,
        marble: 382126,
    },
    47: {
        wood: 353430,
        marble: 443336,
    },
    48: {
        wood: 406216,
        marble: 514120,
    },
    49: {
        wood: 466690,
        marble: 595948,
    },
    50: {
        wood: 535948,
        marble: 690515,
    },
};

export const MARBLE_REDUCER: Record<number, BuildingCost> = {
    1: {
        wood: 146,
        marble: 85,
    },
    2: {
        wood: 201,
        marble: 116,
    },
    3: {
        wood: 271,
        marble: 154,
    },
    4: {
        wood: 357,
        marble: 200,
    },
    5: {
        wood: 464,
        marble: 256,
    },
    6: {
        wood: 593,
        marble: 324,
    },
    7: {
        wood: 751,
        marble: 405,
    },
    8: {
        wood: 942,
        marble: 503,
    },
    9: {
        wood: 1171,
        marble: 619,
    },
    10: {
        wood: 1446,
        marble: 757,
    },
    11: {
        wood: 1776,
        marble: 920,
    },
    12: {
        wood: 2169,
        marble: 1112,
    },
    13: {
        wood: 2636,
        marble: 1339,
    },
    14: {
        wood: 3191,
        marble: 1606,
    },
    15: {
        wood: 3848,
        marble: 1918,
    },
    16: {
        wood: 4625,
        marble: 2284,
    },
    17: {
        wood: 5541,
        marble: 2711,
    },
    18: {
        wood: 6620,
        marble: 3210,
    },
    19: {
        wood: 7888,
        marble: 3791,
    },
    20: {
        wood: 9379,
        marble: 4467,
    },
    21: {
        wood: 11126,
        marble: 5252,
    },
    22: {
        wood: 13173,
        marble: 6163,
    },
    23: {
        wood: 15568,
        marble: 7220,
    },
    24: {
        wood: 18368,
        marble: 8443,
    },
    25: {
        wood: 21637,
        marble: 9858,
    },
    26: {
        wood: 25450,
        marble: 11494,
    },
    27: {
        wood: 29894,
        marble: 13384,
    },
    28: {
        wood: 35069,
        marble: 15564,
    },
    29: {
        wood: 41090,
        marble: 18079,
    },
    30: {
        wood: 48092,
        marble: 20976,
    },
    31: {
        wood: 56227,
        marble: 24312,
    },
    32: {
        wood: 65673,
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
        marble: 43468,
    },
    36: {
        wood: 121142,
        marble: 50160,
    },
    37: {
        wood: 140899,
        marble: 57838,
    },
    38: {
        wood: 163762,
        marble: 66645,
    },
    39: {
        wood: 190205,
        marble: 76741,
    },
    40: {
        wood: 220775,
        marble: 88310,
    },
    41: {
        wood: 256102,
        marble: 101561,
    },
    42: {
        wood: 296907,
        marble: 116731,
    },
    43: {
        wood: 344021,
        marble: 134094,
    },
    44: {
        wood: 398398,
        marble: 153956,
    },
    45: {
        wood: 461134,
        marble: 176672,
    },
    46: {
        wood: 533489,
        marble: 202639,
    },
    47: {
        wood: 616907,
        marble: 232315,
    },
    48: {
        wood: 713049,
        marble: 266218,
    },
    49: {
        wood: 823818,
        marble: 304937,
    },
    50: {
        wood: 951401,
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
        marble: 21,
    },
    3: {
        wood: 162,
        marble: 52,
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
        marble: 196,
    },
    7: {
        wood: 451,
        marble: 267,
    },
    8: {
        wood: 567,
        marble: 353,
    },
    9: {
        wood: 707,
        marble: 457,
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
        marble: 1129,
    },
    14: {
        wood: 1949,
        marble: 1386,
    },
    15: {
        wood: 2355,
        marble: 1691,
    },
    16: {
        wood: 2838,
        marble: 2053,
    },
    17: {
        wood: 3408,
        marble: 2481,
    },
    18: {
        wood: 4082,
        marble: 2987,
    },
    19: {
        wood: 4877,
        marble: 3585,
    },
    20: {
        wood: 5813,
        marble: 4289,
    },
    21: {
        wood: 6914,
        marble: 5117,
    },
    22: {
        wood: 8206,
        marble: 6091,
    },
    23: {
        wood: 9723,
        marble: 7234,
    },
    24: {
        wood: 11500,
        marble: 8575,
    },
    25: {
        wood: 13581,
        marble: 10146,
    },
    26: {
        wood: 16014,
        marble: 11985,
    },
    27: {
        wood: 18858,
        marble: 14136,
    },
    28: {
        wood: 22178,
        marble: 16648,
    },
    29: {
        wood: 26052,
        marble: 19582,
    },
    30: {
        wood: 30568,
        marble: 23004,
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
        wood: 49077,
        marble: 37053,
    },
    34: {
        wood: 57361,
        marble: 43350,
    },
    35: {
        wood: 66987,
        marble: 50671,
    },
    36: {
        wood: 78167,
        marble: 59181,
    },
    37: {
        wood: 91143,
        marble: 69065,
    },
    38: {
        wood: 106198,
        marble: 80541,
    },
    39: {
        wood: 123655,
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
        wood: 194479,
        marble: 147965,
    },
    43: {
        wood: 225904,
        marble: 172006,
    },
    44: {
        wood: 262267,
        marble: 199844,
    },
    45: {
        wood: 304327,
        marble: 232066,
    },
    46: {
        wood: 352960,
        marble: 269351,
    },
    47: {
        wood: 409173,
        marble: 312478,
    },
    48: {
        wood: 474124,
        marble: 362345,
    },
    49: {
        wood: 549150,
        marble: 419987,
    },
    50: {
        wood: 635784,
        marble: 486596,
    },
};

export const SULPHUR_REDUCER: Record<number, BuildingCost> = {
    1: {
        wood: 247,
        marble: 114,
    },
    2: {
        wood: 288,
        marble: 153,
    },
    3: {
        wood: 338,
        marble: 201,
    },
    4: {
        wood: 400,
        marble: 262,
    },
    5: {
        wood: 475,
        marble: 336,
    },
    6: {
        wood: 566,
        marble: 426,
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
        wood: 1372,
        marble: 1258,
    },
    12: {
        wood: 1635,
        marble: 1536,
    },
    13: {
        wood: 1944,
        marble: 1866,
    },
    14: {
        wood: 2309,
        marble: 2259,
    },
    15: {
        wood: 2738,
        marble: 2724,
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
        wood: 4518,
        marble: 4695,
    },
    19: {
        wood: 5322,
        marble: 5599,
    },
    20: {
        wood: 6260,
        marble: 6662,
    },
    21: {
        wood: 7351,
        marble: 7911,
    },
    22: {
        wood: 8621,
        marble: 9375,
    },
    23: {
        wood: 10096,
        marble: 11091,
    },
    24: {
        wood: 11807,
        marble: 13099,
    },
    25: {
        wood: 13792,
        marble: 15446,
    },
    26: {
        wood: 16091,
        marble: 18188,
    },
    27: {
        wood: 18752,
        marble: 21388,
    },
    28: {
        wood: 21829,
        marble: 25119,
    },
    29: {
        wood: 25384,
        marble: 29465,
    },
    30: {
        wood: 29490,
        marble: 34526,
    },
    31: {
        wood: 34227,
        marble: 40412,
    },
    32: {
        wood: 39690,
        marble: 47256,
    },
    33: {
        wood: 45985,
        marble: 55208,
    },
    34: {
        wood: 53236,
        marble: 64440,
    },
    35: {
        wood: 61583,
        marble: 75154,
    },
    36: {
        wood: 71185,
        marble: 87580,
    },
    37: {
        wood: 82226,
        marble: 101984,
    },
    38: {
        wood: 94916,
        marble: 118673,
    },
    39: {
        wood: 109493,
        marble: 137999,
    },
    40: {
        wood: 126232,
        marble: 160370,
    },
    41: {
        wood: 145444,
        marble: 186252,
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
        wood: 221738,
        marble: 290778,
    },
    45: {
        wood: 254944,
        marble: 336969,
    },
    46: {
        wood: 292983,
        marble: 390308,
    },
    47: {
        wood: 336543,
        marble: 451879,
    },
    48: {
        wood: 386409,
        marble: 522927,
    },
    49: {
        wood: 443476,
        marble: 604886,
    },
    50: {
        wood: 508765,
        marble: 699401,
    },
};

export const PALACE: Record<number, BuildingCost> = {
    1: {
        wood: 621,
        wine: 0,
        marble: 0,
        crystal: 0,
        sulphur: 0,
    },
    2: {
        wood: 5067,
        wine: 0,
        marble: 1221,
        crystal: 0,
        sulphur: 0,
    },
    3: {
        wood: 14922,
        wine: 0,
        marble: 2743,
        crystal: 0,
        sulphur: 2993,
    },
    4: {
        wood: 35635,
        wine: 9760,
        marble: 6330,
        crystal: 0,
        sulphur: 7524,
    },
    5: {
        wood: 77682,
        wine: 18090,
        marble: 14455,
        crystal: 20036,
        sulphur: 17728,
    },
    6: {
        wood: 160954,
        wine: 36260,
        marble: 32372,
        crystal: 36913,
        sulphur: 40101,
    },
    7: {
        wood: 322861,
        wine: 75121,
        marble: 71101,
        crystal: 73059,
        sulphur: 88188,
    },
    8: {
        wood: 633202,
        wine: 156978,
        marble: 153545,
        crystal: 149309,
        sulphur: 189978,
    },
    9: {
        wood: 1221325,
        wine: 327341,
        marble: 326934,
        crystal: 308230,
        sulphur: 402866,
    },
    10: {
        wood: 2325576,
        wine: 678453,
        marble: 688032,
        crystal: 636230,
        sulphur: 843766,
    },
    11: {
        wood: 4382951,
        wine: 1396259,
        marble: 1433963,
        crystal: 1307742,
        sulphur: 1749519,
    },
    12: {
        wood: 8191214,
        wine: 2853769,
        marble: 2964360,
        crystal: 2673192,
        sulphur: 3597583,
    },
    13: {
        wood: 15201180,
        wine: 5796117,
        marble: 6085968,
        crystal: 5433606,
        sulphur: 7346434,
    },
    14: {
        wood: 28042396,
        wine: 11706278,
        marble: 12421274,
        crystal: 10986180,
        sulphur: 14912996,
    },
    15: {
        wood: 51466444,
        wine: 23525973,
        marble: 25222524,
        crystal: 22106452,
        sulphur: 30118390,
    },
    16: {
        wood: 94036143,
        wine: 47073381,
        marble: 50989413,
        crystal: 44291771,
        sulphur: 60556963,
    },
    17: {
        wood: 171144741,
        wine: 93825300,
        marble: 102677063,
        crystal: 88401538,
        sulphur: 121282082,
    },
    18: {
        wood: 310402929,
        wine: 186366298,
        marble: 206045134,
        crystal: 175835827,
        sulphur: 242060454,
    },
    19: {
        wood: 561235268,
        wine: 369042504,
        marble: 412201170,
        crystal: 348674710,
        sulphur: 481624481,
    },
    20: {
        wood: 1011950004,
        wine: 728757004,
        marble: 822340320,
        crystal: 689497719,
        sulphur: 955627336,
    },
    21: {
        wood: 1820060719,
        wine: 1435499430,
        marble: 1636465888,
        crystal: 1360066463,
        sulphur: 1891391698,
    },
    22: {
        wood: 3266078968,
        wine: 2821226214,
        marble: 3249200175,
        crystal: 2676717428,
        sulphur: 3734981712,
    },
    23: {
        wood: 5848832679,
        wine: 5533180363,
        marble: 6437952588,
        crystal: 5257111646,
        sulphur: 7360329382,
    },
    24: {
        wood: 10454179023,
        wine: 10831537959,
        marble: 12732020922,
        crystal: 10305531195,
        sulphur: 14477189882,
    },
    25: {
        wood: 18653314480,
        wine: 21166587854,
        marble: 25135775043,
        crystal: 20166895886,
        sulphur: 28426058968,
    },
    26: {
        wood: 33229717869,
        wine: 41296779750,
        marble: 49544082920,
        crystal: 39401464922,
        sulphur: 55725452915,
    },
    27: {
        wood: 59109102787,
        wine: 80452328037,
        marble: 97509826873,
        crystal: 76867506345,
        sulphur: 109080630148,
    },
    28: {
        wood: 104999185097,
        wine: 156518221314,
        marble: 191650002247,
        crystal: 149753535406,
        sulphur: 213228631864,
    },
    29: {
        wood: 186278695277,
        wine: 304114337859,
        marble: 376196691518,
        crystal: 291378218702,
        sulphur: 416283408562,
    },
    30: {
        wood: 330083439180,
        wine: 590190453919,
        marble: 737571972670,
        crystal: 566265859641,
        sulphur: 811738180663,
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
        wood: 4690,
        wine: 0,
        marble: 1229,
        crystal: 0,
        sulphur: 0,
    },
    3: {
        wood: 14021,
        wine: 0,
        marble: 3015,
        crystal: 0,
        sulphur: 3038,
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
        marble: 16497,
        crystal: 20945,
        sulphur: 17131,
    },
    6: {
        wood: 153645,
        wine: 35701,
        marble: 36829,
        crystal: 36764,
        sulphur: 38626,
    },
    7: {
        wood: 309381,
        wine: 72704,
        marble: 80305,
        crystal: 70834,
        sulphur: 84983,
    },
    8: {
        wood: 609013,
        wine: 151003,
        marble: 171871,
        crystal: 143096,
        sulphur: 183447,
    },
    9: {
        wood: 1178962,
        wine: 314696,
        marble: 362413,
        crystal: 294523,
        sulphur: 390071,
    },
    10: {
        wood: 2253058,
        wine: 653580,
        marble: 755058,
        crystal: 608746,
        sulphur: 819434,
    },
    11: {
        wood: 4261638,
        wine: 1349488,
        marble: 1557658,
        crystal: 1255520,
        sulphur: 1704434,
    },
    12: {
        wood: 7993260,
        wine: 2768846,
        marble: 3187111,
        crystal: 2577735,
        sulphur: 3516178,
    },
    13: {
        wood: 14887354,
        wine: 5646946,
        marble: 6476102,
        crystal: 5265079,
        sulphur: 7203584,
    },
    14: {
        wood: 27562545,
        wine: 11453781,
        marble: 13081615,
        crystal: 10699616,
        sulphur: 14670852,
    },
    15: {
        wood: 50768236,
        wine: 23118434,
        marble: 26290071,
        crystal: 21641681,
        sulphur: 29726494,
    },
    16: {
        wood: 93094987,
        wine: 46460108,
        marble: 52600478,
        crystal: 43588048,
        sulphur: 59965169,
    },
    17: {
        wood: 170042922,
        wine: 93009045,
        marble: 104830791,
        crystal: 87455521,
        sulphur: 120491215,
    },
    18: {
        wood: 309516851,
        wine: 185556479,
        marble: 208201173,
        crystal: 174873076,
        sulphur: 241271883,
    },
    19: {
        wood: 561651487,
        wine: 369054235,
        marble: 412225873,
        crystal: 348599453,
        sulphur: 481632442,
    },
    20: {
        wood: 1016352781,
        wine: 731985298,
        marble: 813921918,
        crystal: 692996404,
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
        wood: 3303992302,
        wine: 2858709877,
        marble: 3150052490,
        crystal: 2718854424,
        sulphur: 3771976337,
    },
    23: {
        wood: 5938065770,
        wine: 5631362181,
        marble: 6177235498,
        crystal: 5368136633,
        sulphur: 7457653556,
    },
    24: {
        wood: 10651951957,
        wine: 11072234267,
        marble: 12090625934,
        crystal: 10578881383,
        sulphur: 14716810759,
    },
    25: {
        wood: 19074744886,
        wine: 21732141463,
        marble: 23623746667,
        crystal: 20811407901,
        sulphur: 28991492282,
    },
    26: {
        wood: 34103020026,
        wine: 42586740231,
        marble: 46084336912,
        crystal: 40875947402,
        sulphur: 57020629713,
    },
    27: {
        wood: 60881313460,
        wine: 83330382225,
        marble: 89766643617,
        crystal: 80166204326,
        sulphur: 111982594552,
    },
    28: {
        wood: 108537305227,
        wine: 162830670767,
        marble: 174614571646,
        crystal: 157006880024,
        sulphur: 219620508765,
    },
    29: {
        wood: 193250111725,
        wine: 317771361940,
        marble: 339227989378,
        crystal: 307108442987,
        sulphur: 430170833117,
    },
    30: {
        wood: 343671692725,
        wine: 619407688860,
        marble: 658242870743,
        crystal: 599995681652,
        sulphur: 841574016486,
    },
};

export const SHRINE: Record<number, BuildingCost> = {
    1: {
        wood: 872,
        wine: 0,
        marble: 0,
        crystal: 0,
        sulphur: 0,
    },
    2: {
        wood: 973,
        wine: 0,
        marble: 0,
        crystal: 0,
        sulphur: 0,
    },
    3: {
        wood: 1115,
        wine: 81,
        marble: 0,
        crystal: 0,
        sulphur: 0,
    },
    4: {
        wood: 1311,
        wine: 101,
        marble: 0,
        crystal: 0,
        sulphur: 0,
    },
    5: {
        wood: 1577,
        wine: 127,
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
        wine: 209,
        marble: 273,
        crystal: 0,
        sulphur: 0,
    },
    8: {
        wood: 3039,
        wine: 271,
        marble: 348,
        crystal: 0,
        sulphur: 0,
    },
    9: {
        wood: 3866,
        wine: 351,
        marble: 451,
        crystal: 243,
        sulphur: 0,
    },
    10: {
        wood: 4946,
        wine: 455,
        marble: 590,
        crystal: 316,
        sulphur: 0,
    },
    11: {
        wood: 6351,
        wine: 589,
        marble: 778,
        crystal: 415,
        sulphur: 155,
    },
    12: {
        wood: 8171,
        wine: 762,
        marble: 1030,
        crystal: 546,
        sulphur: 216,
    },
    13: {
        wood: 10521,
        wine: 984,
        marble: 1366,
        crystal: 718,
        sulphur: 298,
    },
    14: {
        wood: 13543,
        wine: 1267,
        marble: 1813,
        crystal: 946,
        sulphur: 408,
    },
    15: {
        wood: 17420,
        wine: 1629,
        marble: 2407,
        crystal: 1244,
        sulphur: 557,
    },
    16: {
        wood: 22380,
        wine: 2089,
        marble: 3193,
        crystal: 1635,
        sulphur: 756,
    },
    17: {
        wood: 28711,
        wine: 2672,
        marble: 4229,
        crystal: 2146,
        sulphur: 1022,
    },
    18: {
        wood: 36774,
        wine: 3411,
        marble: 5594,
        crystal: 2812,
        sulphur: 1377,
    },
    19: {
        wood: 47024,
        wine: 4344,
        marble: 7388,
        crystal: 3678,
        sulphur: 1850,
    },
    20: {
        wood: 60031,
        wine: 5522,
        marble: 9740,
        crystal: 4802,
        sulphur: 2479,
    },
    21: {
        wood: 76508,
        wine: 7005,
        marble: 12820,
        crystal: 6258,
        sulphur: 3312,
    },
    22: {
        wood: 97349,
        wine: 8870,
        marble: 16846,
        crystal: 8143,
        sulphur: 4416,
    },
    23: {
        wood: 123672,
        wine: 11211,
        marble: 22100,
        crystal: 10579,
        sulphur: 5875,
    },
    24: {
        wood: 156877,
        wine: 14148,
        marble: 28948,
        crystal: 13721,
        sulphur: 7801,
    },
    25: {
        wood: 198712,
        wine: 17826,
        marble: 37862,
        crystal: 17770,
        sulphur: 10341,
    },
    26: {
        wood: 251358,
        wine: 22428,
        marble: 49451,
        crystal: 22982,
        sulphur: 13685,
    },
    27: {
        wood: 317539,
        wine: 28180,
        marble: 64501,
        crystal: 29683,
        sulphur: 18084,
    },
    28: {
        wood: 400653,
        wine: 35361,
        marble: 84025,
        crystal: 38289,
        sulphur: 23865,
    },
    29: {
        wood: 504931,
        wine: 44319,
        marble: 109329,
        crystal: 49331,
        sulphur: 31454,
    },
    30: {
        wood: 635649,
        wine: 55484,
        marble: 142093,
        crystal: 63487,
        sulphur: 41406,
    },
    31: {
        wood: 799373,
        wine: 69387,
        marble: 184480,
        crystal: 81618,
        sulphur: 54447,
    },
    32: {
        wood: 1004276,
        wine: 86688,
        marble: 239270,
        crystal: 104822,
        sulphur: 71520,
    },
    33: {
        wood: 1260522,
        wine: 108199,
        marble: 310040,
        crystal: 134496,
        sulphur: 93855,
    },
    34: {
        wood: 1580751,
        wine: 134927,
        marble: 401381,
        crystal: 172415,
        sulphur: 123051,
    },
    35: {
        wood: 1980670,
        wine: 168115,
        marble: 519191,
        crystal: 220838,
        sulphur: 161191,
    },
    36: {
        wood: 2479792,
        wine: 209298,
        marble: 671041,
        crystal: 282634,
        sulphur: 210980,
    },
    37: {
        wood: 3102346,
        wine: 260372,
        marble: 866641,
        crystal: 361446,
        sulphur: 275934,
    },
    38: {
        wood: 3878410,
        wine: 323676,
        marble: 1118449,
        crystal: 461901,
        sulphur: 360622,
    },
    39: {
        wood: 4845302,
        wine: 402095,
        marble: 1442428,
        crystal: 589870,
        sulphur: 470975,
    },
    40: {
        wood: 6049311,
        wine: 499188,
        marble: 1859040,
        crystal: 752802,
        sulphur: 614693,
    },
    41: {
        wood: 7547835,
        wine: 619341,
        marble: 2394492,
        crystal: 960141,
        sulphur: 801765,
    },
    42: {
        wood: 9412017,
        wine: 767960,
        marble: 3082341,
        crystal: 1223862,
        sulphur: 1045148,
    },
    43: {
        wood: 11730015,
        wine: 951706,
        marble: 3965542,
        crystal: 1559139,
        sulphur: 1361639,
    },
    44: {
        wood: 14611033,
        wine: 1178781,
        marble: 5099061,
        crystal: 1985193,
        sulphur: 1773010,
    },
    45: {
        wood: 18190309,
        wine: 1459283,
        marble: 6553210,
        crystal: 2526371,
        sulphur: 2307470,
    },
    46: {
        wood: 22635269,
        wine: 1805645,
        marble: 8417902,
        crystal: 3213493,
        sulphur: 3001556,
    },
    47: {
        wood: 28153130,
        wine: 2233162,
        marble: 10808082,
        crystal: 4085571,
        sulphur: 3902576,
    },
    48: {
        wood: 35000291,
        wine: 2760655,
        marble: 13870656,
        crystal: 5191965,
        sulphur: 5071772,
    },
    49: {
        wood: 43493921,
        wine: 3411267,
        marble: 17793322,
        crystal: 6595117,
        sulphur: 6588394,
    },
    50: {
        wood: 54026264,
        wine: 4213458,
        marble: 22815833,
        crystal: 8373991,
        sulphur: 8554970,
    },
    51: {
        wood: 67082287,
        wine: 5202213,
        marble: 29244350,
        crystal: 10628426,
        sulphur: 11104107,
    },
    52: {
        wood: 83261462,
        wine: 6420528,
        marble: 37469742,
        crystal: 13484610,
        sulphur: 14407273,
    },
    53: {
        wood: 103304623,
        wine: 7921235,
        marble: 47990897,
        crystal: 17102019,
        sulphur: 18686126,
    },
    54: {
        wood: 128127102,
        wine: 9769234,
        marble: 61444420,
        crystal: 21682122,
        sulphur: 24227140,
    },
    55: {
        wood: 158859583,
        wine: 12044236,
        marble: 78642464,
        crystal: 27479402,
        sulphur: 31400462,
    },
    56: {
        wood: 196898470,
        wine: 14844122,
        marble: 100620903,
        crystal: 34815227,
        sulphur: 40684253,
    },
    57: {
        wood: 243967984,
        wine: 18289057,
        marble: 128700680,
        crystal: 44095341,
        sulphur: 52696060,
    },
    58: {
        wood: 302196697,
        wine: 22526540,
        marble: 164565879,
        crystal: 55831913,
        sulphur: 68233283,
    },
    59: {
        wood: 374211834,
        wine: 27737579,
        marble: 210363140,
        crystal: 70671323,
        sulphur: 88325326,
    },
    60: {
        wood: 463255503,
        wine: 34144276,
        marble: 268828140,
        crystal: 89429164,
        sulphur: 114300849,
    },
    61: {
        wood: 573327849,
        wine: 42019086,
        marble: 343446553,
        crystal: 113134348,
        sulphur: 147874406,
    },
    62: {
        wood: 709363414,
        wine: 51696199,
        marble: 438658833,
        crystal: 143084657,
        sulphur: 191258100,
    },
    63: {
        wood: 877448349,
        wine: 63585434,
        marble: 560120679,
        crystal: 180916705,
        sulphur: 247305440,
    },
    64: {
        wood: 1085087898,
        wine: 78189286,
        marble: 715034345,
        crystal: 228694038,
        sulphur: 319696633,
    },
    65: {
        wood: 1341535751,
        wine: 96123776,
        marble: 912569944,
        crystal: 289018058,
        sulphur: 413177264,
    },
    66: {
        wood: 1658199540,
        wine: 118143983,
        marble: 1164401129,
        crystal: 365167666,
        sulphur: 533865633,
    },
    67: {
        wood: 2049139983,
        wine: 145175285,
        marble: 1485386135,
        crystal: 461275029,
        sulphur: 689648509,
    },
    68: {
        wood: 2531685269,
        wine: 178351602,
        marble: 1894433469,
        crystal: 582546797,
        sulphur: 890690626,
    },
    69: {
        wood: 3127187176,
        wine: 219062186,
        marble: 2415602217,
        crystal: 735542486,
        sulphur: 1150090537,
    },
    70: {
        wood: 3861951490,
        wine: 269008866,
        marble: 3079500319,
        crystal: 928524740,
        sulphur: 1484724755,
    },
    71: {
        wood: 4768382833,
        wine: 330276090,
        marble: 3925061335,
        crystal: 1171900009,
        sulphur: 1916334103,
    },
    72: {
        wood: 5886393074,
        wine: 405416590,
        marble: 5001801834,
        crystal: 1478772873,
        sulphur: 2472921590,
    },
    73: {
        wood: 7265133880,
        wine: 497556169,
        marble: 6372689106,
        crystal: 1865643286,
        sulphur: 3190550920,
    },
    74: {
        wood: 8965127744,
        wine: 610521851,
        marble: 8117783759,
        crystal: 2353283450,
        sulphur: 4115660190,
    },
    75: {
        wood: 11060888855,
        wine: 748998583,
        marble: 10338866069,
        crystal: 2967840494,
        sulphur: 5308038005,
    },
    76: {
        wood: 13644146100,
        wine: 918720835,
        marble: 13165311097,
        crystal: 3742222945,
        sulphur: 6844651217,
    },
    77: {
        wood: 16827806097,
        wine: 1126706864,
        marble: 16761548833,
        crystal: 4717843851,
        sulphur: 8824567426,
    },
    78: {
        wood: 20750825703,
        wine: 1381545078,
        marble: 21336535964,
        crystal: 5946812053,
        sulphur: 11375284660,
    },
    79: {
        wood: 25584202145,
        wine: 1693744086,
        marble: 27155780447,
        crystal: 7494686559,
        sulphur: 14660869641,
    },
    80: {
        wood: 31538336374,
        wine: 2076160534,
        marble: 34556605303,
        crystal: 9443938353,
        sulphur: 18892420267,
    },
    81: {
        wood: 38872083640,
        wine: 2544521983,
        marble: 43967522322,
        crystal: 11898300924,
        sulphur: 24341514726,
    },
    82: {
        wood: 47903876851,
        wine: 3118065867,
        marble: 55932819815,
        crystal: 14988237131,
        sulphur: 31357498033,
    },
    83: {
        wood: 59025396171,
        wine: 3820320247,
        marble: 71143764691,
        crystal: 18877808184,
        sulphur: 40389698740,
    },
    84: {
        wood: 72718366253,
        wine: 4680057713,
        marble: 90478194356,
        crystal: 23773303574,
        sulphur: 52015979101,
    },
    85: {
        wood: 89575194893,
        wine: 5732460799,
        marble: 115050749698,
        crystal: 29934082367,
        sulphur: 66979420764,
    },
    86: {
        wood: 110324329433,
        wine: 7020545598,
        marble: 146276603277,
        crystal: 37686191313,
        sulphur: 86235459760,
    },
    87: {
        wood: 135861406741,
        wine: 8596900717,
        marble: 185952300998,
        crystal: 47439469464,
        sulphur: 111012441610,
    },
    88: {
        wood: 167287517340,
        wine: 10525811213,
        marble: 236358303842,
        crystal: 59709030101,
        sulphur: 142889410430,
    },
    89: {
        wood: 205956204593,
        wine: 12885852522,
        marble: 300389043278,
        crystal: 75142237843,
        sulphur: 183896028000,
    },
    90: {
        wood: 253531188492,
        wine: 15773058176,
        marble: 381717858721,
        crystal: 94552583838,
        sulphur: 236640907355,
    },
    91: {
        wood: 312057255623,
        wine: 19304787871,
        marble: 485006155258,
        crystal: 118962219386,
        sulphur: 304476427229,
    },
    92: {
        wood: 384047311733,
        wine: 23624450443,
        marble: 616168615537,
        crystal: 149655356773,
        sulphur: 391710379926,
    },
    93: {
        wood: 472589273801,
        wine: 28907270190,
        marble: 782709461223,
        crystal: 188245308559,
        sulphur: 503877738401,
    },
    94: {
        wood: 581477313330,
        wine: 35367326579,
        marble: 994148764326,
        crystal: 236758642014,
        sulphur: 648089591460,
    },
    95: {
        wood: 715372986574,
        wine: 43266147878,
        marble: 1262562881537,
        crystal: 297740810134,
        sulphur: 833481123408,
    },
    96: {
        wood: 880003043403,
        wine: 52923200986,
        marble: 1603269509890,
        crystal: 374388730212,
        sulphur: 1071786706933,
    },
    97: {
        wood: 1082402246943,
        wine: 64728694991,
        marble: 2035695999583,
        crystal: 470717172307,
        sulphur: 1378078120873,
    },
};
