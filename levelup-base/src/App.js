import { add } from './math';

export const total = (shipping, cost) => `$${add(shipping, cost)}`;
