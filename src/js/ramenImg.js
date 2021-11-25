import RamenImg from '../assets/ramen.png'

const content = (() => {
  const element = new Image()

  element.src = RamenImg
  element.alt = 'Ramen'

  return { element }
})()

export default content
