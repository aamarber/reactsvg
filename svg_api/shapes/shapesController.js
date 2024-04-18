const app = require('../app');
const Shape = require('./shape');

const triangle = require('./triangle');
const square = require('./square');
const cross = require('./cross');
const circle = require('./circle');

const transformCoordinatesToPath = coordinates => {
    if(!coordinates.length) 
        return;

    let path = `M ${coordinates[0].x},${coordinates[0].y}`;

    for(let i = 1; i < coordinates.length; i++){
        path += ` L ${coordinates[i].x},${coordinates[i].y}`;
    }

    return path + ' Z';
}

let shapes = [triangle, square, cross, circle];

shapes = shapes.map(x =>{ return  { ...x, path: transformCoordinatesToPath(x.path) } });

app.get('/shapes', (req, res) => {
    res.status(200).json(shapes);
});

app.get('/shapes/triangle', (req, res) => {
    res.status(200).json(triangle);
});

app.get('/shapes/square', (req, res) => {
    res.status(200).json(square);
});

app.get('/shapes/cross', (req, res) => {
    res.status(200).json(cross);
});

app.get('/shapes/circle', (req, res) => {
    res.status(200).json(circle);
});