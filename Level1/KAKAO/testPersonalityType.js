// 2022 kakao tech internship 성격 유형 검사하기
function solution(survey, choices) {
  let dic = {
    A: 0,
    N: 0,
    C: 0,
    F: 0,
    R: 0,
    T: 0,
    J: 0,
    M: 0,
  };
  let answer = [];
  choices.forEach((num, idx) => {
    if (num === 1) {
      dic[survey[idx][0]] += 3;
    } else if (num === 2) {
      dic[survey[idx][0]] += 2;
    } else if (num === 3) {
      dic[survey[idx][0]] += 1;
    } else if (num === 5) {
      dic[survey[idx][1]] += 1;
    } else if (num === 6) {
      dic[survey[idx][1]] += 2;
    } else if (num === 7) {
      dic[survey[idx][1]] += 3;
    }
  });
  dic["T"] > dic["R"] ? answer.push("T") : answer.push("R");
  dic["F"] > dic["C"] ? answer.push("F") : answer.push("C");
  dic["M"] > dic["J"] ? answer.push("M") : answer.push("J");
  dic["N"] > dic["A"] ? answer.push("N") : answer.push("A");
  return answer.join("");
}
