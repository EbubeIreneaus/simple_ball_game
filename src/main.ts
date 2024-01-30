import { Controls } from "./controls.js";
import { Ball } from "./ball.js";
let pageWidth = window.innerWidth
let pageHeight = window.innerHeight
let BtnLeft = document.querySelector('.btnLeft')
let BtnRight = document.querySelector('.btnRight')
let slide = document.querySelector('.slide') as HTMLElement
let modal = document.querySelector('.modal') as HTMLElement
const ball = document.querySelector('.ball') as HTMLElement

class Game {

}





let controls = new Controls<HTMLElement>(slide as HTMLElement, ball as HTMLElement)

BtnLeft?.addEventListener('click', ()=>{
    if (parseFloat(getComputedStyle(slide).left) > 0) {
        controls.move('left')
    }
})

BtnRight?.addEventListener('click', ()=>{
    if (parseFloat(getComputedStyle(slide).left) <= (pageWidth-70)) {
        controls.move('right')
    }
})

window.addEventListener('keydown', (event)=>{
    if (event.key === 'ArrowLeft') {
        if (parseFloat(getComputedStyle(slide).left) > 0) {
            controls.move('left')
        }
      }else if(event.key == "ArrowRight"){
        if (parseFloat(getComputedStyle(slide).left) <= (pageWidth-60)) {
            controls.move('right')
        }
      }
})

const PlayBall = new Ball<HTMLElement>(ball as HTMLElement, slide as HTMLElement, modal as HTMLElement)
PlayBall.start()

document.querySelector('#btnrestart')?.addEventListener('click',()=> {
    PlayBall.start()
})

