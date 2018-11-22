/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// localization

var l10n = document.querySelector('.page-header__l10n');
var l10nList = document.querySelector('.page-header__l10n-list');
var l10nActive = document.querySelector('.page-header__l10n-active');

var openL10nHandler = function openL10nHandler(evt) {
    evt.preventDefault();
    l10nList.classList.toggle('page-header__l10n-list--open');
};

l10n.addEventListener('click', openL10nHandler);

// reviews-carousel

var nextReviewButtonDesk = document.querySelector('.android-reviews__next-review--desk');
var nextReviewButtonMob = document.querySelector('.android-reviews__next-review--mob');
var carousel = document.querySelector('.android-reviews__reviews-carousel');
var reviews = document.querySelectorAll('.android-reviews__review');
var reviewers = document.querySelectorAll('.android-reviews__reviewer-ava--desk');

var translateDesk = 0;
var translateMob = 0;
var paddings = 0;

var nextReviewDeskHandler = function nextReviewDeskHandler(evt) {
    evt.preventDefault();
    translateDesk -= 314;
    translateDesk = Math.abs(translateDesk) < 1570 ? translateDesk : 0;
    carousel.style.transform = 'translateX(' + translateDesk + 'px)';

    for (var i = 0; i < reviewers.length; i++) {
        if (reviewers[i].classList.contains('android-reviews__reviewer-ava--active')) {
            if (i + 1 < reviewers.length) {
                reviewers[i].classList.remove('android-reviews__reviewer-ava--active');
                reviewers[i + 1].classList.add('android-reviews__reviewer-ava--active');
                break;
            }
            reviewers[i].classList.remove('android-reviews__reviewer-ava--active');
            reviewers[0].classList.add('android-reviews__reviewer-ava--active');
        }
    }
};
var nextReviewMobHandler = function nextReviewMobHandler(evt) {
    evt.preventDefault();
    translateMob -= 100;
    paddings += 32;

    for (var i = 0; i < reviews.length; i++) {
        if (reviews[i].classList.contains('android-reviews__review--active')) {
            if (i + 1 < reviews.length) {
                carousel.style.transform = 'translateX(calc(' + translateMob + 'vw + ' + paddings + 'px))';
                reviews[i].classList.remove('android-reviews__review--active');
                reviews[i + 1].classList.add('android-reviews__review--active');
                break;
            }
            translateMob = 0;
            paddings = 0;
            carousel.style.transform = 'translateX(' + translateMob + 'vw)';
            reviews[i].classList.remove('android-reviews__review--active');
            reviews[0].classList.add('android-reviews__review--active');
        }
    }
};

nextReviewButtonDesk.addEventListener('click', nextReviewDeskHandler);
nextReviewButtonMob.addEventListener('click', nextReviewMobHandler);

// screenshots

var slider = document.querySelector('.screenshots__img-container');
var screenshots = document.querySelectorAll('.screenshots__screenshot');
var firstScreenshotButton = document.querySelector('.screenshots__button--first');
var secondScreenshotButton = document.querySelector('.screenshots__button--second');
var screenshotsSection = document.querySelector('.screenshots');

console.log(slider);

var nextScreenshotHandler = function nextScreenshotHandler(evt) {
    evt.preventDefault();
    for (var i = 0; i < screenshots.length; i++) {
        if (screenshots[i].classList.contains('screenshots__screenshot--active')) {
            if (i + 1 < screenshots.length) {
                slider.style.transform = 'translateX(-328px)';
                screenshots[i].classList.remove('screenshots__screenshot--active');
                screenshots[i + 1].classList.add('screenshots__screenshot--active');
                firstScreenshotButton.removeAttribute('disabled');
                secondScreenshotButton.setAttribute('disabled', true);
                break;
            }
        }
    }
};

var prevScreenshotHandler = function prevScreenshotHandler(evt) {
    evt.preventDefault();
    for (var i = 0; i < screenshots.length; i++) {
        if (screenshots[i].classList.contains('screenshots__screenshot--active')) {
            if (i - 1 >= 0) {
                slider.style.transform = 'translateX(0px)';
                screenshots[i].classList.remove('screenshots__screenshot--active');
                screenshots[i - 1].classList.add('screenshots__screenshot--active');
                firstScreenshotButton.setAttribute('disabled', true);
                secondScreenshotButton.removeAttribute('disabled');
                break;
            }
        }
    }
};

var xStart = null;
var swipeLeftHandler = function swipeLeftHandler(evt) {
    evt.preventDefault();
};

var touchStartHandler = function touchStartHandler(evt) {
    if (evt.changedTouches.length !== 1 || xStart !== null) return;
    xStart = evt.changedTouches[0].clientX;
    screenshotsSection.addEventListener('touchend', touchEndHandler);
};

var touchEndHandler = function touchEndHandler(evt) {
    if (xStart === null) return;

    var xEnd = evt.changedTouches[0].clientX;
    var xDiff = xStart - xEnd;
    if (Math.abs(xDiff) > 100) {
        if (xDiff < 0) {
            prevScreenshotHandler(evt);
            xStart = null;
        }
        if (xDiff > 0) {
            nextScreenshotHandler(evt);
            xStart = null;
        }
    } else xStart = null;
    screenshotsSection.removeEventListener('touchend', touchEndHandler);
};

firstScreenshotButton.addEventListener('click', prevScreenshotHandler);
secondScreenshotButton.addEventListener('click', nextScreenshotHandler);
screenshotsSection.addEventListener('touchstart', touchStartHandler);

var resizeHandler = function resizeHandler() {
    if (translateMob) {
        translateMob = 0;
        for (var i = 0; i < reviews.length; i++) {
            if (reviews[i].classList.contains('android-reviews__review--active')) {
                reviews[i].classList.remove('android-reviews__review--active');
                reviews[0].classList.add('android-reviews__review--active');
                break;
            }
        }
        carousel.style.transform = 'translateX(0)';
    }

    if (translateDesk) {
        translateDesk = 0;
        carousel.style.transform = 'translateX(0)';
    }

    if (slider.style.transform) {
        slider.style.transform = 'translateX(0px)';
        firstScreenshotButton.setAttribute('disabled', true);
        secondScreenshotButton.removeAttribute('disabled');
    }
};

window.addEventListener('resize', resizeHandler);

/***/ })
/******/ ]);