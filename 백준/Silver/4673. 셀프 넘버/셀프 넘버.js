const range = new Set([]);
for (let i = 1; i <= 10000; i++) {
  range.add(i);
}

for (let i = 1; i <= 10000; i++) {
  checkSelf(i, range);
}

function checkSelf(n, range) {
  let sum = 0;
  for (let i = 0; i < String(n).length; i++) {
    sum += Number(String(n)[i]);
  }
  if (sum + n <= 10000) {
    range.delete(sum + n);
  }
}

console.log([...range].join("\n"));