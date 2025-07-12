//                                               PROMISES




/*
A Promise is like a guarantee for something that will happen later.

Think of it like:
"I promise to give you a chocolate. If I have one, you’ll get it (success). If not, I’ll let you know why (failure)."

In JavaScript:
A Promise is used when something takes time, like fetching data from the internet.

It has 3 states:
Pending – still waiting.

Fulfilled – done successfully (you get the result).

Rejected – something went wrong (you get an error).



ALSO 
Use .then() when the promise is successful.

Use .catch() if it fails.
*/
// A Promise is an object representing completion or failure of an asynchronous operations


//         1
//createing an promise
const promiseone = new Promise(function(resolve,reject){
    //do an async task
    // database calls , cryptography ,network call
    // suppose we did
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})
//consuming the promise
promiseone.then(function(){ //this function auto get recieved an argument whose work is to return the value which is procesess in the promises after success
    console.log("promise consumed");
})


//             2

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2 ");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved");
})



//         3

const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"abc123@gmail.com"})
    },1000)
})

promisethree.then(function(user /*u can take any name it will auto take the return value*/ ){
    console.log(user);
})


//                  4

const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =false; // if its true then below will print Error : something went wrong
        if(!error){
            resolve({username:"chai",email:"abc123@gmail.com"})
        }else{
            reject(`Error : something went wrong`)
        }
    },1000)
})
promisefour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("the promise is either resolved or rejected")
})



//             5

const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"LeoMessi",email:"abc123@gmail.com",profession:"Footballer"})
        }else{
            reject(`Error : something went wrong again and again again hey chl be soja`)
        }
    },1000)
});
//lets consume this promise by async function
async function consumepromisefive(){
    try {
        const response = await promisefive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumepromisefive();


//           6
   const links = ' https://jsonplaceholder.typicode.com/users'
// async function getallusers() {
//     try {
//     const response = await fetch(links);
//     const data = await response.json()
//     console.log(data);
//     } catch (error) {
//     console.log(error);
//     }
// }
// getallusers()

//lets do this by then and catch
fetch(links).then(function(response){
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})
