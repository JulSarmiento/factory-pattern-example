// subclase de Dog
const Dog = require('./default_dog.js');

class Labrador extends Dog {
  constructor(){
    super('Labrador');
  }
}

module.exports = Labrador;