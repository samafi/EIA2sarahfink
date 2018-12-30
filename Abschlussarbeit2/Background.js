var Abschlussarbeit2;
(function (Abschlussarbeit2) {
    class Background {
        paint() {
            this.drawBackground(100);
        }
        //Funktion Hintergrund
        drawBackground(_forestHeight) {
            Abschlussarbeit2.crc2.fillStyle = "rgb(178, 231, 255)"; //Blauer Hintergrund
            Abschlussarbeit2.crc2.fillRect(0, 0, Abschlussarbeit2.crc2.canvas.width, Abschlussarbeit2.crc2.canvas.height);
            Abschlussarbeit2.crc2.fillStyle = "rgb(232, 235, 237)"; // Schneeboden 
            //crc2.fillRect( 0, crc2.canvas.height - _forestHeight, crc2.canvas.width, crc2.canvas.height );
            Abschlussarbeit2.crc2.moveTo(0, 600);
            Abschlussarbeit2.crc2.bezierCurveTo(150, 550, 300, 550, 450, 600);
            Abschlussarbeit2.crc2.bezierCurveTo(550, 500, 750, 450, 1000, 600);
            Abschlussarbeit2.crc2.lineTo(1000, 800);
            Abschlussarbeit2.crc2.lineTo(0, 800);
            Abschlussarbeit2.crc2.closePath();
            Abschlussarbeit2.crc2.fill();
        }
    }
    Abschlussarbeit2.Background = Background;
})(Abschlussarbeit2 || (Abschlussarbeit2 = {})); //namespace schließen
//# sourceMappingURL=Background.js.map