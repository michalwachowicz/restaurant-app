import RamenImage from '../ramenImg'
import ContentGenerator from '../generator'

const content = (() => {
  const element = document.createElement('div')
  element.className = 'home'

  const homeText = document.createElement('div')
  homeText.className = 'home__text'

  const h1 = document.createElement('h1')
  h1.innerHTML = 'Taste of <span class="heading-box">Japan</span>'

  const subheading = document.createElement('p')
  subheading.className = 'subheading'
  subheading.textContent =
    'Your Favorite Ramen For Delivery and Take-Out with Just A Click!'

  const button = document.createElement('button')
  button.classList.add('btn')
  button.classList.add('btn--primary')
  button.setAttribute('type', 'button')
  button.textContent = 'Order Now'
  button.addEventListener('click', () =>
    ContentGenerator.generateContent('menu')
  )

  homeText.appendChild(h1)
  homeText.appendChild(subheading)
  homeText.appendChild(button)

  const homeImg = document.createElement('div')
  homeImg.className = 'home__img'
  homeImg.appendChild(RamenImage.element)

  element.appendChild(homeText)
  element.appendChild(homeImg)

  return { element }
})()

export default content
