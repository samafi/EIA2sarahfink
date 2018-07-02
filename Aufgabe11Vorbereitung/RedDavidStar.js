var Vorbereitung;
(function (Vorbereitung) {
    class DavidStarRed extends Vorbereitung.DavidStar {
        constructor(_color) {
            super(_color);
        }
        move() {
            this.x += 2;
            this.y -= 1;
        }
    }
    Vorbereitung.DavidStarRed = DavidStarRed;
})(Vorbereitung || (Vorbereitung = {}));
//# sourceMappingURL=RedDavidStar.js.map