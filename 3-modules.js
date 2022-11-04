// const name = "Khang";
// console.log(`Hello my name is ${name}`);
// console.log(__dirname);
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
console.log(data);

sayHi(names.name2);