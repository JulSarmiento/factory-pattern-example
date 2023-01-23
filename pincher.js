// Subclase de DOg
const Dog = require('./default_dog.js');

class Pincher extends Dog {
  constructor(){
    super('Pincher');
  }
}

module.exports = Pincher;