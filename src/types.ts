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

export interface Account {
    server: Server;
    name: string;
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
}
