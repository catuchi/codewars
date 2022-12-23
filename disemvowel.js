const words = "This guy is good";

function disemvowel(str) {
  const regex = /[^aeiou]/gi;
  const result = str.match(regex);
  return result.join("");
}

const noVowels = disemvowel(words);
console.log(noVowels.length);
