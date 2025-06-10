const userJS = {name: "Shmuli", age: 23};
const json = JSON.stringify(userJS);
console.log(`${json} Demonstration from JS to JSON` );


const userJSON = '{"name": "Shmuli", "age": 23}';
const JS = JSON.parse(userJSON);
console.log(`${JS.name} ${JS.age} Demonstration from JSON to JS`);
