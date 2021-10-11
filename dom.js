// ACCESS ELEMENTS
const titleElement = document.getElementById('title');

const listItems = document.getElementsByClassName('list-item');

// console.log(document.querySelector('#title'));
// console.log(document.querySelector('.list-item'));
// console.log(document.querySelectorAll('.list-item'));

// Modify elements
//update style
titleElement.style.color = 'red';

// operation on class
titleElement.className = 'new class';
console.log(titleElement.className);
titleElement.classList.add('another');
console.log(titleElement.className);
console.log(titleElement.classList.contains('new-class'));

// titleElement.textContent = '<div>Hello you</div>';
titleElement.innerHTML = '<div>Hello you</div>';

// create element
const button = document.createElement('button');
button.innerHTML = 'click me';

const container = document.querySelector('.container');
container.append(button);

const numbers = [1, 2, 3, 4, 5];

const ul = document.querySelector('.list-container');
numbers.forEach(function (num) {
  const li = document.createElement('li');
  li.innerHTML = num;
  ul.append(li);
});

// delete element
const firstListItem = document.querySelector('.list-item');
firstListItem.remove();

button.addEventListener('click', function () {
  console.log('button is clicked!');
});

button.addEventListener('mouseout', function(){
    console.log('mouse out');
});
