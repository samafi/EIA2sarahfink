namespace L10 {

    export class Fish {
        x: number;
        y: number;
        r: number;
        g: number;
        b: number;

           
         move(): void {
            this.x += Math.random() * (-2) - 2;
              if (this.x < -55) {
            this.x = crc2.canvas.width;
            this.y += Math.random() * (-1) -3;
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

