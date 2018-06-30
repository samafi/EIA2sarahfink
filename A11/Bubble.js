var Aufgabe_11;
(function (Aufgabe_11) {
    class BubbleRechts extends Aufgabe_11.MovingObjects {
        constructor() {
            super();
            this.setRandomPosition();
        }
        setRandomPosition() {
            this.x = Math.random() * (100 - 465) + 300;
            this.y = Math.random() * 400;
            this.scale = Math.random() * 8;
        }
        move() {
            this.x += 0;
            this.y -= 2;
            if (this.y < 0) {
                this.y = 640;
            }
        }
        draw() {
            Aufgabe_11.crc2.beginPath();
            Aufgabe_11.crc2.arc(this.x, this.y, this.scale, 2, 3 * Math.PI, true);
            Aufgabe_11.crc2.stroke();
            Aufgabe_11.crc2.fillStyle = "#A9D0F5";
            Aufgabe_11.crc2.strokeStyle = "#A9D0F5";
            Aufgabe_11.crc2.fill();
        }
    }
    Aufgabe_11.BubbleRechts = BubbleRechts;
})(Aufgabe_11 || (Aufgabe_11 = {}));
//# sourceMappingURL=Bubble.js.map