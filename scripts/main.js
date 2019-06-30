/* 
// Silly clicky alert
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
} */


// Image switcher 

var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src','images/firefox2.png');
  } else {
    myImage.setAttribute ('src','images/firefox-icon.png');
  }
}

// The following will not work in Chrome unless you unblock 3rd party stuff
// Personalized welcome message

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}