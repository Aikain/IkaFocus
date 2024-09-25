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
    shrineLevel: number;
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

export type God = 'PAN' | 'DIONYSUS' | 'TYCHE' | 'PLUTUS' | 'THEIA' | 'HEPHAESTUS';

export interface City {
    name: string;
    woodBoosterLevel?: number;
    luxuryBoosterLevel?: number;
    woodReduceLevel?: number;
    wineReduceLevel?: number;
    marbleReduceLevel?: number;
    crystalReduceLevel?: number;
    sulphurReduceLevel?: number;
    shrineLevel?: number;
    selectedGod?: God;
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

export interface UpgradeBuilding extends AbstractNextStep {
    type: 'UPGRADE_WOOD_BOOSTER' | 'UPGRADE_LUXURY_BOOSTER' | 'UPGRADE_SHRINE';
    target: City;
}

export type NextStep = UpgradeIslandProduction | UpgradeBuilding;
