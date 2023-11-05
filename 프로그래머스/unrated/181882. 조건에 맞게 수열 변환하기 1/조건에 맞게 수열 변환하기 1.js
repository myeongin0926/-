function solution(arr) {
    const newArr = []
    
    for(let i= 0; i < arr.length; i++) {
        if(arr[i] >= 50 && arr[i] % 2 === 0 ) newArr.push(arr[i] / 2) 
        else if(arr[i] <= 50 && arr[i] % 2 !== 0 ) newArr.push(arr[i] * 2) 
        else newArr.push(arr[i])
    }
    return newArr
}