function solution(arr) {
  const newArr = []
  return arr.filter((el,i) => el !== arr[i-1])
}