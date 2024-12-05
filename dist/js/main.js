/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/carousel */ \"./modules/carousel.js\");\n/* harmony import */ var _modules_up__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/up */ \"./modules/up.js\");\n/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/accordion */ \"./modules/accordion.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__.modal)();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__.topSlider)();\r\n(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_2__.carousel)();\r\n(0,_modules_up__WEBPACK_IMPORTED_MODULE_3__.up)();\r\n\r\n(0,_modules_accordion__WEBPACK_IMPORTED_MODULE_4__.accordion)();\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\r\n\tmodalId: 'callback',\r\n\t// someElem: [\r\n\t// \t{\r\n\t// \t\ttype: 'block',\r\n\t// \t\tid: 'total',\r\n\t// \t},\r\n\t// ],\r\n});\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/accordion.js":
/*!******************************!*\
  !*** ./modules/accordion.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   accordion: () => (/* binding */ accordion)\n/* harmony export */ });\nconst accordion = () => {\r\n  const titles = document.querySelectorAll('.element__title');\r\n  const contents = document.querySelectorAll('.element__content');\r\n\r\n  titles.forEach(title => {\r\n    title.addEventListener('click', () => {\r\n      const activeContent = document.querySelector('#' + title.dataset.tab);\r\n\r\n      if (activeContent.classList.contains('active')) {\r\n        activeContent.classList.remove('active');\r\n        title.classList.remove('active');\r\n        activeContent.style.maxHeight = 0;\r\n      }else {\r\n        contents.forEach(content => {\r\n          content.classList.remove('active');\r\n          content.style.maxHeight = 0;\r\n        });\r\n\r\n        titles.forEach(element => {\r\n          element.classList.remove('active');\r\n        });\r\n\r\n        title.classList.add('active');\r\n        activeContent.classList.add('active');\r\n        activeContent.style.maxHeight = activeContent.scrollHeight + 'px';\r\n      }\r\n    });\r\n  });\r\n  document.querySelector('[data-tab=\"tab-1\"]').classList.add('active');\r\n  document.querySelector('#tab-1').classList.add('active');\r\n  document.querySelector('#tab-1').style.maxHeight = document.querySelector('#tab-1').scrollHeight + 'px';\r\n\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/accordion.js?");

/***/ }),

