// lv2 오픈채팅방

function solution(record) {
  var answer = [];
  let character = {};

  record.forEach((sen) => {
    let infor = sen.split(" ");
    if (infor[2]) {
      character[infor[1]] = infor[2];
    }
  });

  record.forEach((sen) => {
    let infor = sen.split(" ");
    if (infor[0] === "Enter") {
      answer.push(`${character[infor[1]]}님이 들어왔습니다.`);
    } else if (infor[0] === "Leave") {
      answer.push(`${character[infor[1]]}님이 나갔습니다.`);
    }
  });
  return answer;
}
