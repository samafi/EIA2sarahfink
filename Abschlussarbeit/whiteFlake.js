var Abschlussarbeit;
(function (Abschlussarbeit) {
    class BubbleOrange extends Abschlussarbeit.MovingObject {
        constructor() {
            super();
            this.points = 10;
            this.color = "rgb(252,252,252)"; // weiße Schneeflocke
            this.setRandomPosition();
        }
    }
    Abschlussarbeit.BubbleOrange = BubbleOrange;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=whiteFlake.js.map