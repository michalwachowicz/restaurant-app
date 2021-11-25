import { getImage } from '../ramenImg'
import { getPrimaryButton } from '../components/button'
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

  homeText.appendChild(h1)
  homeText.appendChild(subheading)
  homeText.appendChild(
    getPrimaryButton('Order Now', 'button', () =>
      ContentGenerator.generateContent('menu')
    )
  )

  const homeImg = document.createElement('div')
  homeImg.className = 'home__img'
  homeImg.appendChild(getImage())

  element.appendChild(homeText)
  element.appendChild(homeImg)

  return { element }
})()

export default content
