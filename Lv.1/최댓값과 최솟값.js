function solution(s) {
  let answer = "";
  let array = s.split(" ");
  const numberArray = array.map((item) => Number(item));
  let sorted = numberArray.sort((a, b) => {
    return a - b;
  });
  answer = sorted[0].toString() + " " + sorted[sorted.length - 1].toString();
  return answer;
}
