import { log } from "console";
import {createInterface} from "readline";

const readLine = createInterface({
    input: process.stdin,
    output: process.stdout,
});

const readLineAsync =() => {
    return new Promise((resolve) => {
       readLine.question("", (userRes) => { 
        resolve(userRes);
        });
    });
};

while(true){
    
    console.log("Wie viel möchten Sie einzahlen?");
    let selection = await readLineAsync();
    console.log("Sie haben" + selection + "€ eingezahlt");
    switch (selection) {
        case 1:
            
            break;
    
        default:
            break;
    }
    
    console.log("Wie viel möchten Sie abheben?");
    let selection2 = await readLineAsync();
    console.log("Sie haben" + selection2 + "€ abgehoben");
    switch (selection2) {
        case 1:
            
            break;
    
        default:
            break;
    }

    console.log("Wie viel haben Sie auf dem Konto?");
    let selection3 = (selection - selection2);
    console.log("Sie haben" + selection3 + "€ auf dem Konto");
    switch (selection3) {
        case 1:
            
            break;
    
        default:
            break;
    }

}

console.log(name);

let age = await readLineAsync();
console.log(age);

readLine.close();