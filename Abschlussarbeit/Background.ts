namespace Abschlussarbeit {

    export class Background {

        public paint(): void {

            this.drawBackground( 100 );
           /* this.drawSun( 830, 70, 50 ); */

        }

        //Funktion Hintergrund
        drawBackground( _forestHeight: number ): void {
            crc2.fillStyle = "rgb(178, 231, 255)";                              //Blauer Hintergrund
            crc2.fillRect( 0, 0, crc2.canvas.width, crc2.canvas.height );

            crc2.fillStyle = "rgb(232, 235, 237)";                              // Schneeboden 
            crc2.fillRect( 0, crc2.canvas.height - _forestHeight, crc2.canvas.width, crc2.canvas.height );

        }

      /* //Sonne
        drawSun( _x: number, _y: number, _radius: number ): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(255,255,0)";
            crc2.arc( _x, _y, _radius, 0, 2 * Math.PI );
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
       }
   }
       */
}

    } //namespace schließen


    
    