namespace Abschlussarbeit2 {

    export class whiteFlake extends MovingObject {

        constructor() {
            super();
            this.points = +10;
            this.color = "rgb(252,252,252)";        // weiße Schneeflocke
            this.setRandomPosition();
        }
    }
}
