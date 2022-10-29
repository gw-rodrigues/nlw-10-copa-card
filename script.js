const card = document.getElementById('card')

function changeCard() {
  const type = card.getAttribute('data-card')
  card.setAttribute('data-card', type === 'explorer' ? 'ignite' : 'explorer')
}
