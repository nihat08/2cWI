import { createInterface } from "readline";

const readLine = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readLineAsync = () => {
  return new Promise((resolve) => {
    readLine.question("", (userRes) => {
      resolve(userRes);
    });
  });
};

let TTT = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
//printTTT();
TTT[0][1] = 1;

//endloser loop damit dieses zeichen nicht mehr kommt: ">"
while (notfinished) {
  let input = await readLineAsync();
  console.log("input", input);
  printTTT();
}

function printTTT() {
  for (let row = 0; row < TTT.length; row++) {
    let actualRow = TTT[row];
    let output = "";
    for (let col = 0; col < actualRow.length; col++) {
      let sign = " ";
      if (actualRow[col] == 1) {
        sign = "X";
      } else if (actualRow[col] == 2) {
        sign = "O";
      }
      output += sign + " | ";
    }
    console.log(output);
  }
}
