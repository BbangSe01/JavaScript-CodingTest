// 고득점 kit 정렬_H_Index

function solution(citations) {
  var answer = 0;
  // 내림차순으로 정렬.
  citations.sort((a, b) => b - a);

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] < i + 1) {
      // i + 1개 이상의 논문이 h번 이상 인용되지 못하는 순간
      return i; // 그 이전까지가 H-Index
    }
  }
  return answer;
}
