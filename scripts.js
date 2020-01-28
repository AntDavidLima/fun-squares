const addSqrBtn = document.getElementById('addSquare');
const addCclBtn = document.getElementById('addCircle');
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

addCclBtn.onclick = () => {
  const circle = document.createElement('div');
  circle.setAttribute('class', 'ccl');
  circle.style.background = '#f00';
  circle.style.width = '100px';
  circle.style.height = '100px';
  circle.style.borderRadius = '100px';
  circle.onmouseover = () => {
    circle.style.backgroundColor = getRandomColor();
  }
  body.appendChild(circle);
}