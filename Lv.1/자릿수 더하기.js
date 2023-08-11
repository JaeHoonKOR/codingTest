function solution(n) {
  let answer = 0;
  let length = n.toString().length;
  for (let i = 0; i < length; i++) {
    answer += Number(n.toString()[i]);
  }

  return answer;
}
