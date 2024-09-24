import { Server } from '@/types';

const translateServerNumberToName = (number: number): string => {
    switch (number) {
        case 9:
            return 'Iota';
        case 59:
            return 'Perseus';
        case 60:
            return 'Plutos';
        default:
            return 'Tuntematon';
    }
};

export const generateServerName = (server: Server): string =>
    `${server.id} / Ikariam.${server.community.toUpperCase()} ${translateServerNumberToName(server.number)}`;
