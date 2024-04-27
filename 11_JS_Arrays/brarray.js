let names = ["Hans", "Franz", "Peter"];

//sortiert alphabetisch
//names.sort();

//names.sort().reverse();

//zählt den ganzen array durch
//wenn plus 2 => "i+=2"
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//fürs zürückzählen also nicht 0,1,2,3 sondern 3,2,1,0
for (let irev = names.length - 1; irev >= 0; irev--) {
  console.log(names[irev]);
}

//hängt sich ans ende
//names.push("Rudi");

//löscht den letzen namen
//names.pop();

//hängt sich an den anfang
//names.unshift("Luis");

//löscht den ersten namen
//names.shift();

//let NumberOfNames = names.length;

//zeigt an welcher stelle das gesuchte ist
//let index = names.indexOf("Franz");
