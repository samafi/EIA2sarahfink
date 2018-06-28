namespace Aufgabe11 {
    export class Food extends MovingObjects {
        r: number;

        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color);

        }

        move(): void {
            this.y += 10;

            if (this.y > 630) {
                this.y = 630;
            }

        }

        draw(): void {
            crc2.beginPath();
            crc2.moveTo(this.x - 2, this.y);
            crc2.lineTo(this.x + 4, this.y + 4);
            crc2.lineTo(this.x + 3, this.y - 3);
            crc2.lineTo(this.x, this.y + 2);
            crc2.lineTo(this.x + - 1, this.y + 3);
            crc2.lineTo(this.x - 2, this.y);      
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = this.color;
        }

    }
}