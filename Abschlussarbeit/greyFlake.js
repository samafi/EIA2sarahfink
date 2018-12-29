var Abschlussarbeit;
(function (Abschlussarbeit) {
    class BubbleRed extends Abschlussarbeit.MovingObject {
        constructor() {
            super();
            this.points = 3;
            this.color = "rgb(148,148,148)"; // Dunkelgrau
            this.setRandomPosition();
        }
    }
    Abschlussarbeit.BubbleRed = BubbleRed;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=greyFlake.js.map