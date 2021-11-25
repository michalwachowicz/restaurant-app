import ContentGenerator from '../generator'

const noScroll = () => {
  window.scrollTo(0, 0)
}

export const initNav = () => {
  const menuBtn = document.querySelector('.btn--menu')
  const navList = document.querySelector('.nav__list')
  const navLinks = navList.querySelectorAll('.nav__item__link')

  const _addMobileNav = () => {
    navList.classList.remove('mobile-hidden')
    menuBtn.classList.add('btn--active')
    window.addEventListener('scroll', noScroll)
  }

  const _removeMobileNav = () => {
    navList.classList.add('mobile-hidden')
    menuBtn.classList.remove('btn--active')
    window.removeEventListener('scroll', noScroll)
  }

  menuBtn.addEventListener('click', () => {
    if (navList.classList.contains('mobile-hidden')) _addMobileNav()
    else _removeMobileNav()
  })

  navLinks.forEach((navLink) => {
    navLink.addEventListener('click', (e) => {
      e.preventDefault()

      if (!navList.classList.contains('mobile-hidden')) _removeMobileNav()
      ContentGenerator.generateContent(navLink.getAttribute('data-link'))
    })
  })
}
