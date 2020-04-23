// Commentaire
let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');

myHeading.textContent = 'Bonjour, monde !';


let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/ciel.jpg') {
      myImage.setAttribute('src', 'images/arc-en-ciel.jpg');
    } else {
      myImage.setAttribute('src', 'images/ciel.jpg');
    }
});

function setUserName() {
  let myName = prompt('Veuillez saisir votre nom.');
  localStorage.setItem('nom', myName);
  myHeading.textContent = 'Ton ciel, ' + myName;
}

if (!localStorage.getItem('nom')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('nom');
  myHeading.textContent = 'Mozilla est cool, ' + storedName;
}

myButton.addEventListener('click', function() {
  setUserName();
});