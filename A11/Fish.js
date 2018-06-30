var Aufgabe_11;
(function (Aufgabe_11) {
    class Fish extends Aufgabe_11.MovingObjects {
        constructor() {
            super();
            this.setRandomPosition();
        }
        setRandomPosition() {
            this.x = Math.random() * Aufgabe_11.crc2.canvas.width;
            this.y = Math.random() * Aufgabe_11.crc2.canvas.height - 100;
        }
        move() {
            this.x -= 2;
            this.y += 0;
            if (this.x < -150) {
                this.x = Aufgabe_11.crc2.canvas.width;
                this.y += 0;
            }
            if (this.y < 0) {
                this.y = Aufgabe_11.crc2.canvas.height - 100;
                this.x -= 2;
            }
        }
        draw() {
            Aufgabe_11.crc2.beginPath();
            Aufgabe_11.crc2.moveTo(this.x, this.y);
            Aufgabe_11.crc2.quadraticCurveTo(this.x + 25, this.y - 35, this.x + 50, this.y);
            Aufgabe_11.crc2.lineTo(this.x + 65, this.y + 15);
            Aufgabe_11.crc2.lineTo(this.x + 65, this.y - 15);
            Aufgabe_11.crc2.lineTo(this.x + 50, this.y);
            Aufgabe_11.crc2.quadraticCurveTo(this.x + 25, this.y + 35, this.x, this.y);
            Aufgabe_11.crc2.fillStyle = "rgb(255,106,106)"; //Korallfarbig
            Aufgabe_11.crc2.stroke();
            Aufgabe_11.crc2.fill();
        }
    }
    Aufgabe_11.Fish = Fish;
})(Aufgabe_11 || (Aufgabe_11 = {}));
//# sourceMappingURL=Fish.js.map