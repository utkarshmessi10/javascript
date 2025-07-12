// document object model
//now lets see  how to selects elemets from webpage


//1
//method 1 by id
//goto console in webpage and type below
// document.getElementById('1').id;
//you will get document.getElementById('1').id;=>'1'


//2
//again in console if u type 
//document.getElementById('1').className;
// you will get 'heading' as the class name for that element


//3
// again in console if u type
//document.getElementById('1').getAttribute('class');
// you will get 'heading' as the class name for that element
//document.querySelectorAll('h2')[0].className it will also give class name of the element
//document.querySelectorAll('h2').forEach(h => {
//                             console.log(h.className);
//                                              });





//4
//if you wanna overwrite or set the element's class then you can do it by
// document.getElementById('2').setAttribute('class',"para_from_js");
//it will set class name as given or overwrite if it already has a class


//5
// if you wanna style your selected element
// const title=getElementbyID('1');
// title.style.backgroundcolor="green";
//title.style.padding="30px";
//and so on


//6
//now how to access the content inside the selected element
//const title=getElementbyID('1');
//title.textContent =>it will give 'DOM learning on chai aur code\n            hello there\n        '
//title.innerHTML =>it will give "DOM learning on chai aur code" see html file
//title.innertext =>it will give "DOM learning on chai aur code" see html file


//7
//difference between innertext and textContent
//textContent =>  Returns all text, including hidden ones (display: none)

//innertext =>   text  Respects CSS styles like display: none and visibility: hidden
                //✅ Applies line breaks like it’s reading a novel out loud

//see html file for example by executing 6 in console webpage


//8
//innerHtml
/*
Reads HTML tags and text inside an element

✅ Can be used to set new HTML too (yes, you can rewrite the entire content)
*/


//9 Selection by others
// document.getElementbyclassName('title');
// document.querySelector('h1')
// document.querySelector('#1') // slected by id , but avoid stariting id with int because it will give error
// document.querySelector('.title') // selected by className
// document.querySelector('input[type="password"]');
// document.querySelector('div :first-child') // DOM learning on chai aur code
// document.querySelector('div :nth-child()')

// if our our div have class name x then also
// console.log(document.querySelector('.x :nth-child(6)')); valid



//10
//manipulaton of values using dom
// we can store ul element in an variable
// const list=document.queryselector('ul');
// if ul contains some list items we ca further selecet and store them in another variable
// const items = list.querySelector('li')// select and store frist child
// we can then manipulate it also
//items.style.backagroundColor="red";
//items.innerHtml="ekkk" // first child one is replaced by ekkk 
//similarly for 2nd list item
//const item2=list.querySelector('li:nth-child(2)');
//item2.innerHtml="doooo"  // second child two is replaced by doooo


//11
//queryselectorall
// const templilist = document.querySelectorAll('li');
// it return => NodeList(3) [li, li, li] // its not an pure array
//templilist[0].style.color="green"  // it will green color the fist li
// templilist[1].style.color="blue"  // it will blue color the second li
// templilist.foreach((l)=>{
//   l.style.backgroundcolor='green' })



//12
// const myh1 = document.querySelectorAll('h1');
//  myh1.style.color="red";  inncorrect way
// myh1[0].style.color="red";  correct way