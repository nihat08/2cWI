let array = ["Hans geht heute schwimmen! Das ist gut"];
let words = array[0].split(" ");

for (let i = 0; i < words.length; i += 3) {
  console.log(words[i]);
}
