// What will be the output for the code?

var arr = [2, 56, 78, 34, 65];
var new_arr = arr.map(function (num) {
  return num / 2;
});
print(new_arr);

// it will show an error because print is not define but if we replace print with console.log then the output will be [ 1, 28, 39, 17, 32.5 ]
