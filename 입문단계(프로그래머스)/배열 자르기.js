function solution(numbers, num1, num2) {
  let answer = [];
  const numberLimit = (num) => {
    return num >= 0 && num <= 1000;
  };
  if (
    numbers.length >= 2 &&
    numbers.length <= 1000 &&
    numbers.every(numberLimit) &&
    numbers.length > num2 &&
    num2 > num1
  ) {
    answer = numbers.slice(num1, num2 + 1);
  }
  return answer;
}
