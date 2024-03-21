//let balance = Math.random() * 100;
//let balance2 = Math.floor(balance);
//console.log("Ihr Kontostand beträgt" + " " + balance2 + "€");

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
    console.log("Enter command");
    let selection = await readLineAsync();

    console.log("Your selection :" + selection);
    switch (selection) {
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