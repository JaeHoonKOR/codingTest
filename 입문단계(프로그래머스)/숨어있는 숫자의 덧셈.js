function solution(my_string) {
  let answer = 0;
  if (my_string.length > 1 && my_string.length <= 1000) {
    for (let i = 0; i < my_string.length; i++) {
      if (!isNaN(my_string[i])) {
        answer += Number(my_string[i]);
      }
    }
  }
  return answer;
}
