//                                           object part 2......constructor or singelton object

const instauser=new Object() 
// same as const instauser={}
console.log(instauser);
instauser.id="123abc"
instauser.name="sammy"
instauser.isloggedin=false;
console.log(instauser);

// lets declare an object inside an object

const regularUser={
    email:"xyz@gmail.com",
    fullname: {//another object inside an object
        userfullname:{//another object inside of object who is inside another object
            firstname:"Utkarsh",
            lastname:"Rai"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname) // this is like u can access
//also
console.log(Object.keys(instauser)); //return type will be an array =>  [ 'id', 'name', 'isloggedin' ]
console.log(Object.values(instauser)); //return type will be an array =>[ '123abc', 'sammy', false ]
console.log(Object.entries(instauser));//return each key value pair as an array inside an array => [ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isloggedin', false ] ]
console.log(instauser.hasOwnProperty('id'));//checks whther folllowing attribute is there or not
//**************************************************************************************************************
//combining 2 or more objects

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
const obj3={obj1,obj2};
console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } } not a good practise

//correct approach
const obj4=Object.assign({},obj1,obj2);   // object.assign(target,source);
console.log(obj4);  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// another approach
const obj5={...obj1,...obj2};
console.log(obj5); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


//how values comes from a database

const users=[
    {
        id:"1"
    },
    {
        id:"2"
    },
    {
        id:"3"
    }//and so on
]
console.log(users[1].id) //way to access