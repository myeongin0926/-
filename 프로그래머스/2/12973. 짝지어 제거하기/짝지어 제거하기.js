function solution(s) {
    const stack = []
    
    s.split('').forEach(el => {
        if(stack.at(-1) === el) stack.pop()
        else stack.push(el)
    })
    
    return stack.length === 0 ? 1 : 0;
}