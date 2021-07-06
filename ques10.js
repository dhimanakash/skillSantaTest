// Consider below as an example of constructor function where we want name and level to be referred to a function itself, is below example correct or not? Please explain?

function Hero(name, level) {
  name = name;
  level = level;
}

// No above example is not a correct method to do it, because if we want  to access the name and level we have to use this keyword. Without this keyword if we access the method Hero it will show a empty object.

// below is the correct method

function Hero(name, level) {
  this.name = name;
  this.level = level;
}

const obj1 = new Hero("Bob", 4);
console.log(obj1); // Hero { name: 'Bob', level: 4 }
