namespace Abschlussarbeit2 {

    export class blueFlake extends MovingObject {

        constructor() {
            super();
            this.points = -20                       // Punktezahl 
            this.color = "rgb(255,0,0)";        // rote Schneeflocke
            this.setRandomPosition();
            
        }
    }
}