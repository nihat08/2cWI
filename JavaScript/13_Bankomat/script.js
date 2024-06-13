import { log } from "console";
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
let balance = 0;
while (true) {
  console.log("1 = Einzahlen, 2 = Abheben, 3 = Kontostand");
  console.log("balance:" + balance + " €");

  let select1 = await readLineAsync();
  if (select1 == 1) {
    console.log("Wie viel möchten Sie einzahlen?");
    let amount = await readLineAsync();
    balance += parseInt(amount);
    console.log("Sie haben" + amount + " € eingezahlt");
  }

  if (select1 == 2) {
    console.log("Wie viel möchten Sie abheben?");
    let amount = await readLineAsync();
    balance -= parseInt(amount);
    console.log("Sie haben" + amount + " € abgehoben");
  }

  if (select1 == 3) {
    console.log("Sie haben" + balance + " € auf dem Konto");
  }
}

let age = await readLineAsync();
console.log(age);

readLine.close();
