import { FormOfGovernment } from '@/types';

import { getLuxuryDonation, getLuxuryMaxWorker, getWoodDonation, getWoodMaxWorker } from '../data/Island.ts';

export const getBasicProduction = (
    type: 'wood' | 'luxury',
    level: number,
    helpingHands: boolean = false,
    formOfGovernment: FormOfGovernment,
): number =>
    (type === 'wood' ? getWoodMaxWorker : getLuxuryMaxWorker)(level) +
    getHelpingHandMaxWorkers(type, level, helpingHands) * 0.25 * (formOfGovernment === 'TECHNOCRACY' ? 1.2 : 1);

const getHelpingHandMaxWorkers = (type: 'wood' | 'luxury', level: number, helpingHands: boolean = false): number =>
    helpingHands ? Math.floor((type === 'wood' ? getWoodMaxWorker : getLuxuryMaxWorker)(level) * 0.5) : 0;

export const getCost = (type: 'UPGRADE_WOOD' | 'UPGRADE_LUXURY', level: number): number =>
    (type === 'UPGRADE_WOOD' ? getWoodDonation : getLuxuryDonation)(level);

export const getTotalCost = (type: 'UPGRADE_WOOD' | 'UPGRADE_LUXURY', from: number, to: number): number =>
    Array.from(Array(to))
        .map((_, i) => i + 1)
        .filter((i) => i > Math.max(1, from))
        .reduce((total, level) => total + getCost(type, level), 0);
