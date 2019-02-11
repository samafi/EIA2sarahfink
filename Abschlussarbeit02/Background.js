var Abschlussarbeit02;
(function (Abschlussarbeit02) {
    class Background {
        paint() {
            this.drawBackground(100);
        }
        //Funktion Hintergrund
        drawBackground(_forestHeight) {
            Abschlussarbeit02.crc2.fillStyle = "rgb(52,129,184)"; // Blauer Hintergrund
            Abschlussarbeit02.crc2.fillRect(0, 0, Abschlussarbeit02.crc2.canvas.width, Abschlussarbeit02.crc2.canvas.height);
            Abschlussarbeit02.crc2.fillStyle = "rgb(232, 235, 237)"; // Schneeboden 
            Abschlussarbeit02.crc2.moveTo(0, 600);
            Abschlussarbeit02.crc2.bezierCurveTo(150, 550, 300, 550, 450, 600);
            Abschlussarbeit02.crc2.bezierCurveTo(550, 500, 750, 450, 900, 100);
            Abschlussarbeit02.crc2.lineTo(900, 700);
            Abschlussarbeit02.crc2.lineTo(0, 700);
            Abschlussarbeit02.crc2.closePath();
            Abschlussarbeit02.crc2.fill();
        }
    }
    Abschlussarbeit02.Background = Background;
})(Abschlussarbeit02 || (Abschlussarbeit02 = {})); //namespace schließen
//# sourceMappingURL=Background.js.map