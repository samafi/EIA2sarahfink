namespace Abschlussarbeit2 {

    export class Tree {

        x: number;
        y: number;

  
         drawTrunk(): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(139,90,0)";
            crc2.moveTo( this.x, this.y + 50 );
           crc2.fillRect(this.x, this.y, 70, 40);
   
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
        
           // Baum zeichnen      
            draw(): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(0,115,0)";
            crc2.moveTo( this.x, this.y );
            crc2.lineTo( this.x - 100, this.y );
            crc2.lineTo( this.x, this.y - 100 );
            crc2.lineTo( this.x - 80, this.y - 100 );
            crc2.lineTo( this.x+25, this.y - 200 );
            crc2.lineTo( this.x + 130, this.y - 100 );
            crc2.lineTo( this.x + 50, this.y - 100 );
            crc2.lineTo( this.x + 150, this.y );
            crc2.lineTo( this.x + 50, this.y );
            crc2.stroke();
            crc2.fill();       
                    
           
            this.drawTrunk();

        }

    }
}