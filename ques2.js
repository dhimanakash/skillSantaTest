// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

function showData() {
  let authors = library.map((item) => item.author);
  let titles = library.map((item) => item.title);
  let readingStatus = library.map((item) => item.readingStatus);
  return { authors, titles, readingStatus };
}
console.log(showData());
