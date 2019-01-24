namespace Abschlussarbeit2 {

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
            crc2.strokeStyle = this.color;
            crc2.beginPath();
            
            //horizontal
            crc2.moveTo (this.x,this.y);
            crc2.lineTo (this.x+20, this.y); 
            
            //grün
            crc2.moveTo (this.x+4,this.y-6);
            crc2.lineTo (this.x+16, this.y+6);
            
            //rosa
            crc2.moveTo (this.x+4,this.y+6);
            crc2.lineTo (this.x+16, this.y-6);
            
            //vertikal
            crc2.moveTo(this.x+10, this.y-10);
            crc2.lineTo(this.x+10, this.y+10);
            crc2.closePath();
            crc2.stroke();
            
            
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
                crc2.arc(this.x+10, this.y, 2, 0 , 2*Math.PI);
            
            crc2.closePath();
            
            
            
            
 
         
            
            crc2.fill();


        } 
        
        
}
    }