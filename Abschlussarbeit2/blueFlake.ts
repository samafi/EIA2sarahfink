namespace Abschlussarbeit2 {

    export class blueFlake extends MovingObject {

        constructor() {
            super();
            this.points = 6;
            this.color = "rgb(198,106,205)";        // Hellblaue Schneeflocke
            this.setRandomPosition();
            
        }
    }
}