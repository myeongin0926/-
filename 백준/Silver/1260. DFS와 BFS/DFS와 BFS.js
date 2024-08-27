// 인풋값 입력받기
let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M, V] = input.shift().split(" ").map(Number);

const line = input.map((v) => v.split(" ").map(Number));

const ansDfs = [];

const ansBfs = [];

const graph = Array.from({ length: N + 1 }, () => []);

let visited = Array.from({ length: N + 1 }, () => 0);

const queue = [];

// 인접리스트 만들기
for (let [from, to] of line) {
  graph[from].push(to);
  graph[to].push(from); 
 // [1,2] 일 경우 1[2] 2[1] 두 가지 경우가 나온다.
}

for (let i = 1; i < graph.length; i++) {
  graph[i].sort((a, b) => a - b); 
 // 정점 번호가 작은 것을 먼저 방문하기 때문에 오름차순으로 정렬한다.
}

function dfs(cnt) {
  if (ansDfs.length === N) return; 
  // 최대 방문 정점 수는 최대 정점 번호보다 같거나 적어야 한다.
  ansDfs.push(cnt);
  visited[cnt] = 1;
  for (let next of graph[cnt]) {
    if (!visited[next]) {
      visited[next] = 1;
      dfs(next);
    }
  }
}

dfs(V);

visited = visited.map(() => 0);
// 방문한 정점 배열 초기화

function bfs() {
  queue.push(V);
  visited[V] = 1;
  while (queue.length !== 0) {
    const now = queue.shift();
    ansBfs.push(now);
    for (let next of graph[now]) {
      if (!visited[next]) {
        queue.push(next);
        visited[next] = 1;
      }
    }
  }
}

bfs();

console.log(ansDfs.join(" "));
console.log(ansBfs.join(" "));