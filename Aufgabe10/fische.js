var L10;
(function (L10) {
    class Fish {
        move() {
            this.x += Math.random() * (-2) - 2;
            if (this.x < -55) {
                this.x = L10.crc2.canvas.width;
                this.y += Math.random() * (-1) - 3;
            }
        }
        draw() {
            L10.crc2.beginPath();
            L10.crc2.moveTo(this.x, this.y);
            L10.crc2.quadraticCurveTo(this.x + 25, this.y - 35, this.x + 50, this.y);
            L10.crc2.lineTo(this.x + 65, this.y + 15);
            L10.crc2.lineTo(this.x + 65, this.y - 15);
            L10.crc2.lineTo(this.x + 50, this.y);
            L10.crc2.quadraticCurveTo(this.x + 25, this.y + 35, this.x, this.y);
            L10.crc2.fillStyle = "rgb(255,106,106)"; //Korallfarbig
            L10.crc2.stroke();
            L10.crc2.fill();
        }
    }
    L10.Fish = Fish;
})(L10 || (L10 = {}));
//# sourceMappingURL=fische.js.map