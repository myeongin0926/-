function solution(board, moves) {
    var answer = 0;
    const newBoard = []
    const stack = []
    
    for(let i = 0; i < board.length; i++) {
        const arr = []
        for(let j = 0; j < board[i].length; j++) { 
            if(board[j][i] !== 0) arr.push(board[j][i])
        }
        newBoard.push(arr)
    }
    
    for(let i = 0; i < moves.length; i++) {
       const doll = newBoard[moves[i] - 1].shift()
       if(doll === undefined) continue
       if(doll === stack.at(-1)) {
           stack.pop()
           answer += 2
       } else if (doll !== stack.at(-1)) stack.push(doll)
       
    }
    return answer;

} 