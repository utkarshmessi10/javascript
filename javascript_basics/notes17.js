//****************************************arrow function and this keyword */


//this refers to current context
const user={
    username:"utkarsh",
    age:22,
    welcomemessage: function(){
        console.log(`${this.username},welcome to website`);
        //lets console this and see what hppen
        console.log(this);
        /*
        so the output we got after
                     utkarsh,welcome to website
                    {
                    username: 'utkarsh',
                    age: 22,
                    welcomemessage: [Function: welcomemessage]
                    }

                    function called 2nd time with changed username

                    Utkarsh@rai,welcome to website
                    {
                    username: 'Utkarsh@rai',
                    age: 22,
                    welcomemessage: [Function: welcomemessage]
                    }
        so we get to know that this shows the current context
        */
    }
}
user.welcomemessage() //utkarsh,welcome to website
user.username="Utkarsh@rai";
user.welcomemessage() // Utkarsh@rai,welcome to website
//but if we try to print this here in node envorement then it will give empty {}
console.log(this);//{}

//arrow function

// const chai= function(){
//     let username="hitesh";
//     console.log(username);
// }
// chai();
// simpliar to just above function i can make same function using arrow
const chai=()=>{
    let username="hitesh";
    console.log(username);
}
chai()//hitesh , same output

// more function using arrow

const addtwoo=(num1,num2)=>{
    return num1+num2;
}
console.log(addtwoo(4,5));

const addthree=(...num)=>{
    let sum=0;
    for(let i of num){
        sum+=i;
    }
    return sum;
}
console.log(addthree(10,20,30));

//implicit return one line code
const sum4=(num1,num2)=>(num1+num2);
console.log(sum4(4,5));//9

const giveobj=()=>({username:"hitesh"});
console.log(giveobj());