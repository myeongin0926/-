function solution(arr1, arr2) {
  return arr1.map((arr , idx) => arr.map((el,i) => el + arr2[idx][i]))
}