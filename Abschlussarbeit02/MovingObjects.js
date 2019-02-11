var Abschlussarbeit02;
(function (Abschlussarbeit02) {
    class MovingObject {
        constructor() {
            this.radius = 6;
        }
        setRandomPosition() {
            this.x = Math.random() * Abschlussarbeit02.crc2.canvas.width;
            this.y = 0;
        }
        move() {
            this.x += 0;
            this.y += 2;
        }
        draw() {
            Abschlussarbeit02.crc2.strokeStyle = this.color;
            Abschlussarbeit02.crc2.beginPath();
            //horizontal
            Abschlussarbeit02.crc2.moveTo(this.x, this.y);
            Abschlussarbeit02.crc2.lineTo(this.x + 20, this.y);
            //grün
            Abschlussarbeit02.crc2.moveTo(this.x + 4, this.y - 6);
            Abschlussarbeit02.crc2.lineTo(this.x + 16, this.y + 6);
            //rosa
            Abschlussarbeit02.crc2.moveTo(this.x + 4, this.y + 6);
            Abschlussarbeit02.crc2.lineTo(this.x + 16, this.y - 6);
            //vertikal
            Abschlussarbeit02.crc2.moveTo(this.x + 10, this.y - 10);
            Abschlussarbeit02.crc2.lineTo(this.x + 10, this.y + 10);
            Abschlussarbeit02.crc2.closePath();
            Abschlussarbeit02.crc2.stroke();
            Abschlussarbeit02.crc2.fillStyle = this.color;
            Abschlussarbeit02.crc2.beginPath();
            Abschlussarbeit02.crc2.moveTo(this.x, this.y);
            Abschlussarbeit02.crc2.arc(this.x + 10, this.y, 2, 0, 2 * Math.PI);
            Abschlussarbeit02.crc2.closePath();
            Abschlussarbeit02.crc2.fill();
        }
    }
    Abschlussarbeit02.MovingObject = MovingObject;
})(Abschlussarbeit02 || (Abschlussarbeit02 = {}));
//# sourceMappingURL=MovingObjects.js.map