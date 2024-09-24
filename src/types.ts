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
}
