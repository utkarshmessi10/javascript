// array based loops

//for of
const arr=[1,2,3,4,5];
for (const i of arr) { // "i" is not a index its value of the array
    console.log(i);
}
const greetings = "hello world"
for(const greet of greetings){
    console.log(greet);
}

//maps
const map = new Map(); //map stores keyvalue pairs
map.set('IN',"India")
map.set('USA',"america")
map.set('fr',"france")
console.log(map); // Map(3) { 'IN' => 'India', 'USA' => 'america', 'fr' => 'france' }

for (const key of map) {
    console.log(key);
}

for (const [key,value] of map) {
    console.log(key,'-:',value);
}

const myobj={
    'game1':'NFS',
    'game2':'spiderman'
}
/*
this is not working for object
for(const [key,values] of myobj){
    console.log(key,'-:',value);
}
*/

const myobject={
    js:'javascript',
    cpp:'c++',
    rc:'ruby',
    swift:'swift by apple'
}
for(const key in myobject){
      console.log(key);
    //console.log(myobject[key]);
    console.log(`${key} shortcut is for ${myobject[key]}`);
}

const programming=["js","rb","py","java","cpp"];
for (const key in programming) {
    console.log(programming[key]);
}


// for each loop

const coding=["js", "ruby", "java","python","cpp"];
coding.forEach( function (item){
    console.log(item);
} )

coding.forEach((val)=>{
    console.log(val);
})

function printme(item){
    console.log(item);
}
coding.forEach(printme);

//for each has some more parameter item, index,array

coding.forEach((item,index,arrr)=>{
    console.log(item,index,arrr);
})
/* it will give following output
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
*/


//lets se another scenario
//[{},{},{}]

const mycoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
    {
        languageName:"c++",
        languageFileName:"cpp"
    }
]

mycoding.forEach((item)=>{
    //console.log(item.languageName);
    //console.log(item.languageFileName);
})