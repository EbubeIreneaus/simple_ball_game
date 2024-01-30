export class Ball<T extends HTMLElement>{
    ball: T
    slide: T
    modal: T
    score: T
    private startScore : number = 0
    posX: number = 0
    posY: number = 0
    dirY: 'up' | 'down' = 'down'
    dirX: 'right' | 'left' = 'right'
    interval: any = ''
    private readonly stepY: number;
    private readonly stepX: number = 10
    private readonly pageHeight: number = window.innerHeight 
    private readonly pageWidth : number = window.innerWidth

    constructor(ball:T, slide: T, modal: T, score: T){
        this.ball = ball
        this.slide = slide
        this.modal = modal
        this.score = score
        // this.posX = posX
        this.stepY = (parseFloat(getComputedStyle(this.slide).top))/20 
    }

    start(): void{
        this.startScore = 0
        this.interval = setInterval(()=>{
            this.startScore += 1
            this.move()
            this.score.innerText = `${this.startScore}`
        }, 200) 
        this.ball.style.top = "0"
        this.modal.style.display = 'none'

    }

    stop(): void{
        clearInterval(this.interval)
        this.modal.style.display = 'flex'
    }

    move(): void{
        
        
        let ballPos = this.ball.getBoundingClientRect()
        let slidePos = this.slide.getBoundingClientRect()
        
        if (ballPos.top - 10 > slidePos.top) {
            this.stop()
          
        }
        
        if (this.dirY == 'down') {
            
            
            if (ballPos.top + 40 >= slidePos.top && ballPos.left >=slidePos.left && ballPos.left <= slidePos.left + 70) {
                console.log(ballPos.left + "  "+ slidePos.left);
                this.dirY = 'up'
            }else{
                this.ball.style.top = parseFloat(getComputedStyle(this.ball).top) + this.stepY + 'px'

            }
            
            
        }
        else{
            // console.log(ballPos.top + "  "+ slidePos.top);
            this.ball.style.top = parseFloat(getComputedStyle(this.ball).top) - this.stepY + 'px'
            if (ballPos.top  <= 80) {
                this.dirY = 'down'
            }
        }
         if (this.dirX == 'right') {
            this.ball.style.left = parseFloat(getComputedStyle(this.ball).left) + this.stepX + 'px'
            if (ballPos.left >= this.pageWidth) {
                this.dirX = 'left'
            }
         }else{
            this.ball.style.left = parseFloat(getComputedStyle(this.ball).left) - this.stepX + 'px'
            if (ballPos.left <=0) {
                this.dirX = 'right'
            }
         }
    }

}