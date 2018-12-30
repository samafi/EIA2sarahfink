namespace Abschlussarbeit2 {

    export class greyFlake extends MovingObject {

        constructor() {
            super();
            this.points = -3;
            this.color = "rgb(148,148,148)";        // Dunkelgrau
            this.setRandomPosition();
        }
    }
}
