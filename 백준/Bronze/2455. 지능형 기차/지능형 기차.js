let fs = require("fs");
let input = fs.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((el) => el.split(" ").map((el) => Number(el)));

let result = [];

for (let i = 0; i < input.length; i++) {
	if (result.length === 0) {
		result.push(input[i][1]);
	} else {
		result.push(result[result.length - 1] - input[i][0] + input[i][1]);
	}
}

console.log(Math.max(...result));