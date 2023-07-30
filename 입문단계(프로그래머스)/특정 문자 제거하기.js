function solution(my_string, letter) {
  let answer = "";
  const regex = new RegExp(letter, "g");
  if (my_string.length >= 1 && my_string.length <= 100) {
    answer = my_string.replace(regex, "");
  }
  return answer;
}
