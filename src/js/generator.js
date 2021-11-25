import Home from './contents/home'
import Menu from './contents/menu'
import Contact from './contents/contact'

const contentGenerator = (() => {
  const contentElement = document.querySelector('#content')
  const navLinks = Array.from(document.querySelectorAll('.nav__item__link'))

  const pages = {
    home: Home.element,
    menu: Menu.element,
    'contact-us': Contact.element,
  }

  const _getNavLink = (page) =>
    navLinks.find((navLink) => navLink.getAttribute('data-link') == page)

  const _clear = () => {
    navLinks.forEach((navLink) => {
      navLink.classList.remove('nav__item__link--active')
    })
    contentElement.innerHTML = ''
  }

  const generateContent = (page) => {
    _clear()
    _getNavLink(page).classList.add('nav__item__link--active')

    contentElement.appendChild(pages[page])
  }

  return { generateContent }
})()

export default contentGenerator
