// Q3. What will be the output of the following code?

var Employee = {
  company: "Rohit",
};

var Emp1 = Object.create(employee);
delete Emp1.company;
console.log(emp1.company);

// It will show an error because employee is undefined
