import { FormOfGovernment, Island, Server } from '@/types';

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

export const convertIslandToText = (island: Island): string =>
    `[${(island.x < 10 ? '0' : '') + island.x}:${(island.y < 10 ? '0' : '') + island.y}]`;

// https://gist.github.com/LewisJEllis/9ad1f35d102de8eee78f6bd081d486ad
export const getRelativeTimeString = (seconds: number): string => {
    const deltaSeconds = Math.round(seconds);
    const cutoffs = [60, 3600, 86400, 86400 * 7, 86400 * 30, 86400 * 365, Infinity];
    const units: Intl.RelativeTimeFormatUnit[] = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year'];
    const unitIndex = cutoffs.findIndex((cutoff) => cutoff > Math.abs(deltaSeconds));
    const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1;
    return new Intl.RelativeTimeFormat(undefined, { numeric: 'auto' }).format(
        Math.floor(deltaSeconds / divisor),
        units[unitIndex],
    );
};
