class Dog {
  constructor(name) {
    this.name = name;
  }
  showInfo() {
    console.log(`This is ${this.name}`);
  } 
}

module.exports = Dog;