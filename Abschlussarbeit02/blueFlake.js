var Abschlussarbeit02;
(function (Abschlussarbeit02) {
    class greyFlake extends Abschlussarbeit02.MovingObject {
        constructor() {
            super();
            this.points = +5;
            this.color = "rgb(224,255,255)"; // Dunkelgrau
            this.setRandomPosition();
        }
    }
    Abschlussarbeit02.greyFlake = greyFlake;
})(Abschlussarbeit02 || (Abschlussarbeit02 = {}));
//# sourceMappingURL=blueFlake.js.map