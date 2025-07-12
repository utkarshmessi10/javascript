                                //datatypes and echmascript
//ecmascript is a standard on which js isbased
"use strict";//treat all js code as newer version
//alert(3+3)//pop up
//there are 7 primitive datatypes
/*
NULL(standalone value) , NUMBER(2^53) , STRING("") , SYMBOL , UNDEFINED, BOOLEAN , BIGINT
*/

const score =100 //number
const scoreValue=100.3 //number

const isloggedin = false // boolean
const outsidetemp=null //null
let useremail; //undefiend
const id = Symbol('123') //symbol
const anotherid = Symbol('123')//symbol
// even passing same string they are diffirent
console.log(id===anotherid);//false
const bigNumber=2463463683864536n // js will store it as bigint

//reference (non primitive)
// array, objects, functions
console.log(typeof(null)); // its an object
console.log(typeof(undefined)); // its an undefined

const heroes=["thor","hanuman","loki"] // array
//object
let myobj={
    name:"utkarsh",
    age:22,
}
//function
const myfunction=function(){
    comsole.log("hello world");
} 


/*
type of val                           return type
undefined                               undefiend
Null                                     object
Boolean                                    boolean
Number                                   number
string                                      string
object                                       object
function                                   function object
array                                       object
*/


//stack(primitive)          ,  Heap(non primitive)

//ex of stack 
let myname="utkarsh rai";
let anothername=myname;
anothername="shivansh";
// as primitve data type use stack so if you are give a refernce to some other var and then change it the wont change the org value, change will reflect in the 2nd var as it is given a copy of reference of 1st
console.log(myname)//utkarsh rai
console.log(anothername)//shivansh

//ex of heap

let user1={
    name:"Raj",
    age:22,
}
let user2 = user1
user2.name="rishu";
//as no primitive use heap so they will give direct refrence leading => if change in 2nd variable lead to change in original variable
console.log(user1.name);//rishu
console.log(user2.name);//rishu