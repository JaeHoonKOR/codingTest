function solution(n) {
  let answer = 0;
  let stringNum = n.toString();
  if (n >= 0 && n <= 1000000) {
    for (let i = 0; i < stringNum.length; i++) {
      answer += Number(stringNum[i]);
    }
  }
  return answer;
}
