// Q7. Create a nested array object called operatingSystem and add below key and  values Name - Ubuntu , version - 18.4 , license - open source

let operatingSystem = [];

function Book(name, version, license) {
  this.name = name;
  this.version = version;
  this.license = license;
}

let book = new Book("Ubuntu", 18.4, "open source");
operatingSystem.push(book);
console.log(operatingSystem);
