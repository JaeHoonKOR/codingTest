function solution(numbers) {
  let answer = 0;
  const arrValidation = (number) => {
    return number >= 0 && number <= 1000;
  };
  if (numbers.length >= 0 && numbers.length <= 100) {
    if (numbers.every(arrValidation)) {
      answer =
        numbers.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0
        ) / numbers.length;
    }
  }
  return answer;
}
