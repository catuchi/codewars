function spinWords(string) {
  if (string.length < 5) return string;

  const arrOfWords = string.split(" ");

  const spunWords = [];

  for (word of arrOfWords) {
    if (word.length < 5) {
      spunWords.push(word);
    } else {
      const reversed = word.split("").reverse().join("");
      spunWords.push(reversed);
    }
  }

  return spunWords.join(" ");
}

const result = spinWords("Hey fellow warriors");
const result1 = spinWords("This is a test");
const result2 = spinWords("This is another test");

console.log(result);
console.log(result1);
console.log(result2);
