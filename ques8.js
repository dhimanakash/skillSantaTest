// How to copy values from one object to another in above mentioned example , merge and print them?

const name = { firstName: "Philip", lastName: "Fry" };
const details = {
  job: "Delivery Boy",
  employer: "Planet Express",
};

// Object.assign methods copies all properties from one or more source objects
const newVariable = Object.assign(name, details);
console.log(newVariable);
