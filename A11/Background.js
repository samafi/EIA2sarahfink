var Aufgabe_11;
(function (Aufgabe_11) {
    // Erstellen des Hintergrunds mit Constructor!
    function drawBackground() {
        drawGround();
        for (let i = 0; i < 10; i++) {
            let a = Math.random() * Aufgabe_11.crc2.canvas.width;
            let b = Math.random() * (360 - 250) + 250;
            let c = Math.random() * (10 - 5) + 5;
        }
        //Seestern
        drawStar(240, 610);
        drawStar(190, 590);
        drawStar(230, 560);
        //Seegras
        drawSeagrass(340, 640, 1.5);
        drawSeagrass(320, 640, 1);
        drawSeagrass(300, 640, 1.3);
        drawSeagrass(280, 640, 0.7);
        drawSeagrass(100, 640, 1);
        drawSeagrass(140, 640, 1.3);
        drawSeagrass(50, 660, 3);
        drawSeagrass(20, 640, 0.8);
        drawWater();
    }
    Aufgabe_11.drawBackground = drawBackground;
    function drawGround() {
        Aufgabe_11.crc2.beginPath();
        Aufgabe_11.crc2.moveTo(0, 100);
        Aufgabe_11.crc2.lineTo(0, 360);
        for (let i = 0; i < 990; i++) {
            Aufgabe_11.crc2.lineTo(i, 15 * Math.sin(i * .020) + 460);
        }
        Aufgabe_11.crc2.lineTo(350, 640);
        Aufgabe_11.crc2.lineTo(0, 640);
        Aufgabe_11.crc2.fillStyle = "rgb(210,180,140)";
        Aufgabe_11.crc2.fill();
        Aufgabe_11.crc2.closePath();
    }
    function drawWater() {
        Aufgabe_11.crc2.beginPath();
        Aufgabe_11.crc2.lineTo(0, 640);
        Aufgabe_11.crc2.lineTo(640, 640);
        Aufgabe_11.crc2.lineTo(360, 0);
        Aufgabe_11.crc2.lineTo(0, 0);
        Aufgabe_11.crc2.fillStyle = "rgba(0, 185, 185, 0.25)";
        Aufgabe_11.crc2.fill();
        Aufgabe_11.crc2.closePath();
    }
    // Funktion Seestern 
    function drawStar(_x, _y) {
        Aufgabe_11.crc2.beginPath();
        Aufgabe_11.crc2.fillStyle = "rgb(255, 255, 0)";
        Aufgabe_11.crc2.moveTo(_x + 7, _y);
        Aufgabe_11.crc2.lineTo(_x + 10, _y + 20);
        Aufgabe_11.crc2.lineTo(_x - 20, _y);
        Aufgabe_11.crc2.lineTo(_x + 10, _y - 20);
        Aufgabe_11.crc2.closePath();
        Aufgabe_11.crc2.moveTo(_x + 10, _y + 7);
        Aufgabe_11.crc2.lineTo(_x - 10, _y + 20);
        Aufgabe_11.crc2.lineTo(_x - 10, _y - 20);
        Aufgabe_11.crc2.lineTo(_x + 20, _y);
        Aufgabe_11.crc2.closePath();
        Aufgabe_11.crc2.stroke();
        Aufgabe_11.crc2.fill();
    }
    //Funktion Seegras 
    function drawSeagrass(_x, _y, _s) {
        Aufgabe_11.crc2.beginPath();
        Aufgabe_11.crc2.moveTo(_x, _y);
        Aufgabe_11.crc2.quadraticCurveTo(_x + (20 * _s), _y - (20 * _s), _x - (0 * _s), _y - (10 * _s));
        Aufgabe_11.crc2.quadraticCurveTo(_x + (10 * _s), _y - (40 * _s), _x - (0 * _s), _y - (30 * _s));
        Aufgabe_11.crc2.quadraticCurveTo(_x + (10 * _s), _y - (60 * _s), _x - (0 * _s), _y - (50 * _s));
        Aufgabe_11.crc2.quadraticCurveTo(_x + (10 * _s), _y - (60 * _s), _x - (0 * _s), _y - (80 * _s));
        Aufgabe_11.crc2.quadraticCurveTo(_x + (-10 * _s), _y - (80 * _s), _x - (0 * _s), _y - (60 * _s));
        Aufgabe_11.crc2.quadraticCurveTo(_x + (-10 * _s), _y - (70 * _s), _x - (0 * _s), _y - (40 * _s));
        Aufgabe_11.crc2.quadraticCurveTo(_x + (-10 * _s), _y - (50 * _s), _x - (0 * _s), _y - (20 * _s));
        Aufgabe_11.crc2.quadraticCurveTo(_x + (-10 * _s), _y - (30 * _s), _x - (0 * _s), _y - (0 * _s));
        Aufgabe_11.crc2.closePath();
        Aufgabe_11.crc2.stroke();
        Aufgabe_11.crc2.fillStyle = "rgb(105,139,34)";
        Aufgabe_11.crc2.fill();
    }
})(Aufgabe_11 || (Aufgabe_11 = {})); //Namespace ende
/*
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

}*/ 
//# sourceMappingURL=Background.js.map