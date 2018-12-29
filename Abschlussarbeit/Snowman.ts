namespace Abschlussarbeit {

    export class Snowman {

        x: number;
        y: number;

        snowmanWidth: number = 154;
        snowmanHeight: number = 90;

        
        // untere Schneekugel 
       
        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(255, 255, 255)";

            crc2.moveTo( this.x, this.y );
            crc2.bezierCurveTo( this.x, this.y + this.snowmanHeight, this.x + this.snowmanWidth, this.y + this.snowmanHeight, this.x + this.snowmanWidth, this.y );
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

        }

        
        
        
        
        
        
        

        //Schneemann nach links

        moveLeft(): void {
            if ( this.x > 0 ) {
                this.x -= 30;
            }
        }
        
        

        //Schneemann nach rechts

        moveRight(): void {
            if ( this.x + this.snowmanWidth < crc2.canvas.width ) {
                this.x += 30;
            }
        }
        
        
        
        //Überprüfung ob Schneeflocke und Schneemann auf gleicher Höhe

        checkIfInside( _x: number, _y: number ): boolean {
            if ( _x > this.x && _x < ( this.x + this.snowmanWidth ) && _y > this.y && _y < this.y + this.snowmanHeight ) {
                return true;
            }
            return false;
        }
    }
} // namespace schließen


