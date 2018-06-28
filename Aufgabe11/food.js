var Aufgabe11;
(function (Aufgabe11) {
    class Food extends Aufgabe11.MovingObjects {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        move() {
            this.y += 10;
            if (this.y > 630) {
                this.y = 630;
            }
        }
        draw() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x - 2, this.y);
            Aufgabe11.crc2.lineTo(this.x + 4, this.y + 4);
            Aufgabe11.crc2.lineTo(this.x + 3, this.y - 3);
            Aufgabe11.crc2.lineTo(this.x, this.y + 2);
            Aufgabe11.crc2.lineTo(this.x + -1, this.y + 3);
            Aufgabe11.crc2.lineTo(this.x - 2, this.y);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fillStyle = this.color;
        }
    }
    Aufgabe11.Food = Food;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=food.js.map