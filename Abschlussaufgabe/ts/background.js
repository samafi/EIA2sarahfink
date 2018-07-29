var Semester;
(function (Semester) {
    class Background {
        constructor(_xPos, _yPos) {
            this.xPosB = Math.random() * 100;
            this.yPosB = Math.random() * 100;
            this.sterneAnzahl = 1000 * Math.random();
            this.xPos = _xPos;
            this.yPos = _yPos;
        }
        update() {
            Semester.crc2.putImageData(this.hintergrund, 0, 0);
        }
        drawStern() {
            for (let i = 0; i < this.sterneAnzahl; i++) {
                let height = 300 * Math.random();
                Semester.crc2.beginPath();
                Semester.crc2.arc(800 * Math.random(), 600 * Math.random(), 2 * Math.random(), 0, 2 * Math.PI);
                Semester.crc2.fillStyle = 'white';
                Semester.crc2.fill();
                Semester.crc2.closePath();
            }
        }
        draw() {
            Semester.crc2.fillStyle = "#000";
            Semester.crc2.fillRect(this.xPos, this.yPos, 800, 500);
            this.drawStern();
            //            crc2.fillStyle = "#5FB404";
            //            crc2.fillRect(this.xPos, this.yPos + 500, 800, 100);
            this.hintergrund = Semester.crc2.getImageData(0, 0, 800, 600);
        }
    }
    Semester.Background = Background;
})(Semester || (Semester = {}));
//# sourceMappingURL=background.js.map