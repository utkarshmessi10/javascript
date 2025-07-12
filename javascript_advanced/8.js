// 1

// setTimeout(function(){
//     console.log('hitesh');// it will be printer after 2 sec in console log
// },2000)

//also
// const say = function(){
//     console.log('hitesh');
// }
// setInterval(say,2000);// it will also print hitesh after 2 sec



//2
// const changetext=function(){
//     document.querySelector('h1').innerHTML='i got changed';
// }
// setTimeout(changetext,5000); // after 5 sec it got changed


//3 
//suppose you wanna remove the setTimeout
const changetext=function(){
     document.querySelector('h1').innerHTML='i got changed';
 }
 const timeout1=setTimeout(changetext,5000); // after 5 sec it got changed
document.querySelector('#stop').addEventListener('click',()=>{
    clearTimeout(timeout1); // if u do this and when u click on stop button it will stop chaning the name as given in timeout
})
const img = document.querySelector('#myphoto');
document.querySelector('#show').addEventListener('click',()=>{
    img.style.transform = "translateX(-200px)";
    document.querySelector('h1').style.visibility="hidden";
    img.style.visibility="visible";
})
document.querySelector('#dicolight').addEventListener('click',()=>{
    const x = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    };
        const y = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        document.querySelector('h1').style.color = `rgb(${r}, ${g}, ${b})`;
    };
        setInterval(x,1000);
        document.querySelector('h1').style.backgroundColor="white";
        setInterval(y,1000);
})