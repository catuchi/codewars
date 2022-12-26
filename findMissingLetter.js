// function findMissingLetter(array) {
//   const smallLetters = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];
//   const capitalLetters = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//   ];

//   if (smallLetters.includes(array[0])) {
//     const index = smallLetters.indexOf(array[0]);
//     for (let i = 0; i < array.length; i++) {
//       if (smallLetters[index + i] === array[i]) {
//       } else {
//         return smallLetters[index + i];
//       }
//     }
//   } else if (capitalLetters.includes(array[0])) {
//     const index = capitalLetters.indexOf(array[0]);
//     for (let i = 0; i < array.length; i++) {
//       if (capitalLetters[index + i] === array[i]) {
//       } else {
//         return capitalLetters[index + i];
//       }
//     }
//   }
// }

function findMissingLetter(array) {
  let first = array[0].charCodeAt(0);
  // console.log(first);
  for (let i = 1; i < array.length; i++) {
    // console.log(first + i);
    if (first + i !== array[i].charCodeAt(0)) {
      return String.fromCharCode(first + i);
    }
  }
  throw new Error("Invalid input");
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
// console.log(findMissingLetter(["O", "Q", "R", "S"]));
