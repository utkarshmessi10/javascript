//                                objects destrucring and json api

const course={
    coursename:"progamer",
    price:"999",
    courseinstructor:"Utkarsh"
}
// in order to acces we can write this as console.log(corseinstructor)
//but we can also access by destructing

const {courseinstructor} = course; // this is object destructuring
// console.log(ins);//Utkarsh

//in react we destructure take place as
// const navbar=({company})=>{
// }
// navbar(company="utkarsh")


//API sends the response IN THE FORM OF JSON
// {
//     "name":"utkarsh",
//     "age":"22",
//     "last_name":"Rai"
// }
// //or api send the response in array 
// [
//     {},
//     {},
//     {},
// ]