function addlang(langname){
    const li = document.createElement('li');
    li.innerHTML=`${langname}`;
    // now we have to select where we have to add the li
    document.querySelector('.LANGUAGE').appendChild(li) // selected where we have to add li and append it
}
addlang("ruby");
addlang("typescript");

// now lets do same thing but in optimize approach
function addoptilang(langname){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langname));
    document.querySelector('.LANGUAGE').appendChild(li);
}
addoptilang("html");



//editing the value
const seclang=document.querySelector("li:nth-child(2");
// seclang.innerHTML="mojo";// value will be changed from  c++ to mojo


//another way => creating new element and replaceing it 
const newli=document.createElement('li');
newli.textContent="mojo";
seclang.replaceWith(newli); // value will be changed from  c++ to mojo


//editing using outer html
const firstlangname=document.querySelector("li:first-child");
firstlangname.outerHTML="<li>react</li>" // js changes to react

//removing elments
const lastlang=document.querySelector("li:last-child");
 lastlang.remove(); // html will be removed 