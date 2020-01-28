const addSqrBtn = document.querySelector('div#controller button');
const body = document.getElementById('squares');

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
 }

addSqrBtn.onclick = () => {
  const square = document.createElement('div');
  square.setAttribute('class', 'sqr');
  square.style.background = '#f00';
  square.style.width = '100px';
  square.style.height = '100px';
  square.onmouseover = () => {
    square.style.backgroundColor = getRandomColor();
  }
  body.appendChild(square);
};