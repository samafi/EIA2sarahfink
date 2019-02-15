
namespace Abschlussarbeit2 {

    export class greyFlake extends MovingObject {

        constructor() {
            super();
            this.points = +10;
            this.color = "rgb(224,255,255)";        // Dunkelgrau
            this.setRandomPosition();
        }
    }
}

