var L10;
(function (L10) {
    class Bubbles {
        // declare method without keyword function
        move() {
            this.y -= 2;
            if (this.y < 0) {
                this.y = 300;
            }
        }
        draw() {
            L10.crc2.beginPath();
            L10.crc2.arc(this.x, this.y, this.r, 0, 5 * Math.PI);
            L10.crc2.closePath();
            L10.crc2.fillStyle = "rgb(0,154,205)";
            L10.crc2.fill();
        }
    }
    L10.Bubbles = Bubbles;
})(L10 || (L10 = {}));
//# sourceMappingURL=Bubbles.js.map