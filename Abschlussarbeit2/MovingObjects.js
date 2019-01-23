var Abschlussarbeit2;
(function (Abschlussarbeit2) {
    class MovingObject {
        constructor() {
            this.radius = 6;
        }
        setRandomPosition() {
            this.x = Math.random() * Abschlussarbeit2.crc2.canvas.width;
            this.y = 0;
        }
        move() {
            this.x += 0;
            this.y += 2;
        }
        draw() {
            Abschlussarbeit2.crc2.strokeStyle = this.color;
            Abschlussarbeit2.crc2.beginPath();
            //horizontal
            Abschlussarbeit2.crc2.moveTo(this.x, this.y);
            Abschlussarbeit2.crc2.lineTo(this.x + 20, this.y);
            //vertikal
            Abschlussarbeit2.crc2.moveTo(this.x + 10, this.y - 10);
            Abschlussarbeit2.crc2.lineTo(this.x + 10, this.y + 10);
            Abschlussarbeit2.crc2.closePath();
            Abschlussarbeit2.crc2.stroke();
            Abschlussarbeit2.crc2.fillStyle = this.color;
            Abschlussarbeit2.crc2.beginPath();
            Abschlussarbeit2.crc2.moveTo(this.x, this.y);
            Abschlussarbeit2.crc2.arc(this.x + 10, this.y, 5, 0, 2 * Math.PI);
            Abschlussarbeit2.crc2.closePath();
            Abschlussarbeit2.crc2.fill();
        }
    }
    Abschlussarbeit2.MovingObject = MovingObject;
})(Abschlussarbeit2 || (Abschlussarbeit2 = {}));
//# sourceMappingURL=MovingObjects.js.map