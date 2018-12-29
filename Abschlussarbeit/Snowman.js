var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Snowman {
        constructor() {
            this.snowmanWidth = 154;
            this.snowmanHeight = 90;
        }
        // untere Schneekugel 
        draw() {
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.fillStyle = "rgb(255, 255, 255)";
            Abschlussarbeit.crc2.moveTo(this.x, this.y);
            Abschlussarbeit.crc2.bezierCurveTo(this.x, this.y + this.snowmanHeight, this.x + this.snowmanWidth, this.y + this.snowmanHeight, this.x + this.snowmanWidth, this.y);
            Abschlussarbeit.crc2.closePath();
            Abschlussarbeit.crc2.fill();
            Abschlussarbeit.crc2.stroke();
        }
        //Schneemann nach links
        moveLeft() {
            if (this.x > 0) {
                this.x -= 30;
            }
        }
        //Schneemann nach rechts
        moveRight() {
            if (this.x + this.snowmanWidth < Abschlussarbeit.crc2.canvas.width) {
                this.x += 30;
            }
        }
        //Überprüfung ob Schneeflocke und Schneemann auf gleicher Höhe
        checkIfInside(_x, _y) {
            if (_x > this.x && _x < (this.x + this.snowmanWidth) && _y > this.y && _y < this.y + this.snowmanHeight) {
                return true;
            }
            return false;
        }
    }
    Abschlussarbeit.Snowman = Snowman;
})(Abschlussarbeit || (Abschlussarbeit = {})); // namespace schließen
//# sourceMappingURL=Snowman.js.map