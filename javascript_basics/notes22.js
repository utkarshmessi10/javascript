//          filter, map and reduce

const myNums=[1,2,3,4,5,6,7];
const newNums=myNums.filter((num)=>num>3);//it run when condition satisfy
console.log(newNums);

const c=[]
myNums.forEach((num)=>{
    if(num>4){
        c.push(num);
    }
})
console.log(c);


const books=[
    {
        title:"one",genere:"fiction",publish:1981,edition:2021
    },
    {
        title:"two",genere:"fiction",publish:1989,edition:2013
    },
    {
        title:"three",genere:"Non-Fiction",publish:1986,edition:2003
    },
    {
        title:"four",genere:"History",publish:1981,edition:2015
    },
    {
        title:"five",genere:"Science",publish:1976,edition:2010
    }
]

let userbooks=books.filter((bk)=>bk.genere=='History')
console.log(userbooks);// [ { title: 'four', genere: 'History', publish: 1981, edition: 2015 } ]

userbooks=books.filter((bk=>bk.publish>=2000));
console.log(userbooks);//[]

//map
const newnumber=[1,2,4,5,6,7,8,9];
// const nayanumber = newnumber.map((num)=>num+10); also correct
const nayanumber = newnumber.map((num)=>{return num+10});
console.log(nayanumber);//  11, 12, 14, 15, 16, 17, 18, 19

//chaining
const x=newnumber
            .map((num)=>num*10) //result of this passes to next
            .map((num)=>num+1)
            .filter((num)=>num>=20)
console.log(x);

//reduce
 const a=[1,2,3,4]
 const mytoatal=a.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc+currval;
 },0)
 console.log(mytoatal);

 