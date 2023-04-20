function validBraces(braces) {
  //TODO

  let stack = [];
  const bracesMap = { "(": ")", "{": "}", "[": "]" };

  for (let brace of braces) {
    if (bracesMap.hasOwnProperty(brace)) {
      stack.push(brace);
    } else if (stack.length === 0 || brace !== bracesMap[stack.pop()]) {
      return false;
    }
  }

  return stack.length === 0;
}

console.log(validBraces("(){}[]")); // true
console.log(validBraces("([{}])")); // true
console.log(validBraces("(}")); // false
console.log(validBraces("[(])")); // false
console.log(validBraces("[({})](]")); // false
