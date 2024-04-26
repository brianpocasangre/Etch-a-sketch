function getSize() {
  let n = prompt('Chose any number between 1 and 100 to regenerate the grid?');
  createDivs(n);
}

const main = document.querySelector('#main');

function createDivs(n) {
  main.innerHTML = ` `;
  for (i = 0; i < n; i++) {
    for (e = 0; e < n; e++) {
      main.innerHTML += `<div class="grid"></div>`;
    }
  }
  const divs = Array.from(document.querySelectorAll('.grid'));
  let flex = 960 / n - 5;
  divs.forEach(div => {
    div.style.flexBasis = `${flex}px`;
    div.style.height = `${flex}px`;
  });
  divs.forEach(div => {
    div.addEventListener('mouseover', () => {
      div.style.background = 'black';
    });
  });
}

createDivs(16);
