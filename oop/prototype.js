//какой принцип реализован?

function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.sayHello = function() {
    console.log('Привет, меня зовут ' + this.name);
  };
  
  function Cat(name, color) {
    Animal.call(this, name);
    
    this.color = color;
  }
  
  Cat.prototype = Object.create(Animal.prototype);
  Cat.prototype.constructor = Cat;
  
  Cat.prototype.meow = function() {
    console.log('Мяу, мяу!');
  };
  
  var myAnimal = new Animal('Alex');
  var myCat = new Cat('Мурзик', 'рыжий');
  
  myAnimal.sayHello(); 
  myCat.sayHello();    
  myCat.meow();       
  