//                                 FOR LOOP BREAK AND CONTINUE

//FOR
let array1=[1,2,3,4,5,6,7]
for (let i = 0; i < array1.length; i++) {
    const element = array1[i];
    console.log(array1[i]);
}

for(let i=0;i<=10;i++){
    console.log(`this is an outer loop ${i}\n`)
    for(let j=0;j<=10;j++){
        console.log(i+'*'+ j + "=" + i*j);
    }
}

let myarray=["thor", "hanuman","odin"];
for (let i = 0; i < myarray.length; i++) {
    const element = myarray[i];
    console.log(myarray[i]);
}

 // break and continue

//use of break suppose it is asked whenu got hanuman then stop printing then use break
for (let i = 0; i < myarray.length; i++) {
    if(myarray[i]=="hanuman"){
        console.log("i found lord hanuman");
        break;
    }
        console.log(myarray[i]);
}

// if u wanna skip any iteration use continue
for (let i = 0; i < myarray.length; i++) {
    if(myarray[i]=="hanuman"){
        console.log("i found lord hanuman");
        continue;
    }
        console.log(myarray[i]);
}

//while and do while loop
let x=0;
while(x<myarray.length){
    console.log(myarray[x]);
    x++;
}
let y=0
//do while loop
do{
    console.log("i will be executed every time");
    y++;
}while(y<myarray.length)