function solution(new_id) {
    var answer = '';
    const possible = 'abcdefghijklmnopqrstuvwxyz.-_0123456789'
    
    let newId = new_id.toLowerCase().split('')
    console.log(newId.join(''))
    newId = newId.filter(el => possible.includes(el));
    console.log(newId.join(''))
    newId = newId.filter((el, idx, arr) => el !== '.' || arr[idx - 1] !== '.');
    if(newId[0] === '.') newId.splice(0,1)
    if(newId[newId.length - 1] === '.') newId.splice(newId.length - 1)
    console.log(newId.join(''))
    if(newId.length === 0) newId = ['a']
    
    if(newId.length > 15) newId.splice(15)
    console.log(newId.join(''))
    if(newId.length < 3) newId = [...newId , ...newId[newId.length - 1].repeat(3 - newId.length) ]
    if(newId[0] === '.') newId.splice(0,1)
    if(newId[newId.length - 1] === '.') newId.splice(newId.length - 1)
    console.log(newId.join(''))
     return newId.join('')
}
