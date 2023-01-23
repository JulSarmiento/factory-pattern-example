// 1. Creamos la clase default para los tipos de perros. 
//Esta clase genera el nombre del perro y
// muestra la información con el metodo showInfo().
class Dog {
  constructor(name) {
    this.name = name;
  }
  showInfo() {
    console.log(`This is ${this.name}`);
  } 
}

module.exports = Dog;