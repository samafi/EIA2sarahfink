var Abschlussarbeit2;
(function (Abschlussarbeit2) {
    class blueFlake extends Abschlussarbeit2.MovingObject {
        constructor() {
            super();
            this.points = -20; // Punktezahl 
            this.color = "rgb(202,0,0)"; // rote Schneeflocke
            this.setRandomPosition();
        }
    }
    Abschlussarbeit2.blueFlake = blueFlake;
})(Abschlussarbeit2 || (Abschlussarbeit2 = {}));
//# sourceMappingURL=redFlake.js.map