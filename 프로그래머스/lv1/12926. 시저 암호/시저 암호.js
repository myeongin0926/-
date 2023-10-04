function solution(s, n) {
    const lower_str = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
    const upper_str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return s.split('').map(el => {
        if(!(el.trim())) return ' '
        else if(el === el.toLowerCase()) return lower_str[lower_str.indexOf(el) + n]
        else if(el === el.toUpperCase()) return upper_str[upper_str.indexOf(el) + n]
    }).join('')
}