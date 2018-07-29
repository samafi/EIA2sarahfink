namespace Semester {


    export class Background {
        xPos: number;
        yPos: number;
        xPosB: number = Math.random() * 100;
        yPosB: number = Math.random() * 100;
        hintergrund: ImageData;
        sterneAnzahl: number = 1000*Math.random();

        constructor(_xPos: number, _yPos: number) {

            this.xPos = _xPos;
            this.yPos = _yPos;

        }
        update(): void {           
            crc2.putImageData(this.hintergrund,0,0);
        }
        drawStern():void{
              for (let i:number = 0; i< this.sterneAnzahl ; i++){
                  let height : number = 300*Math.random();
                  crc2.beginPath();
                      crc2.arc(800*Math.random(),600*Math.random(), 2*Math.random(), 0, 2 * Math.PI);
                crc2.fillStyle = 'white';
             crc2.fill();
            crc2.closePath();
                  
                  
                }
        }

        draw(): void {


            crc2.fillStyle = "#000";
            crc2.fillRect(this.xPos, this.yPos, 800, 500);
            
            

            this.drawStern();
            
//            crc2.fillStyle = "#5FB404";
//            crc2.fillRect(this.xPos, this.yPos + 500, 800, 100);
          this.hintergrund = crc2.getImageData(0, 0, 800, 600)

        }

    }
}