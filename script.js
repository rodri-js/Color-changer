const body = document.getElementsByTagName("body")[0];
const button = document.getElementsByTagName("button")[0];
const color = ['red', 'blue', 'pink','yellow', 'green', 'purple'];

body.style.backgroundColor= 'violet';
button.addEventListener('click',changer);

function changer(event) {
    event.preventDefault();
   const colors = parseInt(Math.random()*color.length);
   body.style.backgroundColor=color[colors];
   
}

