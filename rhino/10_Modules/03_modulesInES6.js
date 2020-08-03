// 1. ES6 Exports
export const PI = Math.PI;

export function degreesToRadians(d) { return d * PI / 180; };

export class Circle {
  constructor(r) { this.r = r }
  area() { return PI * this.r * this.r; }
};

// In place of `exports` throughout, can collect all at the end of the file
export { Circle, degreesToRadians, PI };



// 2. ES6 Imports
import BitSet from './bitset.js';
import { mean, sd } fro './stats.js';
import * as stats from './stats.js';
import './analytics.js'; // case when module has no exports



// 3. Imports and Exports with Renaming
import { render as renderImage } from './imageutils.js';
import { render as renerUI } from './ui.js';

// similarly
export { layout as calculateLayout, render as renderLayout };



// 4. Re-Exports
import { mean } from './stats/mean.js';
import { sd } from './stats/sd.js';
export { mean, sd };

// or, more simply
export { mean } from './stats/mean.js';
export { sd } from './stats/sd.js';

export * from './stats/mean.js';

export { mean, mean as average } from './stats/mean.js';



// 5. JavaScript Modules on the Web
