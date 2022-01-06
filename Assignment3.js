// 1) Select the section with an id of container without using querySelector.

const container = document.getElementById('container');

// 2) Select the section with an id of container using querySelector.
const first = document.querySelector('.first');
// 3) Select all of the list items with a class of "second".
const second = document.querySelectorAll('.second');

// 4) Select a list item with a class of third, but only the list item inside of the ol tag.
const liInOl = document.querySelector('ol').querySelector('.third');
// 5) Give the section with an id of container the text "Hello!".
const contain = document.querySelector('#container');
const h4 = document.createElement('h4');
h4.innerHTML = "Hello";
contain.insertBefore(h4,contain.children[0]);
// 6) Add the class main to the div with a class of footer.
const footer = document.querySelector('.footer');
const main = document.createElement("div");
main.setAttribute('class','main');
footer.appendChild(main);
// 7) Remove the class main on the div with a class of footer.
footer.removeChild(main);
// 8) Create a new li element.
const li = document.createElement('li');
// 9) Give the li the text "four".
li.innerHTML = 'four';
// 10) Append the li to the ul element.
const ul = document.querySelector('ul');
ul.appendChild(li);
// 12) Loop over all of the lis inside the ol tag and give them a background color of "green".

const allLisInOl = document.querySelector('ol').querySelectorAll('li');


for(let i = 0; i< allLisInOl.length;i++)
{
    allLisInOl[i].style.backgroundColor = 'green';
}

// 13) Remove the div with a class of footer.
//const footer = document.querySelector('.footer');
document.body.removeChild(footer);