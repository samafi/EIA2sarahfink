namespace Aufgabe_11 {
    export class Fish extends MovingObjects {

        constructor() {
            super();
            this.setRandomPosition();
        }
        
        setRandomPosition(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.y = Math.random() * crc2.canvas.height - 100;    
        }
        
        move(): void {
            this.x -= 2;
            this.y += 0;
            if (this.x < -150) {
                this.x = crc2.canvas.width;
                this.y += 0;
            }
            if (this.y < 0) {
                this.y = crc2.canvas.height - 100;
                this.x -= 2;
            }
        }
        
        draw(): void {
        crc2.beginPath();
        crc2.moveTo(this.x,this.y);
        crc2.quadraticCurveTo(this.x+25, this.y-35, this.x+50, this.y);
        crc2.lineTo(this.x+65, this.y+15);
        crc2.lineTo(this.x+65, this.y-15);
        crc2.lineTo(this.x+50, this.y);
        crc2.quadraticCurveTo(this.x+25, this.y+35, this.x, this.y);
        crc2.fillStyle = "rgb(255,106,106)"; //Korallfarbig
        crc2.stroke();
        crc2.fill();
        }
    }
}