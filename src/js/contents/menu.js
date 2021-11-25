import { getImage } from '../ramenImg'

const content = (() => {
  const element = document.createElement('div')
  element.className = 'menu'

  const _createPriceWrapper = ({ size, price }) => {
    const wrapper = document.createElement('div')
    wrapper.className = 'menu__card__price-wrapper'

    const sizeElement = document.createElement('p')
    sizeElement.className = 'menu__card__size'
    sizeElement.textContent = size

    const priceElement = document.createElement('p')
    priceElement.className = 'menu__card__price'
    priceElement.textContent = price

    wrapper.appendChild(sizeElement)
    wrapper.appendChild(priceElement)

    return wrapper
  }

  const _createCard = (name, desc, prices, primary) => {
    const card = document.createElement('div')

    card.className = 'menu__card'
    if (primary) card.classList.add('menu__card--primary')

    const cardImg = document.createElement('div')
    cardImg.classList = 'menu__card__img'
    cardImg.appendChild(getImage())

    const h3 = document.createElement('h3')
    h3.className = 'menu__card__title'
    h3.textContent = name

    const p = document.createElement('p')
    p.className = 'menu__card__desc'
    p.textContent = desc

    card.appendChild(cardImg)
    card.appendChild(h3)
    card.appendChild(p)

    for (let priceObj of prices) {
      card.appendChild(_createPriceWrapper(priceObj))
    }

    return card
  }

  element.appendChild(
    _createCard(
      'Shoyu Ramen',
      'Creamy pork broth with soy sauce flavor',
      [
        { size: 'Small', price: '$8' },
        { size: 'Large', price: '$12' },
      ],
      false
    )
  )
  element.appendChild(
    _createCard(
      'Miso Ramen',
      'Miso flavored pork soup served with vegetables',
      [
        { size: 'Small', price: '$10' },
        { size: 'Large', price: '$15' },
      ],
      true
    )
  )
  element.appendChild(
    _createCard(
      'Shio Ramen',
      'Creamy pork broth with salt flavor',
      [
        { size: 'Small', price: '$12' },
        { size: 'Large', price: '$16' },
      ],
      false
    )
  )

  return { element }
})()

export default content
