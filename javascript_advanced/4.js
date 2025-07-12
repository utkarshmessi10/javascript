const div = document.createElement('div');
console.log(div);
div.className="main";
div.id=Math.round(Math.random()*10 + 1);
div.setAttribute("title","generated title");
div.style.backgroundColor="blue";
div.style.padding="12px";
// div.innerText="hello there i am studying from chai and code"; both are correct this one and below one
const addText = document.createTextNode("hello there i am studying from chai and code");
div.appendChild(addText);
document.body.appendChild(div);

//create a function which will take arg and automatically generate the elements with preferable attributes or say predefined attributes
