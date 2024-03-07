// ** uppercase only the first word of this value
//1.Split the `fullName` string into an array of words.
//2.Convert the first word to uppercase.
//3.Join the words back together to form the modified string.

const fullName = "rahul ali";
const words = fullName.split(" ");
const modifiedWords = words.map((word, index) =>
  index === 0 ? word.toUpperCase() : word
);
const modifiedFullName = modifiedWords.join(" ");
console.log(modifiedFullName);

// ** uppercase only the first letters of this value
const fullName = "rohim ali";
const words = fullName.split(" ");
const modifiedWords = words.map((word) => {
  if (word.length > 0) {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
  }
});
const modifiedFullName = modifiedWords.join(" ");
console.log(modifiedFullName);

// ** uppercase only the first word of the first letter of this value
const fullName = "rohim ali";
if (fullName.length > 0) {
  const modifiedFullName = fullName[0].toUpperCase() + fullName.substring(1);
  console.log(modifiedFullName);
}
