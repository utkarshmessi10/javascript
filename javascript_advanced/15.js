//prototype

let myheroes = ["thor","hulk","thanos"];
let heropower = {
    thor:"hammer",
    hulk:"anger",
    thanos:"gangulet",
    
    gethulkpower: function(){
        console.log(`hulk power is ${this.hulk}`);
    }
}
Object.prototype.ukr = function(){
    console.log(`now ukr will be present in all objects`);
}
heropower.ukr();
myheroes.ukr();// array is also an object so ukr fxn prop will also be accessible here


//inheritence

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__=user;


//new syntax or modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher);// teachingsupport will acces all propp of teacher



// let see seeting a prop in all string and using it
let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()