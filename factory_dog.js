// Creamos la clase FactoryDog. Los metodos deben ser STATIC para poder usarlos sin instanciar la clase.

class FactoryDog {
  
  static createDog(type) {
    const  Cls = require(`./${type}.js`);
    return new Cls();
  }
}

module.exports = FactoryDog;
