namespace Abschlussarbeit02 {

    export class greyFlake extends MovingObject {

        constructor() {
            super();
            this.points = +5;
            this.color = "rgb(235,235,235)";        // Dunkelgrau
            this.setRandomPosition();
        }
    }
}