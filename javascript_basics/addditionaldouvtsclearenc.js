/*
*****************************************************doubt******************************************
function handleobject(anyobject){
    console.log(username is ${anyobject.name} and age is ${anyobject.age});
}
handleobject(user); 
when we will use this.name and when we have to do like this
*/

//solution

 //(Object as Argument):
//You explicitly pass the object as a parameter and access its properties directly.

function handleobject(anyobject) {
    console.log(`username is ${anyobject.name} and age is ${anyobject.age}`);
}

const user = { name: "Varun", age: 22 };
handleobject(user);


//whereas
// (Inside an Object Method):
// You’re referring to the object that owns the function. this is like saying “me” inside that object.
const user = {
    name: "Varun",
    age: 22,
    showInfo: function() {
        console.log(`username is ${this.name} and age is ${this.age}`);
    }
};

user.showInfo();

//**************************************************************************************************************************