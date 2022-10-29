function changeCard(event) {
  const card = event.currentTarget.getAttribute('data-card')
  event.currentTarget.setAttribute(
    'data-card',
    card === 'explorer' ? 'ignite' : 'explorer',
  )
}
