var _a;
import { Controls } from "./controls.js";
import { Ball } from "./ball.js";
let pageWidth = window.innerWidth;
let pageHeight = window.innerHeight;
let BtnLeft = document.querySelector('.btnLeft');
let BtnRight = document.querySelector('.btnRight');
let slide = document.querySelector('.slide');
let modal = document.querySelector('.modal');
const ball = document.querySelector('.ball');
const score = document.querySelector('.score');
class Game {
}
let controls = new Controls(slide, ball);
BtnLeft === null || BtnLeft === void 0 ? void 0 : BtnLeft.addEventListener('click', () => {
    if (parseFloat(getComputedStyle(slide).left) > 0) {
        controls.move('left');
    }
});
BtnRight === null || BtnRight === void 0 ? void 0 : BtnRight.addEventListener('click', () => {
    if (parseFloat(getComputedStyle(slide).left) <= (pageWidth - 70)) {
        controls.move('right');
    }
});
window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        if (parseFloat(getComputedStyle(slide).left) > 0) {
            controls.move('left');
        }
    }
    else if (event.key == "ArrowRight") {
        if (parseFloat(getComputedStyle(slide).left) <= (pageWidth - 60)) {
            controls.move('right');
        }
    }
});
const PlayBall = new Ball(ball, slide, modal, score);
PlayBall.start();
(_a = document.querySelector('#btnrestart')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    PlayBall.start();
});
