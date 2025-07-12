/*                                    Immediatly invoked function expression (iife)                                      */

//help to minimize the pollutoion from global scope
//()() first for function declaration and 2nd bracket for execution

//named iife
(function chai(){
    console.log(`db connected`);  //db connected
})();

//simple iife
(()=>{
    console.log(`db connected`); //db connected
})();

//parameteric iife
((name)=>{
    console.log(`db connected mr ${name}`); //db connected mr utkarsh
})("utkarsh");