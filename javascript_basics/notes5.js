//                                        string in javascript
const name = "utkarsh"
const repocount = "20"
// old tareeka => console.log(name + repocount + " value");

//string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

console.log(name[0]);

// one more way to declare string

const gameName=new String('football')

//some operations

console.log(gameName.__proto__);
console.log(gameName.length); // return the length of the string
console.log(gameName.toUpperCase()); // makes all letters in uppercase
console.log(gameName.charAt(2)); // tell which char is present at asked index  //o
console.log(gameName.indexOf('t')); // tell the index of asked letter // 3
const newstring =gameName.substring(0,4); // it make a substring by including index 0 and excluding index 4
console.log(newstring); // foot

// lets take another example
const collage = "srmist-ktr"
const news= collage.slice(0,4); //srmi
const news2= collage.slice(-9,4); //rmi
console.log(news);
let old=collage.replace("-","$"); // replaces the "-" from srmist-ktr and give srmist$ktr
console.log(old);

// new example
const xs= "    hello     ";
console.log(xs);
console.log(xs.trim()); // remove the white spaces from the string
console.log(xs.includes('ll')); // check whether the asked char are present in the string or not, is present it will return true
console.log(collage.split('-')); // split acc to - in the string