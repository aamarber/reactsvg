const Shape = require('./shape');

const square = new Shape([
    { x: 0, y: 0 },
    { x: 100, y: 0 },
    { x: 100, y: 100 },
    { x: 0, y: 100 },
    { x: 0, y: 0 }
],
'Square',
'#CE8147', '#561D25');

module.exports = square;