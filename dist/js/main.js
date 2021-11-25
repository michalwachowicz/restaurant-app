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

    contentElement.appendChild(pages[page])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVc7QUFDWCxDQUFDOztBQUVELGlFQUFlLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENXOztBQUVuQztBQUNQOztBQUVBLGdCQUFnQiwwREFBUTtBQUN4Qjs7QUFFQTtBQUNBOzs7Ozs7O1VDVEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2YyQjtBQUNlO0FBQ0E7O0FBRTFDLHdEQUFPO0FBQ1Asa0VBQWdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9yYW1lbi5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3Njc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvY29tcG9uZW50cy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2pzL2NvbXBvbmVudHMvbmF2LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9jb250ZW50cy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9jb250ZW50cy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9jb250ZW50cy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9nZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2pzL3JhbWVuSW1nLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZ3MvcmFtZW4uNThmZWYxMWQud2VicFwiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBjb25zdCBnZXRQcmltYXJ5QnV0dG9uID0gKHRleHQsIHR5cGUsIGFjdGlvbikgPT4ge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bi0tcHJpbWFyeScpXG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB0eXBlKVxuXG4gIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGJveC5jbGFzc05hbWUgPSAnYm94J1xuICBib3gudGV4dENvbnRlbnQgPSB0ZXh0XG5cbiAgY29uc3QgYm9yZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYm9yZGVyLmNsYXNzTmFtZSA9ICdib3JkZXInXG5cbiAgaWYgKGFjdGlvbiAhPSBudWxsKSB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWN0aW9uKVxuICB9XG5cbiAgYnV0dG9uLmFwcGVuZENoaWxkKGJveClcbiAgYnV0dG9uLmFwcGVuZENoaWxkKGJvcmRlcilcblxuICByZXR1cm4gYnV0dG9uXG59XG4iLCJpbXBvcnQgQ29udGVudEdlbmVyYXRvciBmcm9tICcuLi9nZW5lcmF0b3InXG5cbmNvbnN0IG5vU2Nyb2xsID0gKCkgPT4ge1xuICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbn1cblxuZXhwb3J0IGNvbnN0IGluaXROYXYgPSAoKSA9PiB7XG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLS1tZW51JylcbiAgY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2xpc3QnKVxuICBjb25zdCBuYXZMaW5rcyA9IG5hdkxpc3QucXVlcnlTZWxlY3RvckFsbCgnLm5hdl9faXRlbV9fbGluaycpXG5cbiAgY29uc3QgX2FkZE1vYmlsZU5hdiA9ICgpID0+IHtcbiAgICBuYXZMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ21vYmlsZS1oaWRkZW4nKVxuICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnYnRuLS1hY3RpdmUnKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBub1Njcm9sbClcbiAgfVxuXG4gIGNvbnN0IF9yZW1vdmVNb2JpbGVOYXYgPSAoKSA9PiB7XG4gICAgbmF2TGlzdC5jbGFzc0xpc3QuYWRkKCdtb2JpbGUtaGlkZGVuJylcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi0tYWN0aXZlJylcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgbm9TY3JvbGwpXG4gIH1cblxuICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChuYXZMaXN0LmNsYXNzTGlzdC5jb250YWlucygnbW9iaWxlLWhpZGRlbicpKSBfYWRkTW9iaWxlTmF2KClcbiAgICBlbHNlIF9yZW1vdmVNb2JpbGVOYXYoKVxuICB9KVxuXG4gIG5hdkxpbmtzLmZvckVhY2goKG5hdkxpbmspID0+IHtcbiAgICBuYXZMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICBpZiAoIW5hdkxpc3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2JpbGUtaGlkZGVuJykpIF9yZW1vdmVNb2JpbGVOYXYoKVxuICAgICAgQ29udGVudEdlbmVyYXRvci5nZW5lcmF0ZUNvbnRlbnQobmF2TGluay5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGluaycpKVxuICAgIH0pXG4gIH0pXG59XG4iLCJpbXBvcnQgeyBnZXRQcmltYXJ5QnV0dG9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9idXR0b24nXG5cbmNvbnN0IGNvbnRlbnQgPSAoKCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSAnY29udGFjdCdcblxuICBjb25zdCBfZ2V0Q29udGFjdFRleHQgPSAoKSA9PiB7XG4gICAgY29uc3QgX2NyZWF0ZUNvbnRhY3RJbmZvID0gKGh0bWwpID0+IHtcbiAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgIHAuY2xhc3NMaXN0LmFkZCgnc3ViaGVhZGluZycpXG4gICAgICBwLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RfX2luZm8nKVxuICAgICAgcC5pbm5lckhUTUwgPSBodG1sXG5cbiAgICAgIHJldHVybiBwXG4gICAgfVxuXG4gICAgY29uc3QgY29udGFjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhY3RUZXh0LmNsYXNzTmFtZSA9ICdjb250YWN0X190ZXh0J1xuXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgaDEuaW5uZXJIVE1MID0gJ0dldCBpbiA8c3BhbiBjbGFzcz1cImhlYWRpbmctYm94XCI+dG91Y2ghPC9zcGFuPidcblxuICAgIGNvbnRhY3RUZXh0LmFwcGVuZENoaWxkKGgxKVxuICAgIGNvbnRhY3RUZXh0LmFwcGVuZENoaWxkKFxuICAgICAgX2NyZWF0ZUNvbnRhY3RJbmZvKCc8c3BhbiBjbGFzcz1cImJvbGRcIj5DYWxsIHVzOjwvc3Bhbj4gOTE3LTU0OC03NTUxJylcbiAgICApXG4gICAgY29udGFjdFRleHQuYXBwZW5kQ2hpbGQoXG4gICAgICBfY3JlYXRlQ29udGFjdEluZm8oXG4gICAgICAgICc8c3BhbiBjbGFzcz1cImJvbGRcIj5BZGRyZXNzOjwvc3Bhbj48YnIgLz4xMjIwIER1bmNhbiBBdmVudWU8YnIgLz5OZXcgWW9yayBOWSAxMDAxMSdcbiAgICAgIClcbiAgICApXG4gICAgcmV0dXJuIGNvbnRhY3RUZXh0XG4gIH1cblxuICBjb25zdCBfZ2V0Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBfY3JlYXRlTGFiZWwgPSAoaWQsIGxhYmVsVGV4dCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICBsYWJlbC5jbGFzc05hbWUgPSAnY29udGFjdF9fbGFiZWwnXG4gICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dFxuICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpZClcblxuICAgICAgcmV0dXJuIGxhYmVsXG4gICAgfVxuXG4gICAgY29uc3QgX2NyZWF0ZUlucHV0ID0gKGlkLCB0eXBlLCBsYWJlbFRleHQpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsID0gX2NyZWF0ZUxhYmVsKGlkLCBsYWJlbFRleHQpXG4gICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgIGlucHV0LnR5cGUgPSB0eXBlXG4gICAgICBpbnB1dC5pZCA9IGlkXG4gICAgICBpbnB1dC5uYW1lID0gaWRcbiAgICAgIGlucHV0LmNsYXNzTmFtZSA9ICdjb250YWN0X19pbnB1dCdcbiAgICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZVxuXG4gICAgICByZXR1cm4geyBsYWJlbCwgaW5wdXQgfVxuICAgIH1cblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBmb3JtLmFjdGlvbiA9ICdtYWlsdG86dGVzdEByYW1lbmNvbXBhbnkuY29tJ1xuICAgIGZvcm0uY2xhc3NOYW1lID0gJ2NvbnRhY3RfX2Zvcm0nXG5cbiAgICBjb25zdCBuYW1lSW5wdXQgPSBfY3JlYXRlSW5wdXQoJ25hbWUnLCAndGV4dCcsICdZb3VyIE5hbWU6JylcbiAgICBmb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dC5sYWJlbClcbiAgICBmb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dC5pbnB1dClcblxuICAgIGNvbnN0IGVtYWlsSW5wdXQgPSBfY3JlYXRlSW5wdXQoJ2VtYWlsJywgJ2VtYWlsJywgJ0VtYWlsOicpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChlbWFpbElucHV0LmxhYmVsKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZW1haWxJbnB1dC5pbnB1dClcblxuICAgIGNvbnN0IG1lc3NhZ2VMYWJlbCA9IF9jcmVhdGVMYWJlbCgnbWVzc2FnZScsICdNZXNzYWdlOicpXG4gICAgY29uc3QgbWVzc2FnZUFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgbWVzc2FnZUFyZWEubmFtZSA9ICdtZXNzYWdlJ1xuICAgIG1lc3NhZ2VBcmVhLmlkID0gJ21lc3NhZ2UnXG4gICAgbWVzc2FnZUFyZWEuY2xhc3NOYW1lID0gJ2NvbnRhY3RfX21lc3NhZ2UnXG4gICAgbWVzc2FnZUFyZWEucGxhY2Vob2xkZXIgPSAnTWVzc2FnZSdcbiAgICBtZXNzYWdlQXJlYS5yZXF1aXJlZCA9IHRydWVcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobWVzc2FnZUxhYmVsKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobWVzc2FnZUFyZWEpXG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGdldFByaW1hcnlCdXR0b24oJ1NlbmQgbWVzc2FnZScsICdzdWJtaXQnLCBudWxsKSlcblxuICAgIHJldHVybiBmb3JtXG4gIH1cblxuICBlbGVtZW50LmFwcGVuZENoaWxkKF9nZXRDb250YWN0VGV4dCgpKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKF9nZXRGb3JtKCkpXG5cbiAgcmV0dXJuIHsgZWxlbWVudCB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnRcbiIsImltcG9ydCB7IGdldEltYWdlIH0gZnJvbSAnLi4vcmFtZW5JbWcnXG5pbXBvcnQgeyBnZXRQcmltYXJ5QnV0dG9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9idXR0b24nXG5pbXBvcnQgQ29udGVudEdlbmVyYXRvciBmcm9tICcuLi9nZW5lcmF0b3InXG5cbmNvbnN0IGNvbnRlbnQgPSAoKCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSAnaG9tZSdcblxuICBjb25zdCBob21lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGhvbWVUZXh0LmNsYXNzTmFtZSA9ICdob21lX190ZXh0J1xuXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICBoMS5pbm5lckhUTUwgPSAnVGFzdGUgb2YgPHNwYW4gY2xhc3M9XCJoZWFkaW5nLWJveFwiPkphcGFuPC9zcGFuPidcblxuICBjb25zdCBzdWJoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIHN1YmhlYWRpbmcuY2xhc3NOYW1lID0gJ3N1YmhlYWRpbmcnXG4gIHN1YmhlYWRpbmcudGV4dENvbnRlbnQgPVxuICAgICdZb3VyIEZhdm9yaXRlIFJhbWVuIEZvciBEZWxpdmVyeSBhbmQgVGFrZS1PdXQgd2l0aCBKdXN0IEEgQ2xpY2shJ1xuXG4gIGhvbWVUZXh0LmFwcGVuZENoaWxkKGgxKVxuICBob21lVGV4dC5hcHBlbmRDaGlsZChzdWJoZWFkaW5nKVxuICBob21lVGV4dC5hcHBlbmRDaGlsZChcbiAgICBnZXRQcmltYXJ5QnV0dG9uKCdPcmRlciBOb3cnLCAnYnV0dG9uJywgKCkgPT5cbiAgICAgIENvbnRlbnRHZW5lcmF0b3IuZ2VuZXJhdGVDb250ZW50KCdtZW51JylcbiAgICApXG4gIClcblxuICBjb25zdCBob21lSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgaG9tZUltZy5jbGFzc05hbWUgPSAnaG9tZV9faW1nJ1xuICBob21lSW1nLmFwcGVuZENoaWxkKGdldEltYWdlKCkpXG5cbiAgZWxlbWVudC5hcHBlbmRDaGlsZChob21lVGV4dClcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChob21lSW1nKVxuXG4gIHJldHVybiB7IGVsZW1lbnQgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50XG4iLCJpbXBvcnQgeyBnZXRJbWFnZSB9IGZyb20gJy4uL3JhbWVuSW1nJ1xuXG5jb25zdCBjb250ZW50ID0gKCgpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gJ21lbnUnXG5cbiAgY29uc3QgX2NyZWF0ZVByaWNlV3JhcHBlciA9ICh7IHNpemUsIHByaWNlIH0pID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB3cmFwcGVyLmNsYXNzTmFtZSA9ICdtZW51X19jYXJkX19wcmljZS13cmFwcGVyJ1xuXG4gICAgY29uc3Qgc2l6ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBzaXplRWxlbWVudC5jbGFzc05hbWUgPSAnbWVudV9fY2FyZF9fc2l6ZSdcbiAgICBzaXplRWxlbWVudC50ZXh0Q29udGVudCA9IHNpemVcblxuICAgIGNvbnN0IHByaWNlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHByaWNlRWxlbWVudC5jbGFzc05hbWUgPSAnbWVudV9fY2FyZF9fcHJpY2UnXG4gICAgcHJpY2VFbGVtZW50LnRleHRDb250ZW50ID0gcHJpY2VcblxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoc2l6ZUVsZW1lbnQpXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChwcmljZUVsZW1lbnQpXG5cbiAgICByZXR1cm4gd3JhcHBlclxuICB9XG5cbiAgY29uc3QgX2NyZWF0ZUNhcmQgPSAobmFtZSwgZGVzYywgcHJpY2VzLCBwcmltYXJ5KSA9PiB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjYXJkLmNsYXNzTmFtZSA9ICdtZW51X19jYXJkJ1xuICAgIGlmIChwcmltYXJ5KSBjYXJkLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2NhcmQtLXByaW1hcnknKVxuXG4gICAgY29uc3QgY2FyZEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2FyZEltZy5jbGFzc0xpc3QgPSAnbWVudV9fY2FyZF9faW1nJ1xuICAgIGNhcmRJbWcuYXBwZW5kQ2hpbGQoZ2V0SW1hZ2UoKSlcblxuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIGgzLmNsYXNzTmFtZSA9ICdtZW51X19jYXJkX190aXRsZSdcbiAgICBoMy50ZXh0Q29udGVudCA9IG5hbWVcblxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwLmNsYXNzTmFtZSA9ICdtZW51X19jYXJkX19kZXNjJ1xuICAgIHAudGV4dENvbnRlbnQgPSBkZXNjXG5cbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRJbWcpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChoMylcbiAgICBjYXJkLmFwcGVuZENoaWxkKHApXG5cbiAgICBmb3IgKGxldCBwcmljZU9iaiBvZiBwcmljZXMpIHtcbiAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoX2NyZWF0ZVByaWNlV3JhcHBlcihwcmljZU9iaikpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNhcmRcbiAgfVxuXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgX2NyZWF0ZUNhcmQoXG4gICAgICAnU2hveXUgUmFtZW4nLFxuICAgICAgJ0NyZWFteSBwb3JrIGJyb3RoIHdpdGggc295IHNhdWNlIGZsYXZvcicsXG4gICAgICBbXG4gICAgICAgIHsgc2l6ZTogJ1NtYWxsJywgcHJpY2U6ICckOCcgfSxcbiAgICAgICAgeyBzaXplOiAnTGFyZ2UnLCBwcmljZTogJyQxMicgfSxcbiAgICAgIF0sXG4gICAgICBmYWxzZVxuICAgIClcbiAgKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKFxuICAgIF9jcmVhdGVDYXJkKFxuICAgICAgJ01pc28gUmFtZW4nLFxuICAgICAgJ01pc28gZmxhdm9yZWQgcG9yayBzb3VwIHNlcnZlZCB3aXRoIHZlZ2V0YWJsZXMnLFxuICAgICAgW1xuICAgICAgICB7IHNpemU6ICdTbWFsbCcsIHByaWNlOiAnJDEwJyB9LFxuICAgICAgICB7IHNpemU6ICdMYXJnZScsIHByaWNlOiAnJDE1JyB9LFxuICAgICAgXSxcbiAgICAgIHRydWVcbiAgICApXG4gIClcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChcbiAgICBfY3JlYXRlQ2FyZChcbiAgICAgICdTaGlvIFJhbWVuJyxcbiAgICAgICdDcmVhbXkgcG9yayBicm90aCB3aXRoIHNhbHQgZmxhdm9yJyxcbiAgICAgIFtcbiAgICAgICAgeyBzaXplOiAnU21hbGwnLCBwcmljZTogJyQxMicgfSxcbiAgICAgICAgeyBzaXplOiAnTGFyZ2UnLCBwcmljZTogJyQxNicgfSxcbiAgICAgIF0sXG4gICAgICBmYWxzZVxuICAgIClcbiAgKVxuXG4gIHJldHVybiB7IGVsZW1lbnQgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50XG4iLCJpbXBvcnQgSG9tZSBmcm9tICcuL2NvbnRlbnRzL2hvbWUnXG5pbXBvcnQgTWVudSBmcm9tICcuL2NvbnRlbnRzL21lbnUnXG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL2NvbnRlbnRzL2NvbnRhY3QnXG5cbmNvbnN0IGNvbnRlbnRHZW5lcmF0b3IgPSAoKCkgPT4ge1xuICBjb25zdCBjb250ZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcbiAgY29uc3QgbmF2TGlua3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZfX2l0ZW1fX2xpbmsnKSlcblxuICBjb25zdCBwYWdlcyA9IHtcbiAgICBob21lOiBIb21lLmVsZW1lbnQsXG4gICAgbWVudTogTWVudS5lbGVtZW50LFxuICAgICdjb250YWN0LXVzJzogQ29udGFjdC5lbGVtZW50LFxuICB9XG5cbiAgY29uc3QgX2dldE5hdkxpbmsgPSAocGFnZSkgPT5cbiAgICBuYXZMaW5rcy5maW5kKChuYXZMaW5rKSA9PiBuYXZMaW5rLmdldEF0dHJpYnV0ZSgnZGF0YS1saW5rJykgPT0gcGFnZSlcblxuICBjb25zdCBfY2xlYXIgPSAoKSA9PiB7XG4gICAgbmF2TGlua3MuZm9yRWFjaCgobmF2TGluaykgPT4ge1xuICAgICAgbmF2TGluay5jbGFzc0xpc3QucmVtb3ZlKCduYXZfX2l0ZW1fX2xpbmstLWFjdGl2ZScpXG4gICAgfSlcbiAgICBjb250ZW50RWxlbWVudC5pbm5lckhUTUwgPSAnJ1xuICB9XG5cbiAgY29uc3QgZ2VuZXJhdGVDb250ZW50ID0gKHBhZ2UpID0+IHtcbiAgICBfY2xlYXIoKVxuICAgIF9nZXROYXZMaW5rKHBhZ2UpLmNsYXNzTGlzdC5hZGQoJ25hdl9faXRlbV9fbGluay0tYWN0aXZlJylcblxuICAgIGNvbnRlbnRFbGVtZW50LmFwcGVuZENoaWxkKHBhZ2VzW3BhZ2VdKVxuICB9XG5cbiAgcmV0dXJuIHsgZ2VuZXJhdGVDb250ZW50IH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgY29udGVudEdlbmVyYXRvclxuIiwiaW1wb3J0IFJhbWVuSW1nIGZyb20gJy4uL2Fzc2V0cy9yYW1lbi5wbmcnXG5cbmV4cG9ydCBjb25zdCBnZXRJbWFnZSA9ICgpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IG5ldyBJbWFnZSgpXG5cbiAgZWxlbWVudC5zcmMgPSBSYW1lbkltZ1xuICBlbGVtZW50LmFsdCA9ICdSYW1lbidcblxuICByZXR1cm4gZWxlbWVudFxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybCArIFwiLi4vYXNzZXRzL1wiOyIsImltcG9ydCAnLi4vc2Nzcy9pbmRleC5zY3NzJ1xuaW1wb3J0IHsgaW5pdE5hdiB9IGZyb20gJy4vY29tcG9uZW50cy9uYXYnXG5pbXBvcnQgQ29udGVudEdlbmVyYXRvciBmcm9tICcuL2dlbmVyYXRvcidcblxuaW5pdE5hdigpXG5Db250ZW50R2VuZXJhdG9yLmdlbmVyYXRlQ29udGVudCgnaG9tZScpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=