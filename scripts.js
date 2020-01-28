const addSqrBtn = document.querySelector('div#controller button');
const body = document.getElementById('squares');

addSqrBtn.onclick = () => {
  const square = document.createElement('div');
  square.setAttribute('class', 'sqr');
  square.style.background = '#f00';
  square.style.width = '100px';
  square.style.height = '100px';
  body.appendChild(square);
};