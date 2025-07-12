// ******************************************global and local scope

let a=10;
const b=20;
var c=30;
console.log(a);
console.log(b);
console.log(c);

//above is all are in global scope and are good then comes a scope
//{} this is scope

//below is block scope
{
let d=10;
const e=20;
var f=30;
}
console.log(d)//gives undefines which is correct
console.log(e)//gives undefined whhich is corwecr
console.log(f)//but this print 30 which correct value of f but it should not print because d e f are declared within some scope so they shouldn't be displayed ot of scope so this is the problem related to var

//now suppose
//this is block scope
let x=300
{
    let x=400
    console.log(x)//inside it is 400 

}
console.log(x)//give 300