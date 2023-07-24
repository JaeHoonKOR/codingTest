function solution(message) {
  let answer = 0;
  if (message.length >= 1 && message.length <= 50) {
    answer = message.length * 2;
  }
  return answer;
}
