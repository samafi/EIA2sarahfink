namespace Abschlussarbeit02 {

    export class redFlake extends MovingObject {

        constructor() {
            super();
            this.points = -20                       // Punktezahl 
            this.color = "rgb(255,0,0)";           // rote Schneeflocke
            this.setRandomPosition();
            
        }
    }
}