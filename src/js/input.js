'use strict';

// localization

const l10n = document.querySelector('.page-header__l10n');
const l10nList = document.querySelector('.page-header__l10n-list');
const l10nActive = document.querySelector('.page-header__l10n-active');

const openL10n = evt => {
    evt.preventDefault();
    l10nList.classList.toggle('page-header__l10n-list--open');
};

l10n.addEventListener('click', openL10n);

// reviews-carousel

const nextReviewButtonDesk = document.querySelector('.android-reviews__next-review--desk');
const nextReviewButtonMob = document.querySelector('.android-reviews__next-review--mob');
const carousel = document.querySelector('.android-reviews__reviews-carousel');
const reviews = document.querySelectorAll('.android-reviews__review');
const reviewers = document.querySelectorAll('.android-reviews__reviewer-ava--desk');

let translateDesk = 0;
let translateMob = 0;
let paddings = 0;

const nextReviewDesk = evt => {
    evt.preventDefault();
    translateDesk -= 314;
    translateDesk = Math.abs(translateDesk) < 1570 ? translateDesk : 0;
    carousel.style.transform = `translateX(${translateDesk}px)`;

    for (let i = 0; i < reviewers.length; i++) {
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
const nextReviewMob = evt => {
    evt.preventDefault();
    translateMob -= 100;
    paddings += 32;

    for (let i = 0; i < reviews.length; i++) {
        if (reviews[i].classList.contains('android-reviews__review--active')) {
            if (i + 1 < reviews.length) {
                carousel.style.transform = `translateX(calc(${translateMob}vw + ${paddings}px))`;
                reviews[i].classList.remove('android-reviews__review--active');
                reviews[i + 1].classList.add('android-reviews__review--active');
                break;
            }
            translateMob = 0;
            paddings = 0;
            carousel.style.transform = `translateX(${translateMob}vw)`;
            reviews[i].classList.remove('android-reviews__review--active');
            reviews[0].classList.add('android-reviews__review--active');
        }
    }
};

nextReviewButtonDesk.addEventListener('click', nextReviewDesk);
nextReviewButtonMob.addEventListener('click', nextReviewMob);
