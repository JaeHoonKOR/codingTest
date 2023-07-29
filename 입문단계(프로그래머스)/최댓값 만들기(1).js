function solution(numbers) {
  let answer = 0;
  const numberLimit = (number) => {
    return number >= 0 && number <= 10000;
  };
  const lengthLimit = (arr) => {
    return arr.length >= 2 && arr.length <= 100;
  };
  if (numbers.every(numberLimit) && lengthLimit(numbers)) {
    let sorted = numbers.sort((a, b) => {
      return a - b;
    });
    answer = sorted[sorted.length - 1] * sorted[sorted.length - 2];
  }
  return answer;
}
