function solution(box, n) {
  let answer = 0;
  const boxLength = (length) => {
    return length >= 1 && length <= 100 && n <= length;
  };

  if (box.every(boxLength) && n >= 1 && n <= 50) {
    answer =
      Math.floor(box[2] / n) * Math.floor(box[1] / n) * Math.floor(box[0] / n);
  }
  return answer;
}
