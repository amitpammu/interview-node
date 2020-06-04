const { Console } = require('console');
const fs = require('fs');
const out = fs.createWriteStream('./stdout.log');
const err = fs.createWriteStream('./stderr.log');
let logger = new Console({ stdout: out, stderr: err });


logger.log("log");
logger.error('error');
logger.warn('warning');
logger.assert(false, 'nothing')