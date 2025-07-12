//                                                   arrays in javascript

const myarr=[0,1,2,3,4,5, true , "utkarsh"]; // arrays of javascript can contain a mix of diffirent datatypes and they are resizeable
const myheros = ["thor","hanuman","loki"];
//also
const arr2=new Array(1,3,5,7,8)
console.log(arr2[3]);
console.log(arr2.length);
arr2.push(11);//adding value to array
arr2.push(12);
arr2.pop();//deleting
console.log(arr2);
arr2.unshift(20)// added at start by shifting all by one place
arr2.shift();//similar to pop but remove from start
console.log(arr2.includes(9));// check whether 9 is present in array or not
console.log(arr2.indexOf(11));// return the index of asked value if present else return -1
const arrnew = arr2.join();//adds all the elements of array into a string
console.log(typeof arrnew); //string




//*******************************************slice , spice*************************************************

//original array
console.log("A ", arr2);

const my1 = arr2.slice(1,3);// return a part of array by including x and excluding y in paramenter slice(x,y) 
console.log(my1);
//original array after slicing
console.log("B ", arr2);

const my2 = arr2.splice(1,3) //splice directly manipulate the org array by removing the given range from given arr
console.log(my2);
//original array after splicing
console.log("c",arr2);