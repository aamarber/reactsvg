const Shape = require('./shape');

const cross = new Shape([
    { x: 0, y: 0 },
    { x: 50, y: 50 },
    { x: 100, y: 0 },
    { x: 0, y: 100 },
    { x: 50, y: 50 },
    { x: 100, y: 100 }
],
'Cross',
'none', '#48233C');

module.exports = cross;