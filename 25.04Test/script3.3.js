const temperaturesWeek1 = ["-1,5,1,-10,-11,2,30,-8,-14"];
let Week1 = temperaturesWeek1[0].split(",");
Week1 = Week1.map(Number);
console.log("s" + Week1);
const sum1 = Week1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log("Summe 1 = " + sum1);

const temperaturesWeek2 = ["-1,5,1,-10,-11,2,30,-8,-44"];
let Week2 = temperaturesWeek2[0].split(",");
Week2 = Week2.map(Number);
const sum2 = Week2.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log("Summe 2 = " + sum2);

console.log("Mittelwert 1 = " + sum1 / 9);
console.log("Mittelwert 2 = " + sum2 / 9);
console.log("Woche 1 war wärmer als Woche 2");
