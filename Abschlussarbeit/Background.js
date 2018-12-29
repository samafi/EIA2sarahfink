var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Background {
        paint() {
            this.drawBackground(100);
            /* this.drawSun( 830, 70, 50 ); */
        }
        //Funktion Hintergrund
        drawBackground(_forestHeight) {
            Abschlussarbeit.crc2.fillStyle = "rgb(178, 231, 255)"; //Blauer Hintergrund
            Abschlussarbeit.crc2.fillRect(0, 0, Abschlussarbeit.crc2.canvas.width, Abschlussarbeit.crc2.canvas.height);
            Abschlussarbeit.crc2.fillStyle = "rgb(232, 235, 237)"; // Schneeboden 
            Abschlussarbeit.crc2.fillRect(0, Abschlussarbeit.crc2.canvas.height - _forestHeight, Abschlussarbeit.crc2.canvas.width, Abschlussarbeit.crc2.canvas.height);
        }
    }
    Abschlussarbeit.Background = Background;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Background.js.map