const string = "abracadabra";

function getCount(str) {
  const result = str.match(/[aeiou]/gi);

  return result === null ? 0 : result.length;
}

const vowelsCount = getCount(string);
console.log(vowelsCount);
