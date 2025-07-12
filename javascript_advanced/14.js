//prototype

//array is object
//string is object
//function is object

// In JavaScript, a prototype is an object from which other objects inherit properties and methods. Every function in JavaScript has a prototype property, which is used when creating new objects with that function as a constructor.

function multiplyby5(num){
    return num*5;
}
multiplyby5.power=2;
console.log(multiplyby5(5)); //25
console.log(multiplyby5.power); // 2
console.log(multiplyby5.prototype); // {}


//2
function createuser(username,score){
    this.username=username;
    this.score=score;
}
//u can createyour own functionality
createuser.prototype.increment=function(){
    this.score++;
}
createuser.prototype.printme=function(){
    console.log(`the score u got is ${this.score}`);
}
const chai = new createuser("messi",25); 
const cofee = new createuser("neymar",35);
//now u can use the functionality defined by u 
chai.printme(); // the score u got is 25
cofee.increment();
cofee.printme();//the score u got is 36 


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

