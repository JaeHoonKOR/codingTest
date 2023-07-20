function solution(money) {
  let answer = [];
  if (money > 0 && money <= 1000000) {
    answer = [Math.floor(money / 5500), money % 5500];
  }
  return answer;
}
