// subclase de Dog

const Dog = require('./default_dog.js');

class Pitbull extends Dog {
  constructor(){
    super('Pitbull');
  }
}

module.exports = Pitbull;