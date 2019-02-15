var Abschlussarbeit2;
(function (Abschlussarbeit2) {
    class greyFlake extends Abschlussarbeit2.MovingObject {
        constructor() {
            super();
            this.points = +10;
            this.color = "rgb(224,255,255)"; // Dunkelgrau
            this.setRandomPosition();
        }
    }
    Abschlussarbeit2.greyFlake = greyFlake;
})(Abschlussarbeit2 || (Abschlussarbeit2 = {}));
//# sourceMappingURL=greyFlake.js.map