const str = "abcde";
const ending = "cde";

function solution(str, ending) {
  // TODO: complete
  if (str.endsWith(ending)) return true;

  return false;
}

const result = solution("abcde", "cde");
const result2 = solution("abcde", "abc");
console.log(result);
console.log(result2);
