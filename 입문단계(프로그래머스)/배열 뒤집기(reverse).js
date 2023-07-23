function solution(num_list) {
  let answer = [];
  const numberLimit = (num) => {
    return num >= 0 && num <= 1000;
  };
  if (
    num_list.length >= 1 &&
    num_list.length <= 1000 &&
    num_list.every(numberLimit)
  ) {
    answer = num_list.reverse();
  }
  return answer;
}

/**
 function solution(num_list) {
    let answer = [];
    const numberLimit = (num) => {
    return num >= 0 && num <= 1000;
  };
    if(num_list.length>=1 && num_list.length<=1000 && num_list.every(numberLimit)){
       for(let i = 0; i<num_list.length;i++){
           answer[i]=num_list[num_list.length-i-1];
       }
    }
    return answer;
}
 */
