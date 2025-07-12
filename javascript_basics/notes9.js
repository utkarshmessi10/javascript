//                                                 Array part 2

const marvel=["thor", "ironman", "hulk"]
const DC = ["superman", "flash", "batman"]

//bad practise
   // marvel.push(DC);
    //console.log(marvel); // [ 'thor', 'ironman', 'hulk', [ 'superman', 'flash', 'batman' ] ] it took array as a single elment
    // so to acces dc heroes
  //  console.log(marvel[3][1]);// returned flash.....

// using concat method will return a new array

const all=marvel.concat(DC);
console.log(all);//[ 'thor', 'ironman', 'hulk', 'superman', 'flash', 'batman' ]

//using spreadoprator  (mostly used )
const allheroes = [...marvel, ...DC];
console.log(allheroes)


//supose you have array like this
const arr22=[1,2,3,[5,6,7,[22,34],22],[2,33]];
//use flat=> it returns a new array with all sub array concatenated into it recusively upto the depth
const new_realarr=arr22.flat(Infinity);
console.log(new_realarr);// [1,2,3,5,6,7,22,34,22,2,33]



//converting into array

console.log(Array.isArray("Utkarsh"));// check whether given is array or not
const x = Array.from("Utkarsh");// converts it into array
console.log(x) //array
console.log(Array.from({name: "utkarsh"})); // [] empty because we have to specify it whther it should make array of key or value

//create array from set of values

let a=100
let b=200
let c=300
let d=400
console.log(Array.of(a,b,c,d));// array created