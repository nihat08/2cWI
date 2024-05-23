let data3 = "Das Leben ist schön";
let array = data3.split("");
let count = 0;

console.log(array);

for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
  let letter = array[index];
  if (letter == "a" || letter == "e" || letter == "ö") {
    count++;
  }
}

console.log("Anzahl a, e und ö = " + count);
