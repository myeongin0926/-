function solution(participant, completion) {
  const obj = { paricipant: {}, completion: {} };
  participant.forEach(
    (el, idx) => (obj.paricipant[el] = obj.paricipant[el] ? obj.paricipant[el] + 1 : 1)
  );
  completion.forEach(
    (el, idx) => (obj.completion[el] = obj.completion[el] ? obj.completion[el] + 1 : 1)
  );

  for (let key in obj.paricipant) {
    if (obj.paricipant[key] !== obj.completion[key]) return key;
  }
}