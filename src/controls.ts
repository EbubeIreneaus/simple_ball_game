export class Controls <T extends HTMLElement>{
    slide: T
    ball: T

    constructor(slide:T, ball:T){
        this.slide = slide
        this.ball = ball
    }

    move(position: string): void{
        const currentPosition = parseFloat(getComputedStyle(this.slide).left) || 0;
        const step = 20;

        if (position == 'left') {
            this.slide.style.left = currentPosition - step + 'px'
        }else{
            this.slide.style.left = currentPosition + step + 'px'
        }
    }
}