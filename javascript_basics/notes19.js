// ********************************control flow in javascript

//if

// if(true){
//     //then execute this
// }

const isuserloggedin=true
if(isuserloggedin){
    console.log(`hello guyess`); //hello guyess
}

const tempreature=41;
if(tempreature<50){
    console.log("less than 50");
}else{
    console.log("no its not less than")
}

if((tempreature+22)<50){
    console.log("less than 50");
}else{
    console.log("no its not less than") //no its not less than
}

const balance=1000
if(balance>500) console.log("test"); //implicit

//if else if else

if(balance<500){
    console.log("test1");
}else if(balance >750){
    console.log("test2");
}else{
    console.log("test3");
}

const loginuser=true
const debitcard=true
const loginemail=true
if(loginuser && debitcard){
    console.log("you are eligible gentlemen");
}

if(loginuser || loginemail){
    console.log("user can login with phone or mail id");
}



//switch statement
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month=3
switch(month){
    case 1:
        console.log("its a january");
        break;
    case 2:
        console.log("its an febuarary");
        break;
    case 3:
        console.log("its a march");
        break;
    default:
        console,log("mmmmmm");
}



//IMPORTANT
//falsy values => false,0,-0,bigint 0n , "", undefined , null ,nan
//truthy value => [],{},"0",function(){}, " ".

const userEmail="ukr123@gmail.com";
if(userEmail){
    console.log("got user email");
}else{
    console.log("dont have user email"); //got user email
}

// exmple 2
if(userEmail){
    console.log("got user email");
}else{
    console.log("dont have user email"); //got user email
}


//check array
const x=[]
if(x.length === 0){
    console.log("arrray is empty");
}
const obj1={}
if(Object.keys(obj1).length === 0){
    console.log("object is empty");
}



//important
/*
false==0;//true
falese==""//true
0==""//true
*/


// NUllish Coalescing operator (??):null undefined
let val1;
val1=5??10   // => 5
val1=null??10 // => 10 
val1=undefined ?? 16  //=>16
val1=null ?? 10 ?? 20 //=>10

//ternary operator
//condition?true:false
const incereamprice=60
incereamprice<=80?console.log("1"):console.log("2"); //=>1