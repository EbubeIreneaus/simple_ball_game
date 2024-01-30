export class Controls {
    constructor(slide, ball) {
        this.slide = slide;
        this.ball = ball;
    }
    move(position) {
        const currentPosition = parseFloat(getComputedStyle(this.slide).left) || 0;
        const step = 20;
        if (position == 'left') {
            this.slide.style.left = currentPosition - step + 'px';
        }
        else {
            this.slide.style.left = currentPosition + step + 'px';
        }
    }
}
