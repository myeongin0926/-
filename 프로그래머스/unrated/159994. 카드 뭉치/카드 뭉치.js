function solution(cards1, cards2, goal) {
    var answer = '';
    const last_index = {cards1 : 0 , cards2 : 0};
    for(let i = 0; i<goal.length; i++) {
       const el = goal[i]
       if(cards1[last_index.cards1] === el) last_index.cards1++
       else if(cards2[last_index.cards2] === el) last_index.cards2++
       else return "No"
    }
    return "Yes"
}