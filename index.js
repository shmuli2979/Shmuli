import greet from "./greet.js"

import "gimatria"
console.log((5785).gimatria());
console.log("ה'תשפה".gimatria())

console.log(`That was the NPM module, now to the Demonstration and Import-Export:`)

const userJS = {name: "Shmuli", age: 23};
const json = JSON.stringify(userJS);
console.log(`${json} Demonstration from JS to JSON` );


const userJSON = '{"name": "Shmuli", "age": 23}';
const JS = JSON.parse(userJSON);
console.log(`${JS.name} ${JS.age} Demonstration from JSON to JS`);

console.log(greet("Shmuli"))
