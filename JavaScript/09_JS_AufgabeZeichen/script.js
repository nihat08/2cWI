//Erstelle mit Hilfe einer Schleife und Modulo das folgende Ausgabe liefert (Rechteckbeispiel adaptieren): 
//X X X X 
//O O O O 
//X X X X 
//O O O O 

let a = 2;
let result = a % 3;
let output = "";
let isX = true;

for (let i = 0; i < 100; i++) {
    if (isX) {
        output += "x";
    }    else {
        output += "o";
    }
}
//2. Versuche in einer for - Schleife (1-100) alle geraden Zahlen zu addieren (zwei Lösungswege ⇒ Zähler dahingehend verändern das er nur gerade Zahlen zählt und mit Modulo arbeiten.) 

//3. Versuche mit einer for/while Schleife den Anfangsbuchstaben deines Namens auszugeben, z.B.: 
//XX X XX X 
//X    X X   X 
//X            X
//X            X
