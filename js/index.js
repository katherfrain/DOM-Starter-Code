const myButton = document.getElementById('clickMe');
const noun1 = document.getElementById('noun1');
const noun1Input = document.getElementById('noun1Input');

myButton.addEventListener('click', function (event) {
  event.preventDefault();

  noun1.innerHTML = noun1Input.value;
});

const secondButton = document.getElementById('clickThis');
const noun2 = document.getElementById('noun2')
const noun2Input = document.getElementById('noun2Input')

secondButton.addEventListener('click', function(event) {
  event.preventDefault();
  noun2.innerHTML = noun2Input.value;
});

const thirdButton = document.getElementById('adjectiveClick');
const adjective1 = document.getElementById('adjective1');
const adjective1Input = document.getElementById('adjective1Input');

thirdButton.addEventListener('click', function(event) {
  event.preventDefault();
  adjective1.innerHTML = adjective1Input.value;
});

const fourthButton = document.getElementById('nameClick');
const name = document.getElementById('name1');
const nameInput = document.getElementById('properNameInput');

fourthButton.addEventListener('click', function(event) {
  event.preventDefault();
  name.innerHTML = nameInput.value;
});

const fifthButton = document.getElementById('pastVerb');
const pastTense = document.getElementById('pastverb1');
const pastTenseInput = document.getElementById('pastInput');

fifthButton.addEventListener('click', function(event) {
  event.preventDefault();
  pastTense.innerHTML = pastTenseInput.value;
});

const sixthButton = document.getElementById('noun4Button');
const noun4 = document.getElementById('noun4');
const noun4Input = document.getElementById('noun4Input');

sixthButton.addEventListener('click', function(event){
  event.preventDefault();
  noun4.innerHTML = noun4Input.value;
});

const skippedButton = document.getElementById('noun3Button');
const noun3 = document.getElementById('noun3');
const noun3Input = document.getElementById('noun3Input');

skippedButton.addEventListener('click', function(event) {
  event.preventDefault();
  noun3.innerHTML = noun3Input.value;  event.preventDefault();
  noun3.innerHTML = noun3Input.value;
})
