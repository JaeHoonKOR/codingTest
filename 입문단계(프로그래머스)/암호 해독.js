function solution(cipher, code) {
  let answer = "";
  if (
    cipher.length >= 1 &&
    cipher.length <= 1000 &&
    code >= 1 &&
    code <= cipher.length
  ) {
    for (let i = 1; i <= cipher.length / code; i++) {
      answer += cipher[code * i - 1];
    }
  }
  return answer;
}
