function solution(slice, n) {
  let answer = 0;
  if (slice >= 2 && slice <= 10 && n >= 1 && n <= 100) {
    answer = Math.ceil(n / slice);
  }

  return answer;
}
