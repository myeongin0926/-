function solution(today, terms, privacies) {
    var answer = [];
    const type = {}
    today = today.split('.').map(Number).join('.')
    for(let i = 0; i<terms.length; i++) {
        const [typ,num] = terms[i].split(' ')
        type[typ] = +num
    }
    
    for(let i = 0; i < privacies.length; i++) {
        const el = privacies[i].slice(0,10)
        const typ = privacies[i].slice(-1)
        let [ year,month,day ] = el.split('.').map(Number)
        const [todayYear, todayMonth, todayDay] = today.split('.').map(Number)
        if(day === 1) {
            day = 28
            month = month - 1
            if(month === 0) {
                year--
                month = 12
            }
        } else day--
        
         month = month + type[typ] 
         while(month > 12) {
            month -= 12;
            year++ 
         }
         if(todayYear > year) answer.push(i + 1)
         else if(todayYear === year && todayMonth > month) answer.push(i + 1)
         else if(todayYear === year && todayMonth === month && todayDay > day) answer.push(i + 1)

    }
    return answer
}