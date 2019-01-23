
namespace Abschlussarbeit2 {

    export class greyFlake extends MovingObject {

        constructor() {
            super();
            this.points = -3;
            this.color = "rgb(207,207,207)";        // Dunkelgrau
            this.setRandomPosition();
        }
    }
}

