namespace L10 {

    export class Bubbles {
        x: number;
        y: number;
        r: number;

        // declare method without keyword function
        move(): void {
            this.y -= 2;

            if (this.y < 0) {
                this.y = 300;
            }

        }

        draw(): void {

            crc2.beginPath();
            crc2.arc(this.x, this.y, this.r, 0, 5 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "rgb(0,154,205)";
            crc2.fill();


        }
    }

}