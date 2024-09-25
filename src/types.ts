export interface Server {
    id: string;
    community: string;
    number: number;
    bonuses: {
        wood?: number;
        wine?: number;
        marble?: number;
        crystal?: number;
        sulphur?: number;
    };
}

export type FormOfGovernment =
    | 'IKACRACY'
    | 'ARISTOCRACY'
    | 'DEMOCRACY'
    | 'DICTATORSHIP'
    | 'NOMOCRACY'
    | 'OLIGARCHY'
    | 'TECHNOCRACY'
    | 'THEOCRACY';

export interface Account {
    server: Server;
    name: string;
    formOfGovernment: FormOfGovernment;
    islands: Island[];
}

export type LuxuryResource = 'WINE' | 'MARBLE' | 'CRYSTAL' | 'SULPHUR';

export interface Island {
    x: number;
    y: number;
    luxuryResource: LuxuryResource;
    woodLevel: number;
    luxuryLevel: number;
    cities: City[];
}

export interface City {
    name: string;
    woodBoosterLevel?: number;
    luxuryBoosterLevel?: number;
    woodReduceLevel?: number;
    wineReduceLevel?: number;
    marbleReduceLevel?: number;
    crystalReduceLevel?: number;
    sulphurReduceLevel?: number;
    helpingHands?: boolean;
}

interface AbstractNextStep {
    productionIncrease: number;
    cost: number;
    paybackTime: number;
}

export interface UpgradeIslandProduction extends AbstractNextStep {
    type: 'UPGRADE_WOOD' | 'UPGRADE_LUXURY';
    target: Island;
}

export interface UpgradeBooster extends AbstractNextStep {
    type: 'UPGRADE_WOOD_BOOSTER' | 'UPGRADE_LUXURY_BOOSTER';
    target: City;
}

export type NextStep = UpgradeIslandProduction | UpgradeBooster;
