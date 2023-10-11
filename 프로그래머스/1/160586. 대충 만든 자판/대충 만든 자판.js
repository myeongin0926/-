function solution(keymap, targets) {
    const minKeyTried = {}

    // 가장 적은 횟수로 알파벳 찾는 객체 생성
    keymap.forEach((key)=>{
        key.split('').map((str,idx)=>{
            if(minKeyTried[str] === undefined){
                minKeyTried[str] = idx + 1
            }
            else{
                minKeyTried[str] = Math.min(minKeyTried[str],idx+1)
            }
        })
    })

    // 각각의 target마다의 최소한의 숫자를 눌러 알파벳 만드는 값들 리턴 
    const answer = targets.map(target=>{
        let sum = 0
        let isSearch = true
        target.split('').forEach(str=>{
            if(minKeyTried[str] === undefined){
                isSearch = false
            }
            else{
                sum += minKeyTried[str]
            }
        })
        return isSearch ? sum : -1
    })

    return answer
}