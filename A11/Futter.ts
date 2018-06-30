namespace Aufgabe_11 {
    export class Flake extends MovingObjects {
        scale: number;
        color: string;
        stop: number;
        
        constructor(newPositionX: number, newPositionY: number) {
            super();
            this.setRandomColor();
            this.x = newPositionX;
            this.y = newPositionY;
            this.scale = 3;
            this.stop = Math.random() * (600 - 635) + 640;    
        }
        
        setRandomColor(): void {
            let c: number = Math.floor(Math.random() * 3);
            switch (c) {
                case 0:
                    this.color = "#A52A2A";
                    break;
                case 1:
                    this.color = "'8B4513";
                    break;
                case 2:
                    this.color = "#CD853F";
            }
        }
        
        draw(): void {
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.scale, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.fill();
            crc2.strokeStyle = "transparent";
            crc2.stroke(); 
        }
        
        move(): void {
            this.x += 0;
            this.y += 1;

            if (this.y > this.stop) {
                this.y = this.stop;
            }
        }
    }    
}