const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const N = +input.shift();
  const board = input.map((row) => row.split(" ").map(Number));
  // 아예 memo를 여유있게 넉넉하게 만들기
  const memo = Array.from({ length: N + 10 }, (_) =>
    Array.from({ length: N + 10 }, (_) => 0n),
  );
  // 최초의 방법의 수를 1로 초기화
  memo[1][1] = 1n;
  // memo 업데이트
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      const val = board[i - 1][j - 1];
      if (val) {
        memo[i][j + val] += BigInt(memo[i][j]);
        memo[i + val][j] += BigInt(memo[i][j]);
      }
    }
  }
  console.log(memo[N][N].toString());
});