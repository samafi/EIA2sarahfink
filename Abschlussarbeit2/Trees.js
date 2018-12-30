var Abschlussarbeit2;
(function (Abschlussarbeit2) {
    class Tree {
        drawTrunk() {
            Abschlussarbeit2.crc2.beginPath();
            Abschlussarbeit2.crc2.fillStyle = "rgb(139,90,0)";
            Abschlussarbeit2.crc2.moveTo(this.x, this.y + 50);
            Abschlussarbeit2.crc2.fillRect(this.x, this.y, 70, 40);
            Abschlussarbeit2.crc2.closePath();
            Abschlussarbeit2.crc2.stroke();
            Abschlussarbeit2.crc2.fill();
        }
        // Baum zeichnen      
        draw() {
            Abschlussarbeit2.crc2.beginPath();
            Abschlussarbeit2.crc2.fillStyle = "rgb(0,115,0)";
            Abschlussarbeit2.crc2.moveTo(this.x, this.y);
            Abschlussarbeit2.crc2.lineTo(this.x - 100, this.y);
            Abschlussarbeit2.crc2.lineTo(this.x, this.y - 100);
            Abschlussarbeit2.crc2.lineTo(this.x - 80, this.y - 100);
            Abschlussarbeit2.crc2.lineTo(this.x + 25, this.y - 200);
            Abschlussarbeit2.crc2.lineTo(this.x + 130, this.y - 100);
            Abschlussarbeit2.crc2.lineTo(this.x + 50, this.y - 100);
            Abschlussarbeit2.crc2.lineTo(this.x + 150, this.y);
            Abschlussarbeit2.crc2.lineTo(this.x + 50, this.y);
            Abschlussarbeit2.crc2.stroke();
            Abschlussarbeit2.crc2.fill();
            this.drawTrunk();
        }
    }
    Abschlussarbeit2.Tree = Tree;
})(Abschlussarbeit2 || (Abschlussarbeit2 = {}));
//# sourceMappingURL=Trees.js.map