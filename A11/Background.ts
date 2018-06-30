namespace Aufgabe_11 {
    
    export class Background {

        public paint(): void {
            
        this.drawWater();
            
        this.drawsand(crc2.canvas.height - 200);

        //Seegras    
        this.drawSeagrass(340, 640, 1.5);
        this.drawSeagrass(320, 640, 1);
        this.drawSeagrass(300, 640, 1.3);
        this.drawSeagrass(280, 640, 0.7);
        this.drawSeagrass(100, 640, 1);
        this.drawSeagrass(140, 640, 1.3);
        this.drawSeagrass(50, 660, 3);
        this.drawSeagrass(20, 640, 0.8);
        
        //Seestern
        this.drawStar (240, 610);
        this.drawStar (190, 590);
        this.drawStar (230, 560);   

        }

        // Sand ( Hintergrund)
        drawsand(_y: number): void {

        crc2.beginPath();
        crc2.moveTo(0, 100);
        crc2.lineTo(0, 360);
        for (let i: number = 0; i < 990; i++) {
            crc2.lineTo(i, 15 * Math.sin(i * .020) + 460);
        }
        crc2.lineTo(350, 640);
        crc2.lineTo(0, 640);
        crc2.fillStyle ="rgb(210,180,140)"; 
        crc2.fill();
        crc2.closePath();
    }



        // Wasser (Hintergrund)
        drawWater(): void {
        crc2.beginPath();
        crc2.lineTo(0, 640);
        crc2.lineTo(640, 640);
        crc2.lineTo(360, 0);
        crc2.lineTo(0, 0);
        crc2.fillStyle = "rgba(0, 185, 185, 0.25)";
        crc2.fill();
        crc2.closePath();
        }
        
        // Seestern
        drawStar ( _x: number, _y: number ): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(255, 255, 0)";
        crc2.moveTo( _x + 7, _y );
        crc2.lineTo( _x + 10, _y + 20 );
        crc2.lineTo( _x - 20, _y );
        crc2.lineTo( _x + 10, _y - 20 );
        crc2.closePath();

        crc2.moveTo( _x + 10, _y + 7 );
        crc2.lineTo( _x - 10, _y + 20 );
        crc2.lineTo( _x - 10, _y - 20 );
        crc2.lineTo( _x + 20, _y );
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
   
        }
        
        // Seegras
        drawSeagrass(_x: number, _y: number, _s: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x + (20 * _s), _y - (20 * _s), _x - (0 * _s), _y - (10 * _s));
        crc2.quadraticCurveTo(_x + (10 * _s), _y - (40 * _s), _x - (0 * _s), _y - (30 * _s));
        crc2.quadraticCurveTo(_x + (10 * _s), _y - (60 * _s), _x - (0 * _s), _y - (50 * _s));
        crc2.quadraticCurveTo(_x + (10 * _s), _y - (60 * _s), _x - (0 * _s), _y - (80 * _s));
        crc2.quadraticCurveTo(_x + (-10 * _s), _y - (80 * _s), _x - (0 * _s), _y - (60 * _s));
        crc2.quadraticCurveTo(_x + (-10 * _s), _y - (70 * _s), _x - (0 * _s), _y - (40 * _s));
        crc2.quadraticCurveTo(_x + (-10 * _s), _y - (50 * _s), _x - (0 * _s), _y - (20 * _s));
        crc2.quadraticCurveTo(_x + (-10 * _s), _y - (30 * _s), _x - (0 * _s), _y - (0 * _s));
   
        crc2.closePath();
        
        crc2.stroke();
        crc2.fillStyle = "rgb(105,139,34)";
        crc2.fill();

        }

        
    }

}