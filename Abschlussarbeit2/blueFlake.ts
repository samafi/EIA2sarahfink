namespace Abschlussarbeit2 {

    export class blueFlake extends MovingObject {

        constructor() {
            super();
            this.points = -6                       // Punktezahl 
            this.color = "rgb(218,165,32)";        // Hellblaue Schneeflocke
            this.setRandomPosition();
            
        }
    }
}