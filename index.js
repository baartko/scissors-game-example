function addEvents() {
  const buttonsRight = document.querySelectorAll('.buttons-right .buttons button');
  const buttonsLeft = document.querySelectorAll('.buttons-left .buttons button');
  const selection = {};

  [...buttonsLeft, ...buttonsRight].forEach(btn => {
    btn.addEventListener('click', function (ev) {
      const el = ev.target;
      const text = el.textContent
      const isReset = text === 'RESET';
      const type = el.classList.contains('p1') ? 'p1' : 'p2';

      selection[type] = isReset ? "" : text;
      el.parentNode.previousElementSibling.textContent = isReset ? '()' : text;

      calculateResult(selection)
    })
  })
}

function calculateResult(values) {
  console.log(values)
}

addEvents()