function solution(number) {
  // convert the number to a roman numeral
  const romanMap = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let romanNumeral = "";

  for (let x in romanMap) {
    while (number >= romanMap[x]) {
      romanNumeral += x;
      number -= romanMap[x];
    }
  }

  return romanNumeral;
}

console.log(solution(1984));
