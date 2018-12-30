namespace Abschlussarbeit2 {

    export class Background {

        public paint(): void {

            this.drawBackground( 100 );

        }

        //Funktion Hintergrund
        drawBackground( _forestHeight: number ): void {
            crc2.fillStyle = "rgb(178, 231, 255)";                              //Blauer Hintergrund
            crc2.fillRect( 0, 0, crc2.canvas.width, crc2.canvas.height );

            crc2.fillStyle = "rgb(232, 235, 237)";                              // Schneeboden 
            //crc2.fillRect( 0, crc2.canvas.height - _forestHeight, crc2.canvas.width, crc2.canvas.height );
            crc2.moveTo(0, 600);
            crc2.bezierCurveTo(160,550, 200, 500, 210, 600);
            crc2.lineTo(1000, 600);
            crc2.lineTo(1000, 800);
            crc2.lineTo(0, 800);
            crc2.closePath();
            crc2.fill();

        }

}

    } //namespace schließen


    
    