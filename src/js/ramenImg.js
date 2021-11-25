import RamenImg from '../assets/ramen.png'

export const getImage = () => {
  const element = new Image()

  element.src = RamenImg
  element.alt = 'Ramen'

  return element
}
