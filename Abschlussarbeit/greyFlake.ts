namespace Abschlussarbeit {

    export class BubbleRed extends MovingObject {

        constructor() {
            super();
            this.points = 3;
            this.color = "rgb(148,148,148)"; // Dunkelgrau
            this.setRandomPosition();
        }
    }
}
