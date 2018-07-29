namespace Semester {


    export class MoveObj {
        xPos: number;
        yPos: number;
        falling: boolean = false;
        a: number = 15;
        jumpCounter:number = 0;
        jumpHeight:number =40;
        charakter: Charakter;
        jumpBo : Boolean = false;
        out:boolean = false;
        jumpStopt:boolean=false;
        playerCounter:number = 0;
        constructor(_xPos: number, _yPos: number, _charakter: Charakter) {

            this.xPos = _xPos;
            this.yPos = _yPos;
            this.charakter = _charakter

        }
        update(): void {
            this.draw();
            if(this.jumpBo == true){
            this.jump();
                }
            if(this.yPos > 600){
                this.yPos = -10;  
                this.xPos = Math.random()*800;
                
            }
             if(this.yPos < 0){
               this.out = true;
            }
            if(this.yPos >= 0&&this.yPos <= 600){
               this.out = false;
            }
            
            if(this.falling == true){
                this.fall();
            }
        }

        jumpStop():void{
            if(this.jumpStopt == false){
            this.jumpBo = false;
            this.jumpCounter = 0;
            this.falling = false;
            this.jumpStopt = true;
                this.a=15;
                }
        }
        jump(): void {
            
            this.falling=false;
            this.yPos += this.a;
            this.jumpCounter++;
            this.playerCounter += this.jumpCounter;
           if (this.jumpCounter == this.jumpHeight/2) {
               this.jumpStopt = false;
            
                 this.a *= -1;
            }
            if (this.jumpCounter >= this.jumpHeight) {
                 this.a = 15;
                this.jumpCounter = 0;
                this.jumpBo = false;
                this.falling = true;
            }

        }
        
        fall():void{
                this.a = 15;
                this.yPos -= this.a;
        }

        draw(): void {

            crc2.fillStyle = "white";
            crc2.fillRect(this.xPos, this.yPos, 40, 10);

        }

    }
}