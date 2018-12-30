var Abschlussarbeit2;
(function (Abschlussarbeit2) {
    class blueFlake extends Abschlussarbeit2.MovingObject {
        constructor() {
            super();
            this.points = -6; // Punktezahl 
            this.color = "rgb(218,165,32)"; // Hellblaue Schneeflocke
            this.setRandomPosition();
        }
    }
    Abschlussarbeit2.blueFlake = blueFlake;
})(Abschlussarbeit2 || (Abschlussarbeit2 = {}));
//# sourceMappingURL=blueFlake.js.map