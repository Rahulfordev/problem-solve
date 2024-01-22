//Task 22: Calculating Average Rating
const books1 = [
  {
    title: "Biology",
    rating: 3,
  },
  {
    title: "Chemistry",
    rating: 4,
  },
  {
    title: "The Great Gatsby",
    rating: 5,
  },
  {
    title: "The Catcher in the Rye",
    rating: 2,
  },
];

const length = books1.length;
const totalItemRating = books1.reduce((acc, curr) => {
  let totalRating = (acc += curr.rating);
  return totalRating;
}, 0);

console.log(totalItemRating / length);
