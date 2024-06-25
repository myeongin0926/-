function solution(a, b, g, s, w, t) {
  // 최단 시간을 구하기 위해 초기값을 무한으로 설정
  let result = Infinity;

  // 도시의 개수
  const cityLength = g.length;

  // 이진탐색 기준점 설정
  let start = 1;
  let end = 10 ** 15; // 가능한 큰 수로 지정

  // 이진탐색 시작
  while (start < end) {
    // 중간 값 설정
    const mid = Math.floor((start + end) / 2);

    // 총 싣은 금
    let gold = 0;
    // 총 싣은 은
    let silver = 0;
    // 총 싣은 광물양
    let totalWeight = 0;

    // 각 도시를 순회
    for (let i = 0; i < cityLength; i++) {
      // 건설 도시와의 왕복 거리
      const roundTripDistance = t[i] * 2;
      // 미드 시간만큼 왕복하고 나서 남은 시간동안 편도 운행이 가능한지 체크
      const isCanOneWay = mid % roundTripDistance >= t[i];
      // 왕복 가능 횟수 동안 싣을 수 있는 적재량 무게
      let maxWeight = Math.floor(mid / roundTripDistance) * w[i];
      // 만약 편도 운행이 가능하다면, 한 번 싣어나를 수 있는 적재 무게를 추가한다
      if (isCanOneWay) maxWeight += w[i];

      // 현재 도시에 존재하는 금과 총 싣을 수 있는 적재량중 더 적은양을 적재량에 삽입
      gold += Math.min(g[i], maxWeight);
      // 현재 도시에 존재하는 은과 총 싣을 수 있는 적재량중 더 적은양을 적재량에 삽입
      silver += Math.min(s[i], maxWeight);
      // 현재 도시에 존재하는 모든 광물과 총 싣을 수 있는 적재량중 더 적은양을 적재량에 삽입
      // 두 개의 광물을 동시에 적재할 수 있기에 예외사항을 처리하기 위한 작업
      totalWeight += Math.min(g[i] + s[i], maxWeight);
    }

    // 원하는 금보다 싣은 금이 같거나 많다면
    // 원하는 은보다 싣은 은이 같거나 많다면
    // 원하는 광물 총 양보다 싣은 광물 총 양이 같거나 많다면
    // 주어진 시간 내에 모두 싣을 수 있기 때문에 탐색 범위를 좁혀서 다시 탐색
    if (gold >= a && silver >= b && totalWeight >= a + b) {
      end = mid;
      result = Math.min(result, mid);
    } else {
      // 주어진 시간 내에 모두 싣을 수 없기 때문에 탐색 범위를 넓혀서 다시 탐색
      start = mid + 1;
    }
  }

  return result;
}
