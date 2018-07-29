namespace Semester {


    export class Charakter {
        xPos: number;
        yPos: number;
        speed:number = 5;
        moveleft:boolean = false;
        moveright:boolean = false;
 
        constructor(_xPos: number, _yPos: number) {

            this.xPos = _xPos;
            this.yPos = _yPos;

        }
        update(): void {
            this.draw();
            if(this.moveleft == true){
                this.moveLeft();    
            }
            if(this.moveright == true){
                this.moveRight();    
            }
           
        }
        moveLeft():void{
             this.xPos -= this.speed;
        }
        moveRight():void{
             this.xPos += this.speed;
        }


        draw(): void {

            crc2.beginPath();
            crc2.fillStyle = "red";
            crc2.fillRect(this.xPos, this.yPos, 10, 10);
            crc2.closePath();



    }
        }
}