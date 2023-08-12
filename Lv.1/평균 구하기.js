function solution(arr) {
  let answer =
    arr.reduce((a, b) => {
      return a + b;
    }, 0) / arr.length;

  return answer;
}
