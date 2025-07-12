//                             functions with object

// function calculatecartprice(num1){
//     return num1;
// }
// console.log(calculatecartprice(2));//this is the simple one
//but what if parameters of the function keeeps on changing ,example is cal the price while secelecting the items in the cart

//so rest operator(...) will help in this
//syntax in example

//example 1
function cal(...num){
    return num;
}
console.log(cal(2,3,4,5)); //[ 2, 3, 4, 5 ]

//example2
function cart(value1,value2,...number){
    return number;
}
console.log(cart(10,20,30,40,50,60));

// function 3
function cart(...number) {
    let sum = 0;
    for (let i of number) {
        sum += i;
    }
    return sum;
}
console.log(cart(10, 20, 30, 40, 50, 60)); // 210

//lets see how to pass object in function
const user={
    name:"utkarsh",
    age:22
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.name} and age is ${anyobject.age}`);
}
handleobject(user);
//one more way to pass
handleobject({
    name:"utkarsh",
    age:33
})

//passing an array inside a function
const newarray=[22,33,44,55,66,77,88];
function simplearray(getarray){
    return getarray[3];
}
// console.log(simplearray(newarray));//55
//also 
console.log(simplearray([22,33,44,55,66,77,88])); //55
