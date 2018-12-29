var Abschlussarbeit;
(function (Abschlussarbeit) {
    class BubblePink extends Abschlussarbeit.MovingObject {
        constructor() {
            super();
            this.points = 6;
            this.color = "rgb(198,226,255)"; // Hellblaue Schneeflocke
            this.setRandomPosition();
        }
    }
    Abschlussarbeit.BubblePink = BubblePink;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=blueFlake.js.map