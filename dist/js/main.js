/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/ramen.png":
/*!******************************!*\
  !*** ./src/assets/ramen.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgs/ramen.58fef11d.webp";

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/components/button.js":
/*!*************************************!*\
  !*** ./src/js/components/button.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPrimaryButton": () => (/* binding */ getPrimaryButton)
/* harmony export */ });
const getPrimaryButton = (text, type, action) => {
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


/***/ }),

/***/ "./src/js/components/nav.js":
/*!**********************************!*\
  !*** ./src/js/components/nav.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initNav": () => (/* binding */ initNav)
/* harmony export */ });
/* harmony import */ var _generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generator */ "./src/js/generator.js");


const noScroll = () => {
  window.scrollTo(0, 0)
}

const initNav = () => {
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
      _generator__WEBPACK_IMPORTED_MODULE_0__["default"].generateContent(navLink.getAttribute('data-link'))
    })
  })
}


/***/ }),

/***/ "./src/js/contents/contact.js":
/*!************************************!*\
  !*** ./src/js/contents/contact.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/button */ "./src/js/components/button.js");


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

    form.appendChild((0,_components_button__WEBPACK_IMPORTED_MODULE_0__.getPrimaryButton)('Send message', 'submit', null))

    return form
  }

  element.appendChild(_getContactText())
  element.appendChild(_getForm())

  return { element }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (content);


/***/ }),

/***/ "./src/js/contents/home.js":
/*!*********************************!*\
  !*** ./src/js/contents/home.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ramenImg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ramenImg */ "./src/js/ramenImg.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/button */ "./src/js/components/button.js");
/* harmony import */ var _generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generator */ "./src/js/generator.js");




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
    (0,_components_button__WEBPACK_IMPORTED_MODULE_1__.getPrimaryButton)('Order Now', 'button', () =>
      _generator__WEBPACK_IMPORTED_MODULE_2__["default"].generateContent('menu')
    )
  )

  const homeImg = document.createElement('div')
  homeImg.className = 'home__img'
  homeImg.appendChild((0,_ramenImg__WEBPACK_IMPORTED_MODULE_0__.getImage)())

  element.appendChild(homeText)
  element.appendChild(homeImg)

  return { element }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (content);


/***/ }),

/***/ "./src/js/contents/menu.js":
/*!*********************************!*\
  !*** ./src/js/contents/menu.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ramenImg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ramenImg */ "./src/js/ramenImg.js");


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
    cardImg.appendChild((0,_ramenImg__WEBPACK_IMPORTED_MODULE_0__.getImage)())

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (content);


/***/ }),

/***/ "./src/js/generator.js":
/*!*****************************!*\
  !*** ./src/js/generator.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _contents_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contents/home */ "./src/js/contents/home.js");
/* harmony import */ var _contents_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contents/menu */ "./src/js/contents/menu.js");
/* harmony import */ var _contents_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contents/contact */ "./src/js/contents/contact.js");




const contentGenerator = (() => {
  const contentElement = document.querySelector('#content')
  const navLinks = Array.from(document.querySelectorAll('.nav__item__link'))

  const pages = {
    home: _contents_home__WEBPACK_IMPORTED_MODULE_0__["default"].element,
    menu: _contents_menu__WEBPACK_IMPORTED_MODULE_1__["default"].element,
    'contact-us': _contents_contact__WEBPACK_IMPORTED_MODULE_2__["default"].element,
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

    const node = pages[page]
    contentElement.appendChild(node)
    node.classList.add('animation-bounce')
  }

  return { generateContent }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contentGenerator);


/***/ }),

/***/ "./src/js/ramenImg.js":
/*!****************************!*\
  !*** ./src/js/ramenImg.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getImage": () => (/* binding */ getImage)
/* harmony export */ });
/* harmony import */ var _assets_ramen_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/ramen.png */ "./src/assets/ramen.png");
/* harmony import */ var _assets_ramen_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_ramen_png__WEBPACK_IMPORTED_MODULE_0__);


const getImage = () => {
  const element = new Image()

  element.src = (_assets_ramen_png__WEBPACK_IMPORTED_MODULE_0___default())
  element.alt = 'Ramen'

  return element
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../assets/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/index.scss */ "./src/scss/index.scss");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/nav */ "./src/js/components/nav.js");
/* harmony import */ var _generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generator */ "./src/js/generator.js");




