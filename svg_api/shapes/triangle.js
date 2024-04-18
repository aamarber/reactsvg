const Shape = require('./shape');

const triangle = new Shape([
    { x: 50, y: 0 },
    { x: 0, y: 100 },
    { x: 100, y: 100 },
    { x: 50, y: 0 }
],
'Triangle',
 '#CDE7BE', '#561D25');

module.exports = triangle;