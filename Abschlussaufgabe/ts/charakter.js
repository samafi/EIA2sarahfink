var Semester;
(function (Semester) {
    class Charakter {
        constructor(_xPos, _yPos) {
            this.speed = 5;
            this.moveleft = false;
            this.moveright = false;
            this.xPos = _xPos;
            this.yPos = _yPos;
        }
        update() {
            this.draw();
            if (this.moveleft == true) {
                this.moveLeft();
            }
            if (this.moveright == true) {
                this.moveRight();
            }
        }
        moveLeft() {
            this.xPos -= this.speed;
        }
        moveRight() {
            this.xPos += this.speed;
        }
        draw() {
            Semester.crc2.beginPath();
            Semester.crc2.fillStyle = "red";
            Semester.crc2.fillRect(this.xPos, this.yPos, 10, 10);
            Semester.crc2.closePath();
        }
    }
    Semester.Charakter = Charakter;
})(Semester || (Semester = {}));
//# sourceMappingURL=charakter.js.map