var Abschlussarbeit02;
(function (Abschlussarbeit02) {
    class Snowman {
        constructor() {
            this.snowmanWidth = 90;
            this.snowmanHeight = 150;
        }
        // untere Schneekugel 
        // Schneemann zeichnen
        draw() {
            Abschlussarbeit02.crc2.fillStyle = "rgb(255, 255, 255)";
            //Kugel unten
            Abschlussarbeit02.crc2.beginPath();
            Abschlussarbeit02.crc2.moveTo(this.x, this.y);
            Abschlussarbeit02.crc2.arc(this.x, this.y, 60, 0, 2 * Math.PI);
            Abschlussarbeit02.crc2.closePath();
            Abschlussarbeit02.crc2.fill();
            //crc2.stroke();
            //Kugel Mitte
            Abschlussarbeit02.crc2.beginPath();
            Abschlussarbeit02.crc2.moveTo(this.x, this.y);
            Abschlussarbeit02.crc2.arc(this.x, this.y - 70, 48, 0, 2 * Math.PI);
            Abschlussarbeit02.crc2.closePath();
            Abschlussarbeit02.crc2.fill();
            //crc2.stroke();
            //obere Kugel
            Abschlussarbeit02.crc2.beginPath();
            Abschlussarbeit02.crc2.moveTo(this.x, this.y);
            Abschlussarbeit02.crc2.arc(this.x, this.y - 140, 40, 0, 2 * Math.PI);
            Abschlussarbeit02.crc2.closePath();
            Abschlussarbeit02.crc2.fill();
            //crc2.stroke();
            //Zylinder
            Abschlussarbeit02.crc2.fillStyle = "rgb(0,0,0)";
            Abschlussarbeit02.crc2.beginPath();
            Abschlussarbeit02.crc2.fillRect(this.x - 50, this.y - 180, 100, 5);
            Abschlussarbeit02.crc2.closePath();
            Abschlussarbeit02.crc2.beginPath();
            Abschlussarbeit02.crc2.fillRect(this.x - 25, this.y - 180, 50, -40);
            Abschlussarbeit02.crc2.closePath();
            //Augen 
            Abschlussarbeit02.crc2.beginPath();
            Abschlussarbeit02.crc2.moveTo(this.x, this.y);
            Abschlussarbeit02.crc2.arc(this.x - 15, this.y - 145, 5, 0, 2 * Math.PI);
            Abschlussarbeit02.crc2.closePath();
            Abschlussarbeit02.crc2.fill();
            //crc2.stroke();
            Abschlussarbeit02.crc2.beginPath();
            Abschlussarbeit02.crc2.moveTo(this.x, this.y);
            Abschlussarbeit02.crc2.arc(this.x + 15, this.y - 145, 5, 0, 2 * Math.PI);
            Abschlussarbeit02.crc2.closePath();
            Abschlussarbeit02.crc2.fill();
            //crc2.stroke();
            //Nase
            Abschlussarbeit02.crc2.fillStyle = "rgb(255, 119, 0)";
            Abschlussarbeit02.crc2.beginPath();
            Abschlussarbeit02.crc2.moveTo(this.x, this.y - 140);
            Abschlussarbeit02.crc2.lineTo(this.x - 5, this.y - 125);
            Abschlussarbeit02.crc2.lineTo(this.x + 5, this.y - 125);
            Abschlussarbeit02.crc2.closePath();
            //crc2.stroke();
            Abschlussarbeit02.crc2.fill();
            //Knöpfe
            Abschlussarbeit02.crc2.fillStyle = "rgb(153, 40, 40)";
            Abschlussarbeit02.crc2.beginPath();
            Abschlussarbeit02.crc2.moveTo(this.x, this.y);
            Abschlussarbeit02.crc2.arc(this.x, this.y - 85, 5, 0, 2 * Math.PI);
            Abschlussarbeit02.crc2.closePath();
            Abschlussarbeit02.crc2.fill();
            //crc2.stroke();
            Abschlussarbeit02.crc2.fillStyle = "rgb(153, 40, 40)";
            Abschlussarbeit02.crc2.beginPath();
            Abschlussarbeit02.crc2.moveTo(this.x, this.y);
            Abschlussarbeit02.crc2.arc(this.x, this.y - 60, 5, 0, 2 * Math.PI);
            Abschlussarbeit02.crc2.closePath();
            Abschlussarbeit02.crc2.fill();
            //Arme
            Abschlussarbeit02.crc2.strokeStyle = "rgb(0,0,0)";
            Abschlussarbeit02.crc2.beginPath();
            Abschlussarbeit02.crc2.moveTo(this.x + 48, this.y - 80);
            Abschlussarbeit02.crc2.lineTo(this.x + 70, this.y - 70);
            Abschlussarbeit02.crc2.closePath();
            //crc2.fill();
            Abschlussarbeit02.crc2.stroke();
            Abschlussarbeit02.crc2.beginPath();
            Abschlussarbeit02.crc2.moveTo(this.x - 48, this.y - 80);
            Abschlussarbeit02.crc2.lineTo(this.x - 70, this.y - 70);
            Abschlussarbeit02.crc2.closePath();
            // crc2.fill();
            Abschlussarbeit02.crc2.stroke();
        }
        //Schneemann nach links
        moveLeft() {
            if (this.x > 50) {
                this.x -= 30;
            }
        }
        //Schneemann nach rechts
        moveRight() {
            if (this.x + this.snowmanWidth < Abschlussarbeit02.crc2.canvas.width + 80) {
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
    Abschlussarbeit02.Snowman = Snowman;
})(Abschlussarbeit02 || (Abschlussarbeit02 = {})); // namespace schließen
//# sourceMappingURL=Snowman.js.map