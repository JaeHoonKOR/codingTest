function solution(s1, s2) {
  let answer = 0;
  const lengthLimit = (arr) => {
    return arr.length >= 1 && arr.length <= 100;
  };

  const strLimit = (str) => {
    return str.length >= 1 && str.length <= 10;
  };

  if (
    lengthLimit(s1) &&
    lengthLimit(s2) &&
    s1.every(strLimit) &&
    s2.every(strLimit)
  ) {
    let similar = s2.filter((str) => s1.includes(str));
    answer = similar.length;
  }
  return answer;
}
