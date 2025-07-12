                             //datatype conversion confusion

let score = 33
console.log(typeof score);//Number
let valueinstring=String(score); //conversion from number to string
console.log(typeof valueinstring)//String


let marks="33abc"
let x=Number(marks);
console.log(x) //showing NAN MEANING NOT A NUMBER, it gets converted to number but as it is not a pure number after converted as string contain some alphabets also.

let isloggedin="hitesh"
let bulianlenegntd = Boolean(isloggedin);
console.log(bulianlenegntd);

//1=>true; 0=>false
// ""=> false
// "hitesh"=>true
