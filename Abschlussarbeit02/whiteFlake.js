var Abschlussarbeit02;
(function (Abschlussarbeit02) {
    class whiteFlake extends Abschlussarbeit02.MovingObject {
        constructor() {
            super();
            this.points = +10;
            this.color = "rgb(252,252,252)"; // weiße Schneeflocke
            this.setRandomPosition();
        }
    }
    Abschlussarbeit02.whiteFlake = whiteFlake;
})(Abschlussarbeit02 || (Abschlussarbeit02 = {}));
//# sourceMappingURL=whiteFlake.js.map