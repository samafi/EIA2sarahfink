var Abschlussarbeit2;
(function (Abschlussarbeit2) {
    class greyFlake extends Abschlussarbeit2.MovingObject {
        constructor() {
            super();
            this.points = 3;
            this.color = "rgb(148,148,148)"; // Dunkelgrau
            this.setRandomPosition();
        }
    }
    Abschlussarbeit2.greyFlake = greyFlake;
})(Abschlussarbeit2 || (Abschlussarbeit2 = {}));
//# sourceMappingURL=greyFlake.js.map