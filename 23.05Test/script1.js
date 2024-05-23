let data1 = "4,9,-3,-9,-5,10,2,1,14";
let array = data1.split(",");
array = array.map(Number);
let amount = 0;
let sum = 0;

for (let i = 0; i < array.length; i++) {
  let number = parseInt(array[i]);
  if (number > 0 && number % 2 === 0) {
    console.log(number);
    sum = sum + number;
    amount++;
  }
}

console.log("Summe = " + sum);
console.log("Amount = " + amount);

let average = sum / amount;
console.log("Avg = " + average);
