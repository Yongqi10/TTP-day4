// 1)
const btnFirst = document.querySelector('.first');
const btnSecond = document.querySelector('.second');
const p = document.querySelector('p');
btnFirst.addEventListener('click', function() {
    p.innerHTML = "I'm right";

});
btnSecond.addEventListener('click', function () {

        p.innerHTML = "No, I'm right!";
});

//2)

const hover = document.querySelector('.hover');

hover.addEventListener('mouseover',function () {
    alert("Hey, I told you not to hover over me!");
});

//3) and 4)
// 4.	In a Javascript file, write a program which checks the following things:
// a.	checks that the password is 12345678
// b.	if the password is incorrect, send an alert message
// c.	Your page should also include an <h1> tag. If the information in the form is correct, have Javascript change the text in the <h1>.HTML page.


const password = document.querySelector('.password');
const btnLogin = document.querySelector('.Login');
const h1 = document.querySelector('h1');



btnLogin.addEventListener('click', function() {
    if(password.value === '12345678')
    {
        h1.innerHTML = 'correct';
    }
    else {
        h1.innerHTML = 'incorrect';
    }
    password.value = '';
});

//6) BONUS
const text = document.querySelector('.text');
const radius = document.querySelector('.radius');
const calculate = document.querySelector('.calculate');
let volume = 0;
calculate.addEventListener('click', function () {
    if(radius.value.length == 0)
    {
        return;
    }
    
    volume = (4/3) * Math.PI * Math.pow(parseFloat(radius.value), 3);
    text.innerHTML = volume;
    radius.value = '';
});