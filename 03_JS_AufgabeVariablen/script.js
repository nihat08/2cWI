// Erstelle eine Variable banana mit dem Wert "Banane"
let b = "banana"
// Erstelle eine Variable apple mit dem Wert "Apple"
let a = "apple"
// Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14
let bananaPricePerKilo = 2.14;
// Erstelle eine Variable applePricePerKilo mit dem Wert 3.43
let applePricePerKilo = 3.43;
// Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo
let applekg = 1/0.34;
// Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo
let bananakg = 1/0.22;
// Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, Preis pro Banane/Apfel

console.log("Anzahl Bananen pro Kilo " + 1 / bananakg);
console.log("Anzahl Aepfel pro Kilo " + 1 / applekg);

console.log("Preis pro Banane " + (bananaPricePerKilo/bananakg) *1);
console.log("Preis pro Apfel " + (applePricePerKilo/applekg)*1);

// Preis von 8 Äpfeln
console.log("Preis von 8 Aepfeln " + (applePricePerKilo/applekg)*8);
// Preis von 17 Bananen
console.log("Preis von 17 Bananen " + (bananaPricePerKilo/bananakg)*17);
// Preis von 1 Tonne Äpfel
console.log("Preis von 1 Tonne Aepfel " + 1000 * applePricePerKilo);
// Preis von 1 Tonne Bananen
console.log("Preis von 1 Tonne Bananen " + 1000 * bananaPricePerKilo);