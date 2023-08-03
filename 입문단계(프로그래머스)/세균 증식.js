function solution(n, t) {
  let answer = n;
  if (n >= 1 && (n <= 10) & (n >= 1) && n <= 15) {
    while (t > 0) {
      answer *= 2;
      t--;
    }
  }
  return answer;
}
