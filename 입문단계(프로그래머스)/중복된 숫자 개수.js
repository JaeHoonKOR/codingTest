function solution(array, n) {
  let answer = 0;
  const numberLimit = (num) => {
    return num >= 0 && num <= 1000;
  };

  if (
    array.length >= 1 &&
    array.length <= 100 &&
    array.every(numberLimit) &&
    n >= 0 &&
    n <= 1000
  ) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === n) {
        answer++;
      }
    }
  }

  return answer;
}
