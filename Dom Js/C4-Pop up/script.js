const btn = document.querySelector('.clickme');
const popUp = document.querySelector('.pop-up');
const popIt = document.querySelector('.pop-it');
const disp = document.querySelector('.modal');
const closed = document.querySelectorAll('.close');

const emmet = (a) => {
    a.classList.toggle('sense');
};
btn.addEventListener('click', (a) => {
    emmet(popIt);
    disp.style.display = "block";

})
closed[1].addEventListener('click', (a) => {
    emmet(popIt);
    disp.style.display = "none";
})