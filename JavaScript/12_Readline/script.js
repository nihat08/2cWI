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

let name = await readLineAsync();
console.log(name);

let age = await readLineAsync();
console.log(age);

readLine.close();