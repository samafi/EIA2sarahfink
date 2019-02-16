var Abschlussarbeit02;
(function (Abschlussarbeit02) {
    class redFlake extends Abschlussarbeit02.MovingObject {
        constructor() {
            super();
            this.points = -20; // Punktezahl 
            this.color = "rgb(255,0,0)"; // rote Schneeflocke
            this.setRandomPosition();
        }
    }
    Abschlussarbeit02.redFlake = redFlake;
})(Abschlussarbeit02 || (Abschlussarbeit02 = {}));
//# sourceMappingURL=redFlake.js.map