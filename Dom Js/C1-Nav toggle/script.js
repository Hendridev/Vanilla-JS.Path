const bar = document.querySelector('.fa-bars');
const item = document.querySelector('.toggle-item');
const allIn = document.querySelector('body');

bar.addEventListener('click', function() {
    item.classList.toggle('toggle-it');
});

item.addEventListener('click', function() {
    item.classList.toggle('toggle-it');
});