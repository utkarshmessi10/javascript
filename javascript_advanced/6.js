// // events in javascript



//1******************************************************************************
// const ul = document.querySelector('#images');
// const li= ul.querySelectorAll('li');
// li[3].addEventListener('click',()=>{
//     alert('hey there you just clicked on owl');
// })

// // u can access directly also this will also works
// // const owl=document.querySelector('#owl');
// // owl.addEventListener('dblclick',()=>{
// //     alert("hey you gain clicked on owl");
// // })


// //2**************************************************************************************************
// //lets see more about event and its object
// // basic default syntax
// li[2].addEventListener('click',(e)=>{
//     //e is the event object
//     console.log(e); // return an window and envoirement events
// },false)
// // we will study , => type, timestamp, defaultprevented(),target, toElement , srcElement, currentTarget , clientX , clientY,screenX,screenY,altkey,ctrlkey,shiftkey,keyCode

// //event propogation has 2 context one is event bubbling=>(false in addEventlistner which is defualt) and second one is event capturing(true in addEventlistner)



// //lets see how propogation takes place
//******************************************************************************************************************

//case1 **************************

// document.getElementById('images').addEventListener('click',()=>{
//     console.log("clicked inside the ul");
// },false)
// document.getElementById('owl').addEventListener('click',()=>{
//     console.log("owl clicked");
// },false)

//now we know that owl is in ul images
//so if u clicked inside any image => //clicked inside the ul
// so if u clicked on owl => //owl clicked
                             //clicked inside the ul
// this is event bubbling => bottom to up approach meaing from inner to outer element

//case 2************************************************************
// document.getElementById('images').addEventListener('click',()=>{
//     console.log("clicked inside the ul");
// },true)
// document.getElementById('owl').addEventListener('click',()=>{
//     console.log("owl clicked");
// },true)
//output of case 2
//now we know that owl is in ul images
//so if u clicked inside any image => //clicked inside the ul
// so if u clicked on owl => ////clicked inside the ul
                                //owl clicked
// this is event capturing => top to bottom approach meaning from outer to inner element


//3*********************************************
// document.getElementById('images').addEventListener('click',()=>{
//     console.log("clicked inside the ul");
// },false)
// document.getElementById('owl').addEventListener('click',(e)=>{
//     console.log("owl clicked");
//     e.stopPropagation(); // it will stop bubbling to outerelement further
// },false)
//preventing element default behaviour ,ex here in li5 when clicked it will open google so we have to prevent it
// document.getElementById('google').addEventListener('click',(e)=>{
//     e.preventDefault();
//     console.log('click krne ke baad bhi nhi khula');//click krne ke baad bhi nhi khula
// })



//4**************************************************************
// if suppose we wanna remove some elements
// document.querySelector('#images').addEventListener('click',(e)=>{
//     console.log(e.target); //suppose we click on owl =>  <img width="200px" id="owl" src="https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt>
//     console.log(e.target.parentNode); // it will give => <li> <img width="200px" id="owl" src="https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt></li>
    // now for removal
    // let removal=e.target.parentNode;
    // removal.remove();

    //also
    // removal.parentNode.removeChild(removeIt);

// })