// lv2 괄호 회전하기

function solution(s) {
  let ans = 0;
  let sLen = s.length;
  let sArr = [...s];

  for (let i = 0; i < sLen; i++) {
    // 잘못되었는지 여부를 따지는 변수
    let isWrong = false;
    // 왼쪽 괄호 확인용 스택
    let prevG = [];
    // 왼쪽/오른쪽 괄호 갯수 변수
    let leftC = 0;
    let rightC = 0;

    for (let j = 0; j < sLen; j++) {
      if (sArr[j] === "[" || sArr[j] === "(" || sArr[j] === "{") {
        leftC += 1;
        prevG.push(sArr[j]);
      } else {
        rightC += 1;
        // 오른쪽 괄호일 시, 짝이 맞는지 여부 확인
        if (prevG[prevG.length - 1] === "[" && sArr[j] !== "]") {
          isWrong = true;
          break;
        } else if (prevG[prevG.length - 1] === "(" && sArr[j] !== ")") {
          isWrong = true;
          break;
        } else if (prevG[prevG.length - 1] === "{" && sArr[j] !== "}") {
          isWrong = true;
          break;
        }
        // 그 다음 왼쪽 괄호가 나올 수 있도록 pop
        prevG.pop();
      }
      // 오른쪽 갯수가 크면 무조건 break
      if (rightC > leftC) break;
    }
    // 최종적으로 개수가 같고 잘못된 경우가 없을 시 답 +1
    if (leftC === rightC && !isWrong) ans += 1;

    //회전 수행
    let change = sArr[0];
    sArr.splice(0, 1);
    sArr.push(change);
  }
  return ans;
}
