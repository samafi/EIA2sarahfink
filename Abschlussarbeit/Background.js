var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Background {
        paint() {
            this.drawBackground(100);
            this.drawSun(830, 70, 50);
        }
        //Funktion Hintergrund
        drawBackground(_forestHeight) {
            Abschlussarbeit.crc2.fillStyle = "rgb(178, 231, 255)"; //Blauer Hintergrund
            Abschlussarbeit.crc2.fillRect(0, 0, Abschlussarbeit.crc2.canvas.width, Abschlussarbeit.crc2.canvas.height);
            Abschlussarbeit.crc2.fillStyle = "rgb(232, 235, 237)"; // Schneeboden 
            Abschlussarbeit.crc2.fillRect(0, Abschlussarbeit.crc2.canvas.height - _forestHeight, Abschlussarbeit.crc2.canvas.width, Abschlussarbeit.crc2.canvas.height);
        }
        //Sonne
        drawSun(_x, _y, _radius) {
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.fillStyle = "rgb(255,255,0)";
            Abschlussarbeit.crc2.arc(_x, _y, _radius, 0, 2 * Math.PI);
            Abschlussarbeit.crc2.closePath();
            Abschlussarbeit.crc2.stroke();
            Abschlussarbeit.crc2.fill();
        }
    }
    Abschlussarbeit.Background = Background;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Background.js.map