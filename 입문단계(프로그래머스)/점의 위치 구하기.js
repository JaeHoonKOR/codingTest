function solution(dot) {
  const [x, y] = dot;

  const quadrantMap = {
    1: x > 0 && y > 0,
    2: x < 0 && y > 0,
    3: x < 0 && y < 0,
    4: x > 0 && y < 0,
  };

  for (const quadrant in quadrantMap) {
    if (quadrantMap[quadrant]) {
      return Number(quadrant);
    }
  }

  return 0;
}
