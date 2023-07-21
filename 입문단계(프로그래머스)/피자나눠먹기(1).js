function solution(n) {
  let answer = 0;
  if (n >= 1 && n <= 100) {
    while (n / 7 > 0) {
      answer++;
      n -= 7;
    }
  }
  return answer;
}
