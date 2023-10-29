const createTemplate = require('./templates/createTemplate');

const layer = process.argv[2];
const sliceName = process.argv[3];

const layers = ['2pages', '4features', '5entities'];

if (!layer || !layers.includes(layer)) {
    throw new Error(`Specify layer ${layers.join(' or ')}`);
}

if (!sliceName) {
    throw new Error('Specify the name of the slices');
}

createTemplate(layer, sliceName);
