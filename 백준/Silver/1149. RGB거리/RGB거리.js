var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
 
// 입력값을 2중 배열로 저장해놓는다.
var numberOfHouses = parseInt(input[0]);
const costsForPainting = []
for(let i = 1; i <= numberOfHouses; i++) {
  costsForPainting.push(input[i].split(" ").map(el => parseInt(el)))
}
 
// 최솟값을 이용하여 계산하는 부분이 많이 때문에 최솟값을 구하는 함수를 미리 짜둔다
function min(list) {
  let min
  for(const num of list) {
    if(!min) {
      min = num
      continue
    }
    if(num < min) min = num
  }
  return min
}
 
// 그림에서 설명한것과 같이 2중 list를 만들어야 한다.
const minCostForPainting = []
for(let i = 0; i < numberOfHouses; i++) {
  // 첫번째 집에 경우 기존 입력값을 그대로 사용한다.
  if(i === 0) {
    minCostForPainting.push(costsForPainting[0])
    continue
  }
 
  // 현재 집(i)를 생상별로 칠할때의 최소 비용을 구한다.
  // 현재 집을 Red로 칠하는 경우 = 현재집을 red로 칠하는 비용 + 이전집을 green blue로 칠할때 비용 중 최소값.
  const currentHouseRedCost = costsForPainting[i][0] + min([minCostForPainting[i-1][1], minCostForPainting[i-1][2]])
  const currentHouseGreenCost = costsForPainting[i][1] + min([minCostForPainting[i-1][0], minCostForPainting[i-1][2]])
  const currentHouseBlueCost = costsForPainting[i][2] + min([minCostForPainting[i-1][0], minCostForPainting[i-1][1]])
 
  const currentMinCost = [currentHouseRedCost, currentHouseGreenCost, currentHouseBlueCost]
  minCostForPainting.push(currentMinCost)
}
console.log(min(minCostForPainting[minCostForPainting.length - 1]))
