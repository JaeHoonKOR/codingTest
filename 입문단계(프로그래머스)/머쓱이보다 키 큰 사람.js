function solution(array, height) {
  let answer = 0;
  const arrValidation = (h) => {
    return h >= 1 && h <= 200;
  };

  if (
    array.every(arrValidation) &&
    array.length >= 1 &&
    array.length <= 200 &&
    height >= 1 &&
    height <= 200
  ) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > height) {
        answer++;
      }
    }
  }
  return answer;
}
