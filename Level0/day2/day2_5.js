function solution(my_string, overwrite_string, s) {
  var answer = "";
  let ovCount = 0;
  // check 변수를 두어 overwrite만큼 수정 완료했는지 판단
  let ovCheck = false;

  for (let i = 0; i < my_string.length; i++) {
    if (i < s || ovCheck === true) {
      answer += my_string[i];
    } else {
      answer += overwrite_string[i - s];
      if (i - s === overwrite_string.length - 1) {
        ovCheck = true;
      }
    }
  }
  return answer;
}
