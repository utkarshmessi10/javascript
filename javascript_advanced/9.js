//1
// setInterval(()=>{
//     console.log('utkarsh',Date.now()); // it will print utkarsh with date every 1 sec
// },1000)


//2
//also
// const funt=function(){
//     console.log('utkarsh',Date.now());
// }
// setInterval(funt,1000);  // it will print utkarsh with date every 1 sec

//3
//by taking parameter
const funt=function(str){
    console.log(str,Date.now());
}
setInterval(funt,1000,'hi'); // it will print hi with date every 1 sec
 // see the project disco
 