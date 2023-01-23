# factory-pattern-example

1. Creamos el archivo default_dog.js con la clase padre, la cual contendra todos lo metodos que podremos usar una vez instanciado el perro.
2. Creamos una subclase por cada modelo en que se pueda desglozar la clase padre, segun se necesite, en este caso usamos razas de perro.
  labrador.js
  pincher.js
  pitbull.js
3. Procedemos a generar la clase factory, que se encargara de instanciar los objetos o modelos que necesitemos trabajar. 
  Estos metodos de creacion son estaticos ya que instancian sobre la clase Dog no sobre si misma.
  factory_dog.js
4. En un archivo tipo app.js procedemos a instanciar a los objetos de modelo mediante la el metodo de creacion de la clase factory, y 
  en ese momento podremos usar todos los metodos disponibles dentro de la clase default_dog, mas los correspondientes de la subclase.