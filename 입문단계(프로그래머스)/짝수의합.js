function solution(n) {
  let answer = 0;
  if (n > 0 && n <= 1000) {
    for (let i = 0; i <= n; i += 2) {
      answer += i;
    }
  }
  return answer;
}
