var Abschlussarbeit02;
(function (Abschlussarbeit02) {
    class Tree {
        drawTrunk() {
            Abschlussarbeit02.crc2.beginPath();
            Abschlussarbeit02.crc2.fillStyle = "rgb(139,90,0)";
            Abschlussarbeit02.crc2.moveTo(this.x, this.y + 50);
            Abschlussarbeit02.crc2.fillRect(this.x, this.y, 70, 40);
            Abschlussarbeit02.crc2.closePath();
            Abschlussarbeit02.crc2.stroke();
            Abschlussarbeit02.crc2.fill();
        }
        // Baum zeichnen      
        draw() {
            Abschlussarbeit02.crc2.beginPath();
            Abschlussarbeit02.crc2.fillStyle = "rgb(0,115,0)";
            Abschlussarbeit02.crc2.moveTo(this.x, this.y);
            Abschlussarbeit02.crc2.lineTo(this.x - 100, this.y);
            Abschlussarbeit02.crc2.lineTo(this.x, this.y - 100);
            Abschlussarbeit02.crc2.lineTo(this.x - 80, this.y - 100);
            Abschlussarbeit02.crc2.lineTo(this.x + 25, this.y - 200);
            Abschlussarbeit02.crc2.lineTo(this.x + 130, this.y - 100);
            Abschlussarbeit02.crc2.lineTo(this.x + 50, this.y - 100);
            Abschlussarbeit02.crc2.lineTo(this.x + 150, this.y);
            Abschlussarbeit02.crc2.lineTo(this.x + 50, this.y);
            Abschlussarbeit02.crc2.stroke();
            Abschlussarbeit02.crc2.fill();
            this.drawTrunk();
        }
    }
    Abschlussarbeit02.Tree = Tree;
})(Abschlussarbeit02 || (Abschlussarbeit02 = {}));
//# sourceMappingURL=Trees.js.map