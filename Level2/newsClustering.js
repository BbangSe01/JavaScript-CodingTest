// lv2 뉴스 클러스터링

function solution(str1, str2) {
  // 1. str1과 str2를 분리한 배열 각각 생성
  // 2. 교집합 개수, 합집합 개수 구함
  // 3. 자카드 유사도 계산

  var answer = 0;
  var pattern_eng = /[a-zA-Z]/; // 문자

  let s1Arr = [...str1]
    .map((each, idx) => {
      let retS1;
      if (pattern_eng.test(each) && pattern_eng.test(str1[idx + 1])) {
        retS1 = each + str1[idx + 1];
        // 대문자로 통일
        return retS1.toUpperCase();
      }
    })
    .filter((each) => typeof each === "string" && !each.includes("UNDEFINED"));
  let s2Arr = [...str2]
    .map((each, idx) => {
      let retS2;
      if (pattern_eng.test(each) && pattern_eng.test(str2[idx + 1])) {
        retS2 = each + str2[idx + 1];
        // 대문자로 통일
        return retS2.toUpperCase();
      }
    })
    .filter((each) => typeof each === "string" && !each.includes("UNDEFINED"));

  if (s1Arr.length === 0 && s2Arr.length === 0) return 65536;
  // 교집합 개수
  let intersection = 0;

  // 합집합 개수
  let union = 0;

  // 요소들의 개수를 파악하기 위해 dict 활용
  let s1Dict = {};
  let s2Dict = {};

  s1Arr.forEach((s1) => {
    s1Dict[s1] ? (s1Dict[s1] += 1) : (s1Dict[s1] = 1);
  });
  s2Arr.forEach((s2) => {
    s2Dict[s2] ? (s2Dict[s2] += 1) : (s2Dict[s2] = 1);
  });

  // 교집합 계산_두 딕셔너리에 같은 key를 넣었을 때 값이 있다면 둘 중 최소값만 추가
  for (let key in s1Dict) {
    if (s2Dict[key]) {
      intersection += Math.min(s1Dict[key], s2Dict[key]);
    }
  }

  // 합집합 계산_s1과 s2가 같은 key를 가질 경우 최대값을 뽑고 s2 제거해서 s2를 돌 때 중복 방지
  for (let key in s1Dict) {
    if (s1Dict[key] && s2Dict[key]) {
      union = union + Math.max(s1Dict[key], s2Dict[key]);
      delete s2Dict[key];
    } else {
      union += s1Dict[key];
    }
  }

  for (let key in s2Dict) {
    union += s2Dict[key];
  }

  return Math.floor(65536 * (intersection / union));
}
