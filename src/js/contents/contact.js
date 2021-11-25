import { getPrimaryButton } from '../components/button'

const content = (() => {
  const element = document.createElement('div')
  element.className = 'contact'

  const _getContactText = () => {
    const _createContactInfo = (html) => {
      const p = document.createElement('p')
      p.classList.add('subheading')
      p.classList.add('contact__info')
      p.innerHTML = html

      return p
    }

    const contactText = document.createElement('div')
    contactText.className = 'contact__text'

    const h1 = document.createElement('h1')
    h1.innerHTML = 'Get in <span class="heading-box">touch!</span>'

    contactText.appendChild(h1)
    contactText.appendChild(
      _createContactInfo('<span class="bold">Call us:</span> 917-548-7551')
    )
    contactText.appendChild(
      _createContactInfo(
        '<span class="bold">Address:</span><br />1220 Duncan Avenue<br />New York NY 10011'
      )
    )
    return contactText
  }

  const _getForm = () => {
    const _createLabel = (id, labelText) => {
      const label = document.createElement('label')
      label.className = 'contact__label'
      label.textContent = labelText
      label.setAttribute('for', id)

      return label
    }

    const _createInput = (id, type, labelText) => {
      const label = _createLabel(id, labelText)
      const input = document.createElement('input')
      input.type = type
      input.id = id
      input.name = id
      input.className = 'contact__input'
      input.required = true

      return { label, input }
    }

    const form = document.createElement('form')
    form.action = 'mailto:test@ramencompany.com'
    form.className = 'contact__form'

    const nameInput = _createInput('name', 'text', 'Your Name:')
    form.appendChild(nameInput.label)
    form.appendChild(nameInput.input)

    const emailInput = _createInput('email', 'email', 'Email:')
    form.appendChild(emailInput.label)
    form.appendChild(emailInput.input)

    const messageLabel = _createLabel('message', 'Message:')
    const messageArea = document.createElement('textarea')
    messageArea.name = 'message'
    messageArea.id = 'message'
    messageArea.className = 'contact__message'
    messageArea.placeholder = 'Message'
    messageArea.required = true

    form.appendChild(messageLabel)
    form.appendChild(messageArea)

    form.appendChild(getPrimaryButton('Send message', 'submit', null))

    return form
  }

  element.appendChild(_getContactText())
  element.appendChild(_getForm())

  return { element }
})()

export default content
