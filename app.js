// Usamos de forma simple un Factory en el cliente.
const FactoryDog = require('./factory_dog.js');

const Labrador = FactoryDog.createDog('labrador');
const Pincher = FactoryDog.createDog('pincher');
const Pitbull = FactoryDog.createDog('pitbull');
const Labrado2 = FactoryDog.createDog('labrador');

Labrador.showInfo();
Pincher.showInfo();
Pitbull.showInfo();
Labrado2.showInfo();