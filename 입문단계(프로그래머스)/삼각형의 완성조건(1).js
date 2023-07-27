function solution(sides) {
  let answer = 0;
  const sideLimit = (side) => {
    return side >= 1 && side <= 1000;
  };
  if (sides.every(sideLimit)) {
    let sorted = sides.sort((a, b) => {
      return a - b;
    });
    sorted[2] < sorted[0] + sorted[1] ? (answer = 1) : (answer = 2);
  }

  return answer;
}
