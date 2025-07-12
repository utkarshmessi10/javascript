//                                functionn and parameters

// function 1
function saymyname(){
    console.log("U");
    console.log("t");
    console.log("k");
    console.log("a");
    console.log("r");
    console.log("s");
    console.log("h");
}
saymyname();//calling the function

// function addtwonumbers(number1,number2){
//     console.log(number1+number2);
// }
// addtwonumbers(3,4);

//function2
function addtwonumbers(number1,number2){
    return number1+number2;
}
const result=addtwonumbers(3,4);
console.log(result)

//next function
function loginusermessage(username){
    if(username==undefined){
        console.log("please enter a username");
    }
    return `${username} just logged in`
}
console.log(loginusermessage("utkarsh"))

