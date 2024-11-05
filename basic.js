//Method 1

const os = require('os');
const path = require('path');
const math = require('./math');
console.log(math.add(3,3));
console.log(math.sub(3,6));
console.log(math.mul(7,3));
console.log(math.div(3,7));

//Method 2

const {add, sub, mul, div} = require('./math');
console.log(add(3,3));
console.log(sub(3,6));
console.log(mul(7,3));
console.log(div(3,7));

//Method 3

import os from 'os';
import {add, sub, mul, div} from './math';
console.log(add(3,3));
console.log(sub(3,6));
console.log(mul(7,3));
console.log(div(3,7));