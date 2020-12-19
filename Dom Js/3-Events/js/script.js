const wrapper = document.getElementById('a');
const button = document.querySelector('.but');
var i = 3;
button.addEventListener('click',() => {
    i < 10 ? i += 1 : exit;
    const newItem = document.createElement('p');
    newItem.textContent = "paragraf " + i;
    wrapper.appendChild(newItem);
    newItem.classList.add('p' + i);
    newItem.style.color = "salmon";
    newItem.addEventListener('mouseover',()=>{
       newItem.style.color = "black";
    });
});

window.onscroll = () =>{
    console.log(Math.random());
}

// event list -click -mouseover -resize -scroll -mouseout
// documentation => https://developer.mozilla.org/en-US/docs/Web/Events