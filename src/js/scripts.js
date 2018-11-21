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

var openL10n = function openL10n(evt) {
    evt.preventDefault();
    l10nList.classList.toggle('page-header__l10n-list--open');
};

l10n.addEventListener('click', openL10n);

// reviews-carousel

var nextReviewButtonDesk = document.querySelector('.android-reviews__next-review--desk');
var nextReviewButtonMob = document.querySelector('.android-reviews__next-review--mob');
var carousel = document.querySelector('.android-reviews__reviews-carousel');
var reviews = document.querySelectorAll('.android-reviews__review');
var reviewers = document.querySelectorAll('.android-reviews__reviewer-ava--desk');

var translateDesk = 0;
var translateMob = 0;
var paddings = 0;

var nextReviewDesk = function nextReviewDesk(evt) {
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
var nextReviewMob = function nextReviewMob(evt) {
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

nextReviewButtonDesk.addEventListener('click', nextReviewDesk);
nextReviewButtonMob.addEventListener('click', nextReviewMob);

/***/ })
/******/ ]);