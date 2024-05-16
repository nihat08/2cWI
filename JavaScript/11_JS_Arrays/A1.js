let DNA = [
  "A",
  "T",
  "G",
  "C",
  "T",
  "T",
  "C",
  "A",
  "G",
  "A",
  "A",
  "A",
  "A",
  "G",
  "G",
  "T",
  "C",
  "A",
  "G",
  "C",
  "G",
];

let word = "G";
function countDNA(word, DNA) {
  let count = 0;
  for (let i = 0; i < DNA.length; i++) {
    if (DNA[i] === word) {
      count++;
    }
  }
  return count;
}

console.log(countDNA(word, DNA));