(0,_components_nav__WEBPACK_IMPORTED_MODULE_1__.initNav)()
_generator__WEBPACK_IMPORTED_MODULE_2__["default"].generateContent('home')

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRCxpRUFBZSxnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDVzs7QUFFbkM7QUFDUDs7QUFFQSxnQkFBZ0IsMERBQVE7QUFDeEI7O0FBRUE7QUFDQTs7Ozs7OztVQ1RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmMkI7QUFDZTtBQUNBOztBQUUxQyx3REFBTztBQUNQLGtFQUFnQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvcmFtZW4ucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2pzL2NvbXBvbmVudHMvYnV0dG9uLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9jb21wb25lbnRzL25hdi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvY29udGVudHMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvY29udGVudHMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvY29udGVudHMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvZ2VuZXJhdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9yYW1lbkltZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWdzL3JhbWVuLjU4ZmVmMTFkLndlYnBcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgY29uc3QgZ2V0UHJpbWFyeUJ1dHRvbiA9ICh0ZXh0LCB0eXBlLCBhY3Rpb24pID0+IHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4tLXByaW1hcnknKVxuICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgdHlwZSlcblxuICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBib3guY2xhc3NOYW1lID0gJ2JveCdcbiAgYm94LnRleHRDb250ZW50ID0gdGV4dFxuXG4gIGNvbnN0IGJvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGJvcmRlci5jbGFzc05hbWUgPSAnYm9yZGVyJ1xuXG4gIGlmIChhY3Rpb24gIT0gbnVsbCkge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFjdGlvbilcbiAgfVxuXG4gIGJ1dHRvbi5hcHBlbmRDaGlsZChib3gpXG4gIGJ1dHRvbi5hcHBlbmRDaGlsZChib3JkZXIpXG5cbiAgcmV0dXJuIGJ1dHRvblxufVxuIiwiaW1wb3J0IENvbnRlbnRHZW5lcmF0b3IgZnJvbSAnLi4vZ2VuZXJhdG9yJ1xuXG5jb25zdCBub1Njcm9sbCA9ICgpID0+IHtcbiAgd2luZG93LnNjcm9sbFRvKDAsIDApXG59XG5cbmV4cG9ydCBjb25zdCBpbml0TmF2ID0gKCkgPT4ge1xuICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tbWVudScpXG4gIGNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19saXN0JylcbiAgY29uc3QgbmF2TGlua3MgPSBuYXZMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZfX2l0ZW1fX2xpbmsnKVxuXG4gIGNvbnN0IF9hZGRNb2JpbGVOYXYgPSAoKSA9PiB7XG4gICAgbmF2TGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdtb2JpbGUtaGlkZGVuJylcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi0tYWN0aXZlJylcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgbm9TY3JvbGwpXG4gIH1cblxuICBjb25zdCBfcmVtb3ZlTW9iaWxlTmF2ID0gKCkgPT4ge1xuICAgIG5hdkxpc3QuY2xhc3NMaXN0LmFkZCgnbW9iaWxlLWhpZGRlbicpXG4gICAgbWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdidG4tLWFjdGl2ZScpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG5vU2Nyb2xsKVxuICB9XG5cbiAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAobmF2TGlzdC5jbGFzc0xpc3QuY29udGFpbnMoJ21vYmlsZS1oaWRkZW4nKSkgX2FkZE1vYmlsZU5hdigpXG4gICAgZWxzZSBfcmVtb3ZlTW9iaWxlTmF2KClcbiAgfSlcblxuICBuYXZMaW5rcy5mb3JFYWNoKChuYXZMaW5rKSA9PiB7XG4gICAgbmF2TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgaWYgKCFuYXZMaXN0LmNsYXNzTGlzdC5jb250YWlucygnbW9iaWxlLWhpZGRlbicpKSBfcmVtb3ZlTW9iaWxlTmF2KClcbiAgICAgIENvbnRlbnRHZW5lcmF0b3IuZ2VuZXJhdGVDb250ZW50KG5hdkxpbmsuZ2V0QXR0cmlidXRlKCdkYXRhLWxpbmsnKSlcbiAgICB9KVxuICB9KVxufVxuIiwiaW1wb3J0IHsgZ2V0UHJpbWFyeUJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uJ1xuXG5jb25zdCBjb250ZW50ID0gKCgpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gJ2NvbnRhY3QnXG5cbiAgY29uc3QgX2dldENvbnRhY3RUZXh0ID0gKCkgPT4ge1xuICAgIGNvbnN0IF9jcmVhdGVDb250YWN0SW5mbyA9IChodG1sKSA9PiB7XG4gICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICBwLmNsYXNzTGlzdC5hZGQoJ3N1YmhlYWRpbmcnKVxuICAgICAgcC5jbGFzc0xpc3QuYWRkKCdjb250YWN0X19pbmZvJylcbiAgICAgIHAuaW5uZXJIVE1MID0gaHRtbFxuXG4gICAgICByZXR1cm4gcFxuICAgIH1cblxuICAgIGNvbnN0IGNvbnRhY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWN0VGV4dC5jbGFzc05hbWUgPSAnY29udGFjdF9fdGV4dCdcblxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIGgxLmlubmVySFRNTCA9ICdHZXQgaW4gPHNwYW4gY2xhc3M9XCJoZWFkaW5nLWJveFwiPnRvdWNoITwvc3Bhbj4nXG5cbiAgICBjb250YWN0VGV4dC5hcHBlbmRDaGlsZChoMSlcbiAgICBjb250YWN0VGV4dC5hcHBlbmRDaGlsZChcbiAgICAgIF9jcmVhdGVDb250YWN0SW5mbygnPHNwYW4gY2xhc3M9XCJib2xkXCI+Q2FsbCB1czo8L3NwYW4+IDkxNy01NDgtNzU1MScpXG4gICAgKVxuICAgIGNvbnRhY3RUZXh0LmFwcGVuZENoaWxkKFxuICAgICAgX2NyZWF0ZUNvbnRhY3RJbmZvKFxuICAgICAgICAnPHNwYW4gY2xhc3M9XCJib2xkXCI+QWRkcmVzczo8L3NwYW4+PGJyIC8+MTIyMCBEdW5jYW4gQXZlbnVlPGJyIC8+TmV3IFlvcmsgTlkgMTAwMTEnXG4gICAgICApXG4gICAgKVxuICAgIHJldHVybiBjb250YWN0VGV4dFxuICB9XG5cbiAgY29uc3QgX2dldEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgX2NyZWF0ZUxhYmVsID0gKGlkLCBsYWJlbFRleHQpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgbGFiZWwuY2xhc3NOYW1lID0gJ2NvbnRhY3RfX2xhYmVsJ1xuICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHRcbiAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgaWQpXG5cbiAgICAgIHJldHVybiBsYWJlbFxuICAgIH1cblxuICAgIGNvbnN0IF9jcmVhdGVJbnB1dCA9IChpZCwgdHlwZSwgbGFiZWxUZXh0KSA9PiB7XG4gICAgICBjb25zdCBsYWJlbCA9IF9jcmVhdGVMYWJlbChpZCwgbGFiZWxUZXh0KVxuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICBpbnB1dC50eXBlID0gdHlwZVxuICAgICAgaW5wdXQuaWQgPSBpZFxuICAgICAgaW5wdXQubmFtZSA9IGlkXG4gICAgICBpbnB1dC5jbGFzc05hbWUgPSAnY29udGFjdF9faW5wdXQnXG4gICAgICBpbnB1dC5yZXF1aXJlZCA9IHRydWVcblxuICAgICAgcmV0dXJuIHsgbGFiZWwsIGlucHV0IH1cbiAgICB9XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgZm9ybS5hY3Rpb24gPSAnbWFpbHRvOnRlc3RAcmFtZW5jb21wYW55LmNvbSdcbiAgICBmb3JtLmNsYXNzTmFtZSA9ICdjb250YWN0X19mb3JtJ1xuXG4gICAgY29uc3QgbmFtZUlucHV0ID0gX2NyZWF0ZUlucHV0KCduYW1lJywgJ3RleHQnLCAnWW91ciBOYW1lOicpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChuYW1lSW5wdXQubGFiZWwpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChuYW1lSW5wdXQuaW5wdXQpXG5cbiAgICBjb25zdCBlbWFpbElucHV0ID0gX2NyZWF0ZUlucHV0KCdlbWFpbCcsICdlbWFpbCcsICdFbWFpbDonKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZW1haWxJbnB1dC5sYWJlbClcbiAgICBmb3JtLmFwcGVuZENoaWxkKGVtYWlsSW5wdXQuaW5wdXQpXG5cbiAgICBjb25zdCBtZXNzYWdlTGFiZWwgPSBfY3JlYXRlTGFiZWwoJ21lc3NhZ2UnLCAnTWVzc2FnZTonKVxuICAgIGNvbnN0IG1lc3NhZ2VBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIG1lc3NhZ2VBcmVhLm5hbWUgPSAnbWVzc2FnZSdcbiAgICBtZXNzYWdlQXJlYS5pZCA9ICdtZXNzYWdlJ1xuICAgIG1lc3NhZ2VBcmVhLmNsYXNzTmFtZSA9ICdjb250YWN0X19tZXNzYWdlJ1xuICAgIG1lc3NhZ2VBcmVhLnBsYWNlaG9sZGVyID0gJ01lc3NhZ2UnXG4gICAgbWVzc2FnZUFyZWEucmVxdWlyZWQgPSB0cnVlXG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKG1lc3NhZ2VMYWJlbClcbiAgICBmb3JtLmFwcGVuZENoaWxkKG1lc3NhZ2VBcmVhKVxuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChnZXRQcmltYXJ5QnV0dG9uKCdTZW5kIG1lc3NhZ2UnLCAnc3VibWl0JywgbnVsbCkpXG5cbiAgICByZXR1cm4gZm9ybVxuICB9XG5cbiAgZWxlbWVudC5hcHBlbmRDaGlsZChfZ2V0Q29udGFjdFRleHQoKSlcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChfZ2V0Rm9ybSgpKVxuXG4gIHJldHVybiB7IGVsZW1lbnQgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50XG4iLCJpbXBvcnQgeyBnZXRJbWFnZSB9IGZyb20gJy4uL3JhbWVuSW1nJ1xuaW1wb3J0IHsgZ2V0UHJpbWFyeUJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uJ1xuaW1wb3J0IENvbnRlbnRHZW5lcmF0b3IgZnJvbSAnLi4vZ2VuZXJhdG9yJ1xuXG5jb25zdCBjb250ZW50ID0gKCgpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gJ2hvbWUnXG5cbiAgY29uc3QgaG9tZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBob21lVGV4dC5jbGFzc05hbWUgPSAnaG9tZV9fdGV4dCdcblxuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgaDEuaW5uZXJIVE1MID0gJ1Rhc3RlIG9mIDxzcGFuIGNsYXNzPVwiaGVhZGluZy1ib3hcIj5KYXBhbjwvc3Bhbj4nXG5cbiAgY29uc3Qgc3ViaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBzdWJoZWFkaW5nLmNsYXNzTmFtZSA9ICdzdWJoZWFkaW5nJ1xuICBzdWJoZWFkaW5nLnRleHRDb250ZW50ID1cbiAgICAnWW91ciBGYXZvcml0ZSBSYW1lbiBGb3IgRGVsaXZlcnkgYW5kIFRha2UtT3V0IHdpdGggSnVzdCBBIENsaWNrISdcblxuICBob21lVGV4dC5hcHBlbmRDaGlsZChoMSlcbiAgaG9tZVRleHQuYXBwZW5kQ2hpbGQoc3ViaGVhZGluZylcbiAgaG9tZVRleHQuYXBwZW5kQ2hpbGQoXG4gICAgZ2V0UHJpbWFyeUJ1dHRvbignT3JkZXIgTm93JywgJ2J1dHRvbicsICgpID0+XG4gICAgICBDb250ZW50R2VuZXJhdG9yLmdlbmVyYXRlQ29udGVudCgnbWVudScpXG4gICAgKVxuICApXG5cbiAgY29uc3QgaG9tZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGhvbWVJbWcuY2xhc3NOYW1lID0gJ2hvbWVfX2ltZydcbiAgaG9tZUltZy5hcHBlbmRDaGlsZChnZXRJbWFnZSgpKVxuXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaG9tZVRleHQpXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaG9tZUltZylcblxuICByZXR1cm4geyBlbGVtZW50IH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgY29udGVudFxuIiwiaW1wb3J0IHsgZ2V0SW1hZ2UgfSBmcm9tICcuLi9yYW1lbkltZydcblxuY29uc3QgY29udGVudCA9ICgoKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9ICdtZW51J1xuXG4gIGNvbnN0IF9jcmVhdGVQcmljZVdyYXBwZXIgPSAoeyBzaXplLCBwcmljZSB9KSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgd3JhcHBlci5jbGFzc05hbWUgPSAnbWVudV9fY2FyZF9fcHJpY2Utd3JhcHBlcidcblxuICAgIGNvbnN0IHNpemVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgc2l6ZUVsZW1lbnQuY2xhc3NOYW1lID0gJ21lbnVfX2NhcmRfX3NpemUnXG4gICAgc2l6ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBzaXplXG5cbiAgICBjb25zdCBwcmljZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwcmljZUVsZW1lbnQuY2xhc3NOYW1lID0gJ21lbnVfX2NhcmRfX3ByaWNlJ1xuICAgIHByaWNlRWxlbWVudC50ZXh0Q29udGVudCA9IHByaWNlXG5cbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHNpemVFbGVtZW50KVxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocHJpY2VFbGVtZW50KVxuXG4gICAgcmV0dXJuIHdyYXBwZXJcbiAgfVxuXG4gIGNvbnN0IF9jcmVhdGVDYXJkID0gKG5hbWUsIGRlc2MsIHByaWNlcywgcHJpbWFyeSkgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY2FyZC5jbGFzc05hbWUgPSAnbWVudV9fY2FyZCdcbiAgICBpZiAocHJpbWFyeSkgY2FyZC5jbGFzc0xpc3QuYWRkKCdtZW51X19jYXJkLS1wcmltYXJ5JylcblxuICAgIGNvbnN0IGNhcmRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNhcmRJbWcuY2xhc3NMaXN0ID0gJ21lbnVfX2NhcmRfX2ltZydcbiAgICBjYXJkSW1nLmFwcGVuZENoaWxkKGdldEltYWdlKCkpXG5cbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICBoMy5jbGFzc05hbWUgPSAnbWVudV9fY2FyZF9fdGl0bGUnXG4gICAgaDMudGV4dENvbnRlbnQgPSBuYW1lXG5cbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcC5jbGFzc05hbWUgPSAnbWVudV9fY2FyZF9fZGVzYydcbiAgICBwLnRleHRDb250ZW50ID0gZGVzY1xuXG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkSW1nKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaDMpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChwKVxuXG4gICAgZm9yIChsZXQgcHJpY2VPYmogb2YgcHJpY2VzKSB7XG4gICAgICBjYXJkLmFwcGVuZENoaWxkKF9jcmVhdGVQcmljZVdyYXBwZXIocHJpY2VPYmopKVxuICAgIH1cblxuICAgIHJldHVybiBjYXJkXG4gIH1cblxuICBlbGVtZW50LmFwcGVuZENoaWxkKFxuICAgIF9jcmVhdGVDYXJkKFxuICAgICAgJ1Nob3l1IFJhbWVuJyxcbiAgICAgICdDcmVhbXkgcG9yayBicm90aCB3aXRoIHNveSBzYXVjZSBmbGF2b3InLFxuICAgICAgW1xuICAgICAgICB7IHNpemU6ICdTbWFsbCcsIHByaWNlOiAnJDgnIH0sXG4gICAgICAgIHsgc2l6ZTogJ0xhcmdlJywgcHJpY2U6ICckMTInIH0sXG4gICAgICBdLFxuICAgICAgZmFsc2VcbiAgICApXG4gIClcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChcbiAgICBfY3JlYXRlQ2FyZChcbiAgICAgICdNaXNvIFJhbWVuJyxcbiAgICAgICdNaXNvIGZsYXZvcmVkIHBvcmsgc291cCBzZXJ2ZWQgd2l0aCB2ZWdldGFibGVzJyxcbiAgICAgIFtcbiAgICAgICAgeyBzaXplOiAnU21hbGwnLCBwcmljZTogJyQxMCcgfSxcbiAgICAgICAgeyBzaXplOiAnTGFyZ2UnLCBwcmljZTogJyQxNScgfSxcbiAgICAgIF0sXG4gICAgICB0cnVlXG4gICAgKVxuICApXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgX2NyZWF0ZUNhcmQoXG4gICAgICAnU2hpbyBSYW1lbicsXG4gICAgICAnQ3JlYW15IHBvcmsgYnJvdGggd2l0aCBzYWx0IGZsYXZvcicsXG4gICAgICBbXG4gICAgICAgIHsgc2l6ZTogJ1NtYWxsJywgcHJpY2U6ICckMTInIH0sXG4gICAgICAgIHsgc2l6ZTogJ0xhcmdlJywgcHJpY2U6ICckMTYnIH0sXG4gICAgICBdLFxuICAgICAgZmFsc2VcbiAgICApXG4gIClcblxuICByZXR1cm4geyBlbGVtZW50IH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgY29udGVudFxuIiwiaW1wb3J0IEhvbWUgZnJvbSAnLi9jb250ZW50cy9ob21lJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9jb250ZW50cy9tZW51J1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9jb250ZW50cy9jb250YWN0J1xuXG5jb25zdCBjb250ZW50R2VuZXJhdG9yID0gKCgpID0+IHtcbiAgY29uc3QgY29udGVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG4gIGNvbnN0IG5hdkxpbmtzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2X19pdGVtX19saW5rJykpXG5cbiAgY29uc3QgcGFnZXMgPSB7XG4gICAgaG9tZTogSG9tZS5lbGVtZW50LFxuICAgIG1lbnU6IE1lbnUuZWxlbWVudCxcbiAgICAnY29udGFjdC11cyc6IENvbnRhY3QuZWxlbWVudCxcbiAgfVxuXG4gIGNvbnN0IF9nZXROYXZMaW5rID0gKHBhZ2UpID0+XG4gICAgbmF2TGlua3MuZmluZCgobmF2TGluaykgPT4gbmF2TGluay5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGluaycpID09IHBhZ2UpXG5cbiAgY29uc3QgX2NsZWFyID0gKCkgPT4ge1xuICAgIG5hdkxpbmtzLmZvckVhY2goKG5hdkxpbmspID0+IHtcbiAgICAgIG5hdkxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnbmF2X19pdGVtX19saW5rLS1hY3RpdmUnKVxuICAgIH0pXG4gICAgY29udGVudEVsZW1lbnQuaW5uZXJIVE1MID0gJydcbiAgfVxuXG4gIGNvbnN0IGdlbmVyYXRlQ29udGVudCA9IChwYWdlKSA9PiB7XG4gICAgX2NsZWFyKClcbiAgICBfZ2V0TmF2TGluayhwYWdlKS5jbGFzc0xpc3QuYWRkKCduYXZfX2l0ZW1fX2xpbmstLWFjdGl2ZScpXG5cbiAgICBjb25zdCBub2RlID0gcGFnZXNbcGFnZV1cbiAgICBjb250ZW50RWxlbWVudC5hcHBlbmRDaGlsZChub2RlKVxuICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnYW5pbWF0aW9uLWJvdW5jZScpXG4gIH1cblxuICByZXR1cm4geyBnZW5lcmF0ZUNvbnRlbnQgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50R2VuZXJhdG9yXG4iLCJpbXBvcnQgUmFtZW5JbWcgZnJvbSAnLi4vYXNzZXRzL3JhbWVuLnBuZydcblxuZXhwb3J0IGNvbnN0IGdldEltYWdlID0gKCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gbmV3IEltYWdlKClcblxuICBlbGVtZW50LnNyYyA9IFJhbWVuSW1nXG4gIGVsZW1lbnQuYWx0ID0gJ1JhbWVuJ1xuXG4gIHJldHVybiBlbGVtZW50XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsICsgXCIuLi9hc3NldHMvXCI7IiwiaW1wb3J0ICcuLi9zY3NzL2luZGV4LnNjc3MnXG5pbXBvcnQgeyBpbml0TmF2IH0gZnJvbSAnLi9jb21wb25lbnRzL25hdidcbmltcG9ydCBDb250ZW50R2VuZXJhdG9yIGZyb20gJy4vZ2VuZXJhdG9yJ1xuXG5pbml0TmF2KClcbkNvbnRlbnRHZW5lcmF0b3IuZ2VuZXJhdGVDb250ZW50KCdob21lJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==