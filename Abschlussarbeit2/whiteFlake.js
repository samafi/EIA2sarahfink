var Abschlussarbeit2;
(function (Abschlussarbeit2) {
    class whiteFlake extends Abschlussarbeit2.MovingObject {
        constructor() {
            super();
            this.points = +15;
            this.color = "rgb(252,252,252)"; // weiße Schneeflocke
            this.setRandomPosition();
        }
    }
    Abschlussarbeit2.whiteFlake = whiteFlake;
})(Abschlussarbeit2 || (Abschlussarbeit2 = {}));
//# sourceMappingURL=whiteFlake.js.map