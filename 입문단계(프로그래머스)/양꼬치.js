function solution(n, k) {
  let answer = 0;
  if (n > 0 && n < 1000 && k >= Math.floor(n / 10) && k < 1000) {
    answer = n * 12000 + k * 2000;
  }
  answer -= Math.floor(n / 10) * 2000;
  return answer;
}
