function solution(n) {
  let answer = 0;
  if (n >= 1 && n <= 1000000) {
    for (let i = 1; i <= n; i++) {
      if (Number.isInteger(n / i)) {
        answer++;
      }
    }
  }
  return answer;
}
