const main = document.querySelector('#main');

function createDivs(n) {
  for (i = 0; i < n; i++) {
    for (e = 0; e < n; e++) {
      main.innerHTML += `<div class="grid"></div>`;
    }
  }
  const divs = Array.from(document.querySelectorAll('.grid'));
  divs.forEach(div => {
    div.addEventListener('mouseover', () => {
      div.style.background = 'black';
    });
  });
}

createDivs(16);
