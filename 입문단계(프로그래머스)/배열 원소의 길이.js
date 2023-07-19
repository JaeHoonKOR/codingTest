function solution(strlist) {
  let answer = [];
  const arrValidation = (str) => {
    return str.length >= 0 && str.length <= 100;
  };
  if (strlist.every(arrValidation)) {
    answer = strlist.reduce((acc, cur) => {
      acc.push(cur.length);
      return acc;
    }, []);
  }

  return answer;
}
