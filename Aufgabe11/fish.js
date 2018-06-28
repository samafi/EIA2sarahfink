var Aufgabe11;
(function (Aufgabe11) {
    class Fish extends Aufgabe11.MovingObjects {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        move() {
            this.x += Math.random() * (-2) - 2;
            if (this.x < -55) {
                this.x = Aufgabe11.crc2.canvas.width;
                this.y += Math.random() * (-1) - 3;
            }
        }
        draw() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.quadraticCurveTo(this.x + 25, this.y - 35, this.x + 50, this.y);
            Aufgabe11.crc2.lineTo(this.x + 65, this.y + 15);
            Aufgabe11.crc2.lineTo(this.x + 65, this.y - 15);
            Aufgabe11.crc2.lineTo(this.x + 50, this.y);
            Aufgabe11.crc2.quadraticCurveTo(this.x + 25, this.y + 35, this.x, this.y);
            Aufgabe11.crc2.fillStyle = "rgb(255,106,106)"; //Korallfarbig
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
        }
    }
    Aufgabe11.Fish = Fish;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=fish.js.map