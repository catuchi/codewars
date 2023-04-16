function solution(roman) {
  // complete the solution by transforming the
  // string roman numeral into an integer

  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    const currentCharacter = roman[i];
    const currentValue = romanMap[currentCharacter];

    if (i === roman.length - 1 || currentValue >= romanMap[roman[i + 1]]) {
      result += currentValue;
    } else {
      result -= currentValue;
    }
  }

  return result;
}

console.log(solution("XV"));
