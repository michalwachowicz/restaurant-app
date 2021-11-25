export const getPrimaryButton = (text, type, action) => {
  const button = document.createElement('button')
  button.classList.add('btn')
  button.classList.add('btn--primary')
  button.setAttribute('type', type)

  const box = document.createElement('div')
  box.className = 'box'
  box.textContent = text

  const border = document.createElement('div')
  border.className = 'border'

  if (action != null) {
    button.addEventListener('click', action)
  }

  button.appendChild(box)
  button.appendChild(border)

  return button
}
