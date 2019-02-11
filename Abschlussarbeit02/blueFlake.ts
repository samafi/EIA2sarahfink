namespace Abschlussarbeit02 {

    export class greyFlake extends MovingObject {

        constructor() {
            super();
            this.points = +5;
            this.color = "rgb(224,255,255)";        // Dunkelgrau
            this.setRandomPosition();
        }
    }
}