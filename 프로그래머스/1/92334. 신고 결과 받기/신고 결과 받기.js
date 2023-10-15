function solution(id_list, report, k) {
    const obj = {}
    
    id_list.forEach(el => obj[el] = {re : [] , count : 0 , mail : 0})
    report.forEach(el => {
        const [reporter, reported] = el.split(' ')
        const user = obj[reporter]
        if(!user.re.includes(reported)) { 
            user.re.push(reported)
            obj[reported].count++
        }
    })
    
    const reportUser = []
    
    for(let key in obj) obj[key].count >= k && reportUser.push(key)
    
    const answer = []
    for(let key in obj) {
        answer.push(obj[key].re.filter(el => reportUser.includes(el)).length)
    }
    return answer
}