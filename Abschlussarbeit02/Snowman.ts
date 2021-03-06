namespace Abschlussarbeit02 {

    export class Snowman {

        x: number;
        y: number;

        snowmanWidth: number = 90;
        snowmanHeight: number = 150;

        
        // untere Schneekugel 
       
        // Schneemann zeichnen
        draw(): void {
            crc2.fillStyle = "rgb(255, 255, 255)";
            
            //Kugel unten
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y, 60, 0, 2*Math.PI);
            crc2.closePath();
            crc2.fill();
            //crc2.stroke();
            
            //Kugel Mitte
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y-70, 48, 0, 2*Math.PI);
            crc2.closePath();
            crc2.fill();
            //crc2.stroke();
            
            //obere Kugel
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y-140, 40, 0, 2*Math.PI);
            crc2.closePath();
            crc2.fill();
            //crc2.stroke();
            
            //Zylinder
            crc2.fillStyle = "rgb(0,0,0)";
            crc2.beginPath();
            crc2.fillRect(this.x-50, this.y-180, 100, 5);
            crc2.closePath();
            
            crc2.beginPath();
            crc2.fillRect(this.x-25, this.y-180, 50, -40);
            crc2.closePath();
            
           //Augen 
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x-15, this.y-145, 5, 0, 2*Math.PI);
            crc2.closePath();
            crc2.fill();
            //crc2.stroke();
           
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x+15, this.y-145, 5, 0, 2*Math.PI);
            crc2.closePath();
            crc2.fill();
            //crc2.stroke();

            //Nase
            crc2.fillStyle = "rgb(255, 119, 0)";
            crc2.beginPath();
            crc2.moveTo (this.x,this.y-140);
            crc2.lineTo (this.x-5, this.y-125);
            crc2.lineTo (this.x+5, this.y-125);
            crc2.closePath();
            //crc2.stroke();
            crc2.fill();
            
            //Knöpfe
            crc2.fillStyle = "rgb(153, 40, 40)";
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y-85, 5, 0, 2*Math.PI);
            crc2.closePath();
            crc2.fill();
            //crc2.stroke();
            
            crc2.fillStyle = "rgb(153, 40, 40)";
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y-60, 5, 0, 2*Math.PI);
            crc2.closePath();
            crc2.fill();
            
            //Arme
            crc2.strokeStyle = "rgb(0,0,0)";
            crc2.beginPath();
            crc2.moveTo(this.x+48, this.y-80);
            crc2.lineTo(this.x+70, this.y-70);
            crc2.closePath();
            //crc2.fill();
            crc2.stroke();
            
            crc2.beginPath();
            crc2.moveTo(this.x-48, this.y-80);
            crc2.lineTo(this.x-70, this.y-70);
            crc2.closePath();
           // crc2.fill();
            crc2.stroke();
            
        }

        //Schneemann nach links
     
         moveLeft(): void {
            if ( this.x > 50 ) {                                                            // mit > 50 (statt 0) kann er weiter nach links
                this.x -= 30;
            }
        }
          

        //Schneemann nach rechts
        
          moveRight(): void {
            if ( this.x + this.snowmanWidth < crc2.canvas.width+80 ) {                      // mit +80 kann er weiter nach rechts
                this.x += 30;
            }
        }
                
        
        //Überprüfung ob Schneeflocke und Schneemann auf gleicher Höhe
       
        checkIfInside( _x: number, _y: number ): boolean {
            if ( _x > (this.x - 55) && _x < ( this.x + 50) && _y > (this.y - 150) && _y < (this.y) ) {
                return true;
            }
            return false;
        }
 
    }
} // namespace schließen