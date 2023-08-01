function solution(array) {
  let answer = 0;
  const numberLimit = (num) => {
    return num >= -1000 && num <= 1000;
  };

  if (array.length >= 0 && array.length < 100) {
    let sorted = array.sort((a, b) => {
      return a - b;
    });
    answer = sorted[Math.floor(sorted.length / 2)];
  }
  return answer;
}
