function solution(sizes) {
   const max = Math.max(...sizes.map(el => Math.max(...el)))
   const min = Math.max(...sizes.map(el => Math.min(...el)))
   return max * min
    
}