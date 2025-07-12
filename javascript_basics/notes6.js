//                                     numbers and maths

const score=400; // javascript auto detect that this is a number
console.log(score);//400
const balance = new Number(100); // using this syntax we can declare and tell js it should be of type Number
console.log(balance);// [Number: 100]

// some operations
console.log(balance.toString()); // print the number as string
console.log(balance.toFixed(2)); // fixed the decimal value to 2

const otherNumber=123.8966
console.log(otherNumber.toPrecision(3)); //124 and return it as string
const hundreads = 1000000
console.log(hundreads.toLocaleString('en-IN')); // give the large value in commas acc to indian standars like once tense hundread thousand tenthousand lac tenlac....
const num= Number.MAX_VALUE; //1.7976931348623157e+308
const num2 =Number.MIN_VALUE;//5e-324
console.log(Number.isInteger(num)); // check if it is a integer or not



//                     *****************************maths*************************************

console.log(Math); // it is an object and have lots of properties
console.log(Math.abs(-4)); // gives an absolute value here it will give 4
console.log(Math.round(4.5)); // round off
console.log(Math.ceil(4.2)); // gives upper value
console.log(Math.floor(4.2));// gives lowwer value
console.log(Math.sqrt(64)); // 8
console.log(Math.max(4,6,9,1,0)); // return max among all =>9
console.log(Math.min(4,6,9,1,0)); //  return min among all =>0

//most used 
console.log(Math.random()); //random values between 0 and 1
console.log((Math.random()*10)+1); // random values between 1 and 10 with decimals
console.log(Math.floor(Math.random()*10)+1); // integier rv between 1 and 10


// but suppose i want some random values betweem some range
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1) +min)); // you can find random values between your favourable range