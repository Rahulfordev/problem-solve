//Task 12: Filtering and Mapping
const books = [
  {
    title: "Biology",
    author: "Gahi Ajmol",
    genre: "academic",
    publishedYear: 2013,
  },
  {
    title: "Chemistry",
    author: "hazari nag",
    genre: "academic",
    publishedYear: 2009,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "novel",
    publishedYear: 1925,
  },
  {
    title: "The Catcher in the Rye",
    author: "J. D. Salinger",
    genre: "literary ",
    publishedYear: 1951,
  },
];

function filterPulishYear(books) {
  const filterYear = books.filter((book) => {
    return book.publishedYear > 2000;
  });
  console.log(filterYear);
}

filterPulishYear(books);
