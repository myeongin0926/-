function solution(arr) {
  const min = Math.min(...arr)
  const newArr = arr.filter(el => el !== min)
  return newArr.length ? newArr : [-1]
}