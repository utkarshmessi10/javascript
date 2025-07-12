// below every is written is auto output in webpage console


const parent=document.querySelector('.parent')
console.log(parent); /* */
console.log(parent.children); //HTMLCollection(4) [div.day, div.day, div.day, div.day]
console.log(parent.children[1].innerHTML); // Tuesday

// manipulating childrens if father is known
for (let index = 0; index < parent.children.length; index++) {
    parent.children[index].style.backgroundColor="red";
    parent.children[index].style.border="2px solid black";
    parent.children[index].style.padding="10px";
    parent.children[index].style.color="white";
}

//another way of accessing the child element from parent
console.log(parent.firstElementChild);//<div class="day" style="background-color: red; border: 2px solid black; padding: 10px; color: white;">Monday</div>
console.log(parent.lastElementChild);

//suppose if we know the child we can access the parent from it
const dayone=document.querySelector('.day');
console.log(dayone);//monday
console.log(dayone.parentElement);
console.log(dayone.nextElementSibling);//tuesday

console.log("num of node:",parent.childNodes); //num of node: NodeList(9)