/***/ "./modules/carousel.js":
/*!*****************************!*\
  !*** ./modules/carousel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   carousel: () => (/* binding */ carousel)\n/* harmony export */ });\nconst carousel = () => {\r\n  const wrapper = document.querySelector('.services-elements');\r\n  const arrowBtns = document.querySelectorAll('.arrow');\r\n  const carousel = document.querySelector('.services-carousel');\r\n  const firstCardWidth = carousel.querySelector('.element').offsetWidth;\r\n  const carouselChildren = [...carousel.children];\r\n\r\n  let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);\r\n\r\n  carouselChildren.slice(-cardPerView).reverse().forEach(card => {\r\n    carousel.insertAdjacentHTML('afterbegin',card.outerHTML);\r\n  });\r\n\r\n  carouselChildren.slice(0, cardPerView).forEach(card => {\r\n    carousel.insertAdjacentHTML('beforeend',card.outerHTML);\r\n  });\r\n\r\n  let isDragging = false, startX, startScrollLeft, timeoutId;\r\n\r\n  arrowBtns.forEach(btn => {\r\n    btn.addEventListener('click', () => {\r\n      carousel.scrollLeft += btn.id === 'left' ? -firstCardWidth : firstCardWidth;\r\n    });\r\n  });\r\n\r\n  const dragStart = (e) => {\r\n    isDragging = true;\r\n    carousel.classList.add('dragging');\r\n    startX = e.pageX;\r\n    startScrollLeft = carousel.scrollLeft;\r\n  };\r\n\r\n  const dragging = (e) => {\r\n    if (!isDragging) return;\r\n    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);\r\n  };\r\n\r\n  const dragStop = () => {\r\n\t\tisDragging = false;\r\n\t\tcarousel.classList.remove('dragging');\r\n\t};\r\n\r\n  const autoPlay = () => {\r\n    if (window.innerWidth < 800) return;\r\n    timeoutId = setTimeout(() =>\r\n      carousel.scrollLeft += firstCardWidth, 2500);\r\n  }\r\n\r\n  autoPlay();\r\n\r\n  const infiniteScroll = () => {\r\n    if (carousel.scrollLeft === 0) {\r\n      carousel.classList.add('no-transition');\r\n      carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);\r\n      carousel.classList.remove('no-transition');\r\n    }else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {\r\n      carousel.classList.add('no-transition');\r\n      carousel.scrollLeft = carousel.offsetWidth;\r\n      carousel.classList.remove('no-transition');\r\n    }\r\n    clearTimeout(timeoutId);\r\n    if (!wrapper.matches(':hover')) autoPlay();\r\n  };\r\n\r\n  carousel.addEventListener('mousedown', dragStart);\r\n  carousel.addEventListener('mousemove', dragging);\r\n  document.addEventListener('mouseup', dragStop);\r\n  carousel.addEventListener('scroll', infiniteScroll);\r\n  wrapper.addEventListener('mouseenter', () => clearTimeout(timeoutId));\r\n  wrapper.addEventListener('mouseleave', autoPlay);\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/carousel.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modal: () => (/* binding */ modal)\n/* harmony export */ });\n\r\n\r\n\r\nconst modal = () => {\r\n\tconst callbackBtns = document.querySelectorAll('.callback-btn');\r\n\tconst statusBlock = document.querySelector('#responseMessage');\r\n\r\n\tconst modalOverlay = document.querySelector('.modal-overlay');\r\n\tconst modalCallback = document.querySelector('.modal-callback');\r\n\r\n  callbackBtns.forEach(btn => {\r\n    btn.addEventListener('click', () => {\r\n\t\t\tmodalOverlay.style.display = 'block';\r\n\t\t\tmodalCallback.style.display = 'block';\r\n\t\t});\r\n  });\r\n\r\n\r\n\r\n\tmodalCallback.addEventListener('click', ({ target }) => {\r\n\t\tif (target.closest('#btn-close')) {\r\n\t\t\tmodalOverlay.style.display = 'none';\r\n\t\t\tmodalCallback.style.display = 'none';\r\n\t\t}\r\n\t\tif (target.closest('.feedback')) {\r\n\t\t\tmodalCallback.style.display = 'none';\r\n\t\t\tstatusBlock.style.display = 'block';\r\n\t\t}\r\n\t});\r\n\r\n\tstatusBlock.addEventListener('click', ({target}) => {\r\n\t\tif (target.closest('.btn')) {\r\n      statusBlock.style.display = 'none';\r\n\t\t\tmodalOverlay.style.display = 'none';\r\n    }\r\n\t});\r\n\r\n\twindow.addEventListener('click', event => {\r\n\t\tif (event.target === modalOverlay) {\r\n\t\t\tmodalOverlay.style.display = 'none';\r\n\t\t\tmodalCallback.style.display = 'none';\r\n\t\t\tstatusBlock.style.display = 'none';\r\n\t\t}\r\n\t});\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst sendForm = ({ modalId, someElem = [] }) => {\r\n\tconst modal = document.getElementById(modalId);\r\n\tconst form = modal.querySelector('form');\r\n\tconst formElements = form.querySelectorAll('input');\r\n\tconst statusModal = document.getElementById('responseMessage');\r\n\tconst statusBlock = statusModal.querySelector('.modal-content');\r\n\r\n\t// const loadText = 'Loading...';\r\n\tconst errorText = 'Ошибка...';\r\n\tconst successText = 'Спасибо. Данные отправлены';\r\n\r\n\tconst validate = (list) => {\r\n\r\n\t\tlet success = true;\r\n\t\tlist.forEach((input) => {\r\n\r\n\t\t\tif (input.name === 'fio') {\r\n\t\t\t\tconst regex = /[а-яА-ЯЁё-і]/g;\r\n\t\t\t\tif (regex.test(input.value) === false) {\r\n\t\t\t\t\tconsole.log('false');\r\n\t\t\t\t} else {\r\n\t\t\t\t\tinput.classList.add('success');\r\n\t\t\t\t\tconsole.log('true');\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tif (input.name === 'tel') {\r\n\t\t\t\tconst regex = /\\+7\\(?(\\d{3})\\)?[- ]?(\\d{3})[- ]?(\\d{4})$/;\r\n\t\t\t\tif (regex.test(input.value) === false) {\r\n\t\t\t\t\tconsole.log('false');\r\n\t\t\t\t} else {\r\n\t\t\t\t\tconsole.log('true');\r\n\t\t\t\t\tinput.classList.add('success');\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tif (!input.classList.contains('success')) {\r\n\t\t\t\tsuccess = false;\r\n\t\t\t}\r\n\t\t});\r\n\t\treturn success;\r\n\t};\r\n\r\n\tsomeElem.forEach(elem => {\r\n\t\tconsole.log(elem);\r\n\t});\r\n\r\n\tconst sendData = (data) => {\r\n\t\treturn fetch('https://jsonplaceholder.typicode.com/posts', {\r\n\t\t\tmethod: 'POST',\r\n      headers: {\r\n        'Content-Type': 'application/json',\r\n      },\r\n      body: JSON.stringify(data),\r\n\t\t}).then((response => response.json()))\r\n\t}\r\n\r\n\tconst submitForm = () => {\r\n\t\tconst formData = new FormData(form);\r\n\t\tconst formBody = {};\r\n\t\tformData.forEach((value, key) => {\r\n\t\t\tformBody[key] = value;\r\n\t\t});\r\n\r\n\t\tconsole.log(validate(formElements));\r\n\t\tif (validate(formElements)) {\r\n\t\t\tsendData(formBody)\r\n\t\t\t\t.then(data => {\r\n\t\t\t\t\tstatusBlock.textContent = successText;\r\n\r\n\t\t\t\t\tformElements.forEach(element => {\r\n\t\t\t\t\t\telement.value = '';\r\n\t\t\t\t\t\telement.classList.remove('success');\r\n\t\t\t\t\t});\r\n\t\t\t\t\tconsole.log(data);\r\n\t\t\t\t})\r\n\t\t\t\t.catch(error => {\r\n\t\t\t\t\tstatusBlock.textContent = errorText;\r\n\t\t\t\t\tconsole.error('Error:', error);\r\n\t\t\t\t});\r\n\t\t} else {\r\n\t\t\tstatusBlock.textContent = errorText;\r\n\t\t\tformElements.forEach(element => {\r\n\t\t\t\telement.value = '';\r\n\t\t\t\telement.classList.remove('success');\r\n\t\t\t});\r\n\t\t}\r\n\t};\r\n\r\n\ttry {\r\n\t\tif (!form) {\r\n\t\t\tthrow new Error('Верните форму на место');\r\n\t\t}\r\n\t\tform.addEventListener('submit', event => {\r\n\t\t\tevent.preventDefault();\r\n\r\n\t\t\tsubmitForm();\r\n\t\t});\r\n\t} catch (error) {\r\n\t\tconsole.log(error.message);\r\n\t}\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\r\n\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   topSlider: () => (/* binding */ topSlider)\n/* harmony export */ });\nconst topSlider = () => {\r\n  const slider = document.querySelector('.top-slider');\r\n  const slides = slider.querySelectorAll('.item');\r\n  const dots = document.querySelectorAll('.dot');\r\n\r\n  const timeInterval = 3000;\r\n\tlet currentSlide = 0;\r\n\tlet interval;\r\n\r\n  const prevSlide = (elems, index, strClass) => {\r\n\t\telems[index].classList.remove(strClass);\r\n\t};\r\n\tconst nextSlide = (elems, index, strClass) => {\r\n\t\telems[index].classList.add(strClass);\r\n\t};\r\n\r\n  const autoSlide = () => {\r\n\t\tprevSlide(slides, currentSlide, 'item--active');\r\n\t\tprevSlide(dots, currentSlide, 'dot--active');\r\n\t\tcurrentSlide++;\r\n\r\n\t\tif (currentSlide >= slides.length) {\r\n\t\t\tcurrentSlide = 0;\r\n\t\t}\r\n\r\n\t\tnextSlide(slides, currentSlide, 'item--active');\r\n\t\tnextSlide(dots, currentSlide, 'dot--active');\r\n\t};\r\n\r\n  const startSlide = (timer = 1500) => {\r\n\t\tinterval = setInterval(autoSlide, timer);\r\n\t};\r\n\tconst stopSlide = () => {\r\n\t\tclearInterval(interval);\r\n\t};\r\n\r\n  slider.addEventListener('click', e => {\r\n\t\te.preventDefault();\r\n\t\tif (!e.target.matches('.dot, .top-slider__btn')) {\r\n\t\t\treturn;\r\n\t\t}\r\n\t\tprevSlide(slides, currentSlide, 'item--active');\r\n\t\tprevSlide(dots, currentSlide, 'dot--active');\r\n\r\n\t\tif (e.target.matches('#arrow-right')) {\r\n\t\t\tcurrentSlide++;\r\n\t\t} else if (e.target.matches('#arrow-left')) {\r\n\t\t\tcurrentSlide--;\r\n\t\t} else if (e.target.classList.contains('dot')) {\r\n\t\t\tdots.forEach((dot, index) => {\r\n\t\t\t\tif (dot === e.target) {\r\n\t\t\t\t\tcurrentSlide = index;\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t}\r\n\t\tif (currentSlide >= slides.length) {\r\n\t\t\tcurrentSlide = 0;\r\n\t\t}\r\n\t\tif (currentSlide < 0) {\r\n\t\t\tcurrentSlide = slides.length - 1;\r\n\t\t}\r\n\t\tnextSlide(slides, currentSlide, 'item--active');\r\n\t\tnextSlide(dots, currentSlide, 'dot--active');\r\n\t});\r\n\r\n  slider.addEventListener(\r\n\t\t'mouseenter',\r\n\t\te => {\r\n\t\t\tif (e.target.matches('.dot, .top-slider__btn')) {\r\n\t\t\t\tstopSlide();\r\n\t\t\t}\r\n\t\t},\r\n\t\ttrue,\r\n\t);\r\n\tslider.addEventListener(\r\n\t\t'mouseleave',\r\n\t\te => {\r\n\t\t\tif (e.target.matches('.dot, .top-slider__btn')) {\r\n\t\t\t\tstartSlide(timeInterval);\r\n\t\t\t}\r\n\t\t},\r\n\t\ttrue,\r\n\t);\r\n\r\n  startSlide(timeInterval);\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/up.js":
/*!***********************!*\
  !*** ./modules/up.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   up: () => (/* binding */ up)\n/* harmony export */ });\nconst up = () => {\r\n  const backToTop = document.querySelector('.top');\r\n  window.addEventListener('scroll', function () {\r\n\t\tif (window.scrollY > 300) {\r\n\t\t\tbackToTop.style.display = 'block';\r\n\t\t} else {\r\n\t\t\tbackToTop.style.display = 'none';\r\n\t\t}\r\n\t});\r\n\r\n\t// Плавная прокрутка при клике на кнопку\r\n\tbackToTop.addEventListener('click', function (event) {\r\n\t\tevent.preventDefault();\r\n\t\twindow.scrollTo({ top: 0, behavior: 'smooth' });\r\n\t});\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/up.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;