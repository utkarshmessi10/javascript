// suppose we have 4 list item of classname "same"

//1
// in webpage console type
// document.getElementsByClassName('.same'); // it will return an html collection []
// we cant use foreach loops and other functionality directly on html collection , firstly convert to array and then apply

//demostration
//step 1 =>  const templist=document.getElementsByClassName('same');
// step 2=> const x= Array.from(templist);
//step3=> x.foreach((l)=>{console.log(l.innerHTML)}); or any array related functianilty
// step 4=> output got  one two three four



//2

// i have gone to wikipedia and open documentation of leo messi and do some manipulation
// const hx2 = document.querySelectorAll('h2'); // selected all the conent or heading under h2
// hx2[0].innerText; // returns 'content'
// hx2[1].innerText; // return 'Early life' 


//3
//const myH2 = document.querySelectorAll('.mw—headline');
// myH2[0].innerText;
// myH2.foreach((e)=>{
//    e.innerText="hello";
//    e.style.color="red";
//    })