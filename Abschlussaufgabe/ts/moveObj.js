var Semester;
(function (Semester) {
    class MoveObj {
        constructor(_xPos, _yPos, _charakter) {
            this.falling = false;
            this.a = 15;
            this.jumpCounter = 0;
            this.jumpHeight = 40;
            this.jumpBo = false;
            this.out = false;
            this.jumpStopt = false;
            this.playerCounter = 0;
            this.xPos = _xPos;
            this.yPos = _yPos;
            this.charakter = _charakter;
        }
        update() {
            this.draw();
            if (this.jumpBo == true) {
                this.jump();
            }
            if (this.yPos > 600) {
                this.yPos = -10;
                this.xPos = Math.random() * 800;
            }
            if (this.yPos < 0) {
                this.out = true;
            }
            if (this.yPos >= 0 && this.yPos <= 600) {
                this.out = false;
            }
            if (this.falling == true) {
                this.fall();
            }
        }
        jumpStop() {
            if (this.jumpStopt == false) {
                this.jumpBo = false;
                this.jumpCounter = 0;
                this.falling = false;
                this.jumpStopt = true;
                this.a = 15;
            }
        }
        jump() {
            this.falling = false;
            this.yPos += this.a;
            this.jumpCounter++;
            this.playerCounter += this.jumpCounter;
            if (this.jumpCounter == this.jumpHeight / 2) {
                this.jumpStopt = false;
                this.a *= -1;
            }
            if (this.jumpCounter >= this.jumpHeight) {
                this.a = 15;
                this.jumpCounter = 0;
                this.jumpBo = false;
                this.falling = true;
            }
        }
        fall() {
            this.a = 15;
            this.yPos -= this.a;
        }
        draw() {
            Semester.crc2.fillStyle = "white";
            Semester.crc2.fillRect(this.xPos, this.yPos, 40, 10);
        }
    }
    Semester.MoveObj = MoveObj;
})(Semester || (Semester = {}));
//# sourceMappingURL=moveObj.js.map