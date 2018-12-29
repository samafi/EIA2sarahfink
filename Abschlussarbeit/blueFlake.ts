namespace Abschlussarbeit {

    export class BubblePink extends MovingObject {

        constructor() {
            super();
            this.points = 6;
            this.color = "rgb(198,226,255)";        // Hellblaue Schneeflocke
            this.setRandomPosition();
        }
    }
}