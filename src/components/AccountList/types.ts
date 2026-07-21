import type { City } from '@/types';

export type BuildingKey = keyof Omit<City, 'name' | 'helpingHands' | 'selectedGod' | 'luxuryResource'>;
