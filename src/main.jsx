import React from 'react'
import ReactDOM from 'react-dom'
import WebContent from './App';

ReactDOM.render(<WebContent />, document.getElementById('root'));

let toggle = document.querySelector('.hover-show');

setTimeout( () => {toggle.classList.toggle('active')} , 1700)

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
});

let Icons = document.querySelectorAll('.navigation .icon');

Icons.forEach((icon) => {
  icon.addEventListener('click', () => {
    changeactive();

    icon.classList.add('active-nav');
  });
});

function changeactive() {
  Icons.forEach((icon) => {
    icon.classList.remove('active-nav');
  });
}
