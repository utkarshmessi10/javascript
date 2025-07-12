//*************************************************scope level and mini hoisting

/*



function one (){
    const username="utkarsh"
    function two(){
        const website="youtube"
        console.log(username);//this will print utkarsh because username is global scope for function two
    }
    // console.log(website); this line will give errors as website is not declared within its scope
    two()
}
one()
//so this tell that a child scope can access the parent scope variables

if(true){
    const username = "utkarsh"
    if(username=="utkarsh"){
        const website="youtube"
        console.log(username+website);//utkarshyoutube
    }
}


*/

/*********************************instersteting************************************************************* */

//2 ways to declare a function

//console.log(addone(4)); //return 5 no error , so can be acces before declartaion of the function
function addone(num){
    return num+1;
}
console.log(addone(4));
// ..............................................
//2nd way
//console.log(addtwo(4)) throw error cant access before declartion as it is holded be variable
const addtwo=function(num){
    return num+2;
}
console.log(addtwo(4))

