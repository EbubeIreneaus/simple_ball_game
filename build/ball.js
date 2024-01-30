export class Ball {
    constructor(ball, slide, modal) {
        this.posX = 0;
        this.posY = 0;
        this.dirY = 'down';
        this.dirX = 'right';
        this.interval = '';
        this.stepX = 10;
        this.pageHeight = window.innerHeight;
        this.pageWidth = window.innerWidth;
        this.ball = ball;
        this.slide = slide;
        this.modal = modal;
        // this.posX = posX
        this.stepY = (parseFloat(getComputedStyle(this.slide).top)) / 20;
    }
    start() {
        this.interval = setInterval(() => {
            this.move();
        }, 200);
        this.ball.style.top = "0";
        this.modal.style.display = 'none';
    }
    stop() {
        clearInterval(this.interval);
        this.modal.style.display = 'flex';
    }
    move() {
        let ballPos = this.ball.getBoundingClientRect();
        let slidePos = this.slide.getBoundingClientRect();
        if (ballPos.top - 10 > slidePos.top) {
            this.stop();
        }
        if (this.dirY == 'down') {
            if (ballPos.top + 41 >= slidePos.top && ballPos.left >= slidePos.left && ballPos.left <= slidePos.left + 70) {
                console.log(ballPos.left + "  " + slidePos.left);
                this.dirY = 'up';
            }
            else {
                this.ball.style.top = parseFloat(getComputedStyle(this.ball).top) + this.stepY + 'px';
            }
        }
        else {
            // console.log(ballPos.top + "  "+ slidePos.top);
            this.ball.style.top = parseFloat(getComputedStyle(this.ball).top) - this.stepY + 'px';
            if (ballPos.top <= 80) {
                this.dirY = 'down';
            }
        }
        if (this.dirX == 'right') {
            this.ball.style.left = parseFloat(getComputedStyle(this.ball).left) + this.stepX + 'px';
            if (ballPos.left >= this.pageWidth) {
                this.dirX = 'left';
            }
        }
        else {
            this.ball.style.left = parseFloat(getComputedStyle(this.ball).left) - this.stepX + 'px';
            if (ballPos.left <= 0) {
                this.dirX = 'right';
            }
        }
    }
}
