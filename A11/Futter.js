var Aufgabe_11;
(function (Aufgabe_11) {
    class Flake extends Aufgabe_11.MovingObjects {
        constructor(newPositionX, newPositionY) {
            super();
            this.setRandomColor();
            this.x = newPositionX;
            this.y = newPositionY;
            this.scale = 3;
            this.stop = Math.random() * (600 - 635) + 640;
        }
        setRandomColor() {
            let c = Math.floor(Math.random() * 3);
            switch (c) {
                case 0:
                    this.color = "#A52A2A";
                    break;
                case 1:
                    this.color = "'8B4513";
                    break;
                case 2:
                    this.color = "#CD853F";
            }
        }
        draw() {
            Aufgabe_11.crc2.fillStyle = this.color;
            Aufgabe_11.crc2.beginPath();
            Aufgabe_11.crc2.arc(this.x, this.y, this.scale, 0, 2 * Math.PI, true);
            Aufgabe_11.crc2.closePath();
            Aufgabe_11.crc2.fill();
            Aufgabe_11.crc2.strokeStyle = "transparent";
            Aufgabe_11.crc2.stroke();
        }
        move() {
            this.x += 0;
            this.y += 1;
            if (this.y > this.stop) {
                this.y = this.stop;
            }
        }
    }
    Aufgabe_11.Flake = Flake;
})(Aufgabe_11 || (Aufgabe_11 = {}));
//# sourceMappingURL=Futter.js.map