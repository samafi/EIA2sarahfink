namespace Abschlussarbeit02 {

    export class blueFlake extends MovingObject {

        constructor() {
            super();
            this.points = +5;                       // +5 Punkte
            this.color = "rgb(224,255,255)";        // Türkis
            this.setRandomPosition();
        }
    }
}