// Q4. Consider the two functions below. Will they both return the same thing? Why or why not?

function foo1() {
  return {
    bar: "hello",
  };
}

function foo2() {
  return {
    bar: "hello",
  };
}

// They will return the same output i.e { bar: 'hello' } because everytime we calling a function it will return an object of same property.
