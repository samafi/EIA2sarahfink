var Abschlussarbeit02;
(function (Abschlussarbeit02) {
    class greyFlake extends Abschlussarbeit02.MovingObject {
        constructor() {
            super();
            this.points = +5; // + 5 Punkte
            this.color = "rgb(224,255,255)"; // Türkis
            this.setRandomPosition();
        }
    }
    Abschlussarbeit02.greyFlake = greyFlake;
})(Abschlussarbeit02 || (Abschlussarbeit02 = {}));
//# sourceMappingURL=blueFlake.js.map