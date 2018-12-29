namespace Abschlussarbeit {

    export class BubbleOrange extends MovingObject {

        constructor() {
            super();
            this.points = 10;
            this.color = "rgb(252,252,252)";        // weiße Schneeflocke
            this.setRandomPosition();
        }
    }
}
