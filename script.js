const card = document.getElementById('card')

function changeCard() {
  const type = card.getAttribute('data-card')
  card.setAttribute('data-card', type === 'explorer' ? 'ignite' : 'explorer')
}

const pos = { x: 0 }

const saveCursorPosition = function (x) {
  const newPosX = (x - window.innerWidth / 2) / 25

  if (x >= window.innerWidth / 2 - 130 && x < window.innerWidth / 2 + 130) {
    pos.x = '0.5deg'
  } else if (newPosX > -28 && newPosX < 28) {
    pos.x = newPosX.toFixed(2)
  }

  card.style.setProperty('--x', `${pos.x}deg`)
}

document.addEventListener('mousemove', (e) => {
  saveCursorPosition(e.clientX)
})
