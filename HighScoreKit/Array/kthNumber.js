// 고득점 kit 정렬_k번째 수

function solution(array, commands) {
  let ans = commands.map((arr) => {
    // sort 메서드 사용 시, 숫자배열 정렬 방식에 맞게 두개의 인자 전달
    return array.slice(arr[0] - 1, arr[1]).sort((a, b) => a - b)[arr[2] - 1];
  });
  return ans;
}
