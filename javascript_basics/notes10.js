//                                              objects in depth

// object can be declared in 2 way as constructor or as literals
//when object is created as constructor then it will be singelton

//object literals

const mySym=Symbol("key1");
const jsuser={
    name:"utkarsh",
    [mySym]:"key1",
    "full name":"utkarsh rai",
    age:22,
    location: "kattankulatur",
    isloggedin:false,
    lastlogindays: ["monday", "starurday"]
}
//accesing the object 2 ways
console.log(jsuser.name); //utkarsh
console.log(jsuser["name"]); //utaksrsh
console.log(jsuser["full name"]); //utkarsh rai this attribute cant be accessed by using dot(.) operator
console.log(jsuser[mySym]);//key1

//if u wanna do some change
jsuser["full name"]="utkarsh anand prakash";
console.log(jsuser["full name"]);

// if u want no one can change any attribute of you object the use freeze
//Object.freeze(jsuser);// from now on no change will takes place
console.log(jsuser);


jsuser.greeting=function(){
    console.log("hello js user");
}
jsuser.greeting2=function(){
    console.log(`hello js user,${this.name}`);;
}
console.log(jsuser.greeting());
console.log(jsuser.greeting2())