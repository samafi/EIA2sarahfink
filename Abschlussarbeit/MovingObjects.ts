namespace Abschlussarbeit {

    export class MovingObject {

        x: number;
        y: number;
        radius: number = 6;
        points: number;
        color: string;

        constructor() {

        }

        setRandomPosition(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.y = 0;
        }

        move(): void {
            this.x += 0;
            this.y += 2;
        }

        draw(): void {
            crc2.beginPath();
            crc2.moveTo (this.x,this.y);
            crc2.lineTo (this.x-12.5, this.y+40);
            crc2.lineTo (this.x+12.5, this.y+40);
            crc2.fillStyle = this.color;
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
    }
}
    
    
  
  