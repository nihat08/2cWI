// Erstelle zwei Zufallszahl zwischen 0 und 100
let random1 = Math.random() *101;
let random2 = Math.random() *101;
console.log(random1);
console.log(random2);
// Speichere diese jeweils in einer Variable

// Wenn die erste Zahl kleiner ist als die zweite UND die erste Zahl kleiner ist als 50
// dann gib aus "Zahl 1 ist kleiner als Zahl 2 und Mini"
if (random1<random2 && random1<50){
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini");
}
// Wenn die erste Zahl kleiner ist als 30 oder die zweite Zahl kleiner ist als 30
// dann gib aus "Eine der beiden ist kleiner als 30"
else if (random1<30 || random2<30){
    console.log("Eine der beiden ist kleiner als 30");
}
// Wenn die erste Zahl kleiner ist als 50 UND die zweite Zahl ungleich 50 ist
// dann gib aus "Erste Zahl klein, zweite kein 50iger"
else if (random1<50 && random2!==50){
    console.log("Erste Zahl klein, zweite kein 50iger");
}
