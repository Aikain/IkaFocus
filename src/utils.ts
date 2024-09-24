import { FormOfGovernment, Server } from '@/types';

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

export const translateFormOfGovernment = (formOfGovernment: FormOfGovernment): string => {
    switch (formOfGovernment) {
        case 'IKACRACY':
            return 'Ikakratia';
        case 'ARISTOCRACY':
            return 'Aristokratia';
        case 'DEMOCRACY':
            return 'Demokratia';
        case 'DICTATORSHIP':
            return 'Diktatuuri';
        case 'NOMOCRACY':
            return 'Nomokratia';
        case 'OLIGARCHY':
            return 'Harvainvalta';
        case 'TECHNOCRACY':
            return 'Teknokratia';
        case 'THEOCRACY':
            return 'Teokratia';
    }
};
