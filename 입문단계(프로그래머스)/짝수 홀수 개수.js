function solution(num_list) {
  let answer = [];
  const arrValidation = (num) => {
    return num >= 0 && num <= 1000;
  };

  if (num_list.every(arrValidation)) {
    let binary = 0;
    num_list.forEach((e) => (e % 2 === 0 ? (binary += 1) : ""));
    answer = [binary, num_list.length - binary];
  }
  return answer;
}
