import {
    Account,
    City,
    CreateNewCity,
    God,
    Island,
    LuxuryResource,
    NextStep,
    Server,
    UpgradeBuilding,
    UpgradeIslandProduction,
} from '@/types';

import { calculateBuildCost, calculateBuildTotalCost } from '../../utils/building.ts';
import { getBasicProduction, getCost } from '../../utils/island.ts';

// TODO: premium
// TODO: Cinetheatre
// TODO: Helios
export const calculateWoodProduction = (island: Island, city: Omit<City, 'name'>, account: Account): number =>
    // Basic
    getBasicProduction('wood', island.woodLevel, city.helpingHands, account.formOfGovernment) *
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
    getBasicProduction('luxury', island.luxuryLevel, city.helpingHands, account.formOfGovernment) *
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
                  cost: getCost(type, level),
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
                    calculateBuildCost('WOOD_BOOSTER', (city.woodBoosterLevel ?? 0) + 1, city, account.research),
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
                    calculateBuildCost('LUXURY_BOOSTER', (city.luxuryBoosterLevel ?? 0) + 1, city, account.research),
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
                    calculateBuildTotalCost(
                        'COVERNOR',
                        city.governorLevel ?? 0,
                        (city.governorLevel ?? 0) + 1,
                        city,
                        account.research,
                    ),
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
        cost: calculateBuildCost('SHRINE', (city.shrineLevel ?? 0) + 1, city, account.research),
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

const calculateNewCity = (account: Account, island: Island): Omit<CreateNewCity, 'paybackTime'> => {
    const city: Omit<City, 'name'> = {};
    (['wood', 'marble', 'wine', 'crystal', 'sulphur'] as const).forEach((r) => {
        const {
            cost,
            buildings: { woodBoosterLevel, luxuryBoosterLevel },
        } = calculateNewCityWithBooster(account, island, {
            ...city,
            woodBoosterLevel: findBestBuildLevel('woodBoosterLevel', account, island, city),
            luxuryBoosterLevel: findBestBuildLevel('luxuryBoosterLevel', account, island, city),
        });
        city.woodBoosterLevel = woodBoosterLevel;
        city.luxuryBoosterLevel = luxuryBoosterLevel;
        let minCost = cost;
        let i = 1;
        for (; i < 50; i++) {
            const {
                cost,
                buildings: { woodBoosterLevel, luxuryBoosterLevel },
            } = calculateNewCityWithBooster(account, island, {
                ...city,
                [`${r}ReduceLevel`]: i,
            });
            if (cost >= minCost) break;
            city.woodBoosterLevel = woodBoosterLevel;
            city.luxuryBoosterLevel = luxuryBoosterLevel;
            minCost = cost;
        }
        city[`${r}ReduceLevel`] = i;
    });
    return calculateNewCityWithBooster(
        account,
        island,
        {
            ...city,
            woodBoosterLevel: findBestBuildLevel('woodBoosterLevel', account, island, city),
            luxuryBoosterLevel: findBestBuildLevel('luxuryBoosterLevel', account, island, city),
        },
        true,
    );
};

const getMaxLevel = (type: keyof Omit<City, 'name' | 'helpingHands' | 'selectedGod'>): number => {
    switch (type) {
        case 'governorLevel':
            return 20;
        case 'woodBoosterLevel':
        case 'luxuryBoosterLevel':
            return 61;
        case 'woodReduceLevel':
        case 'wineReduceLevel':
        case 'marbleReduceLevel':
        case 'crystalReduceLevel':
        case 'sulphurReduceLevel':
            return 50;
        case 'shrineLevel':
            return 41;
    }
};

const findBestBuildLevel = (
    type: keyof Omit<City, 'name' | 'helpingHands' | 'selectedGod'>,
    account: Account,
    island: Island,
    city: Omit<City, 'name'>,
): number => {
    if (account.cityCount === 0) return 0;
    const { cost, productionIncrease } = calculateNewCityWithBooster(account, island, city);
    let paybackTime = cost / productionIncrease;
    for (let i = (city[type] ?? 0) + 1; i <= getMaxLevel(type); i++) {
        const { cost, productionIncrease } = calculateNewCityWithBooster(account, island, { ...city, [type]: i });
        if (cost / productionIncrease > paybackTime) return i - 1;
        paybackTime = cost / productionIncrease;
    }
    return 61;
};

const calculateNewCityWithBooster = (
    account: Account,
    island: Island,
    city: Omit<City, 'name'> = {},
    includeOtherCities: boolean = false,
): Omit<CreateNewCity, 'paybackTime'> => {
    return {
        type: 'CREATE_NEW_CITY' as const,
        target: island,
        productionIncrease:
            calculateWoodProduction(island, { ...city, governorLevel: account.cityCount }, account) +
            calculateLuxuryProduction(island, { ...city, governorLevel: account.cityCount }, account),
        cost:
            (includeOtherCities
                ? account.islands
                      .flatMap(({ cities }) =>
                          cities.filter(({ governorLevel }) => (governorLevel ?? 0) < account.cityCount),
                      )
                      .flatMap((city) =>
                          calculateBuildTotalCost(
                              'COVERNOR',
                              city.governorLevel ?? 0,
                              account.cityCount,
                              city,
                              account.research,
                          ),
                      )
                      .reduce((total, cost) => total + cost, 0)
                : 0) +
            calculateBuildTotalCost('COVERNOR', 0, account.cityCount, city, account.research) +
            (city.woodBoosterLevel
                ? calculateBuildTotalCost('WOOD_BOOSTER', 0, city.woodBoosterLevel, city, account.research)
                : 0) +
            (city.luxuryBoosterLevel
                ? calculateBuildTotalCost('LUXURY_BOOSTER', 0, city.luxuryBoosterLevel, city, account.research)
                : 0) +
            (city.woodReduceLevel
                ? calculateBuildTotalCost('WOOD_REDUCER', 0, city.woodReduceLevel, city, account.research)
                : 0) +
            (city.wineReduceLevel
                ? calculateBuildTotalCost('WINE_REDUCER', 0, city.wineReduceLevel, city, account.research)
                : 0) +
            (city.marbleReduceLevel
                ? calculateBuildTotalCost('MARBLE_REDUCER', 0, city.marbleReduceLevel, city, account.research)
                : 0) +
            (city.crystalReduceLevel
                ? calculateBuildTotalCost('CRYSTAL_REDUCER', 0, city.crystalReduceLevel, city, account.research)
                : 0) +
            (city.sulphurReduceLevel
                ? calculateBuildTotalCost('SULPHUR_REDUCER', 0, city.sulphurReduceLevel, city, account.research)
                : 0),
        buildings: {
            ...city,
            governorLevel: account.cityCount,
        },
    };
};
