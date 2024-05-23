let result = 0;
let data = "4,9,-3,-9,-5,10,2,1,14";
let array = data.split(",");
let output = "";
let sum = 0;
let amount = 0;

for (let i = 0; i < array.length; i++) {
  let number = parseInt(array[i]);
  if (number > 0) {
    console.log(number);
    sum = sum + number;
    amount++;
  }
}

let average = sum / amount;
console.log(average);

// let number = 3
// if (number%3==0) {
//}
