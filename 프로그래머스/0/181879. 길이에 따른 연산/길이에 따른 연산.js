function solution(num_list) {
    let result = num_list[0];
    
    for ( let i = 1; i < num_list.length; i++) {
        if(num_list.length >=11) result += num_list[i];
        else result *= num_list[i]
    }
    console.log(result)
    return result
}