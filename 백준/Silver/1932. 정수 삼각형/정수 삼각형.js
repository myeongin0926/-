const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]); // 삼각형 높이

const pyramid = new Array(n).fill().map(() => []); // 입력 삼각형 값들과 dp 배열로 사용하기 위한 2차원 배열

// 피라미드 만들기
for (let i = 1; i <= n; i++) {
	const curRow = input[i].split(' ').map(Number);
	pyramid[i - 1].push(...curRow);
}

for (let i = 1; i < n; i++) {
	// 가로 변
	for (let j = 0; j < pyramid[i].length; j++) {
		// 단위 개수
		if (j === 0) {
			// 제일 왼쪽
			pyramid[i][j] = pyramid[i - 1][j] + pyramid[i][j];
		} else if (j === pyramid[i].length - 1) {
			// 제일 오른쪽
			pyramid[i][j] = pyramid[i - 1][j - 1] + pyramid[i][j];
		} else // 그 외 
			pyramid[i][j] =
				Math.max(pyramid[i - 1][j - 1], pyramid[i - 1][j]) + pyramid[i][j];
	}
}

console.log(Math.max(...pyramid[n - 1]));