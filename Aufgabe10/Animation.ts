namespace L10 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D
    let n: number = 9;
    let nBubbles: number = 20;
    let imagedata: ImageData;
    
        let fishes: Fish[] = [];
    let bubbles: Bubbles[] = [];
 
    
    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        
     

            
       

        drawGround();

        for (let i: number = 0; i < 10; i++) {
            let a: number = Math.random() * crc2.canvas.width;
            let b: number = Math.random() * (360 - 250) + 250;
            let c: number = Math.random() * (10 - 5) + 5;
        }
        
        //Seestern
        drawStar (240, 610);
        drawStar (190, 590);
        drawStar (230, 560);

           //Seegras
        drawSeagrass(340, 640, 1.5);
        drawSeagrass(320, 640, 1);
        drawSeagrass(300, 640, 1.3);
        drawSeagrass(280, 640, 0.7);
        drawSeagrass(100, 640, 1);
        drawSeagrass(140, 640, 1.3);
        drawSeagrass(50, 660, 3);
        drawSeagrass(20, 640, 0.8);

        drawWater();

        // Hintergrundbild
        imagedata = crc2.getImageData(0, 0, 640, 360);

        for (let i: number = 0; i < n; i++) {
            let fish: Fish = new Fish();
            fish.x = Math.random() * crc2.canvas.width;
            fish.y = Math.random() * 300;
            fish.r = Math.random() * 255;
            fish.g = Math.random() * 255;
            fish.b = Math.random() * 255;
            fishes.push(fish);
        }
        

        for (let i: number = 0; i < n - 2; i++) {
            let bubble: Bubbles = new Bubbles();
            bubble.x = Math.random() * (100 - 550) + 300;
            bubble.y = Math.random() * 180;
            bubble.r = Math.random() * 10;
            bubbles.push(bubble);
        }

        animate();
    }

    function animate(): void {
        window.setTimeout(animate, 17);

        crc2.putImageData(imagedata, 0, 0);

        moveFishes();
        moveBubbles();
        drawFishes();
        drawBubbles();
    }

    function moveFishes(): void {
        for (let i: number = 0; i < fishes.length; i++) {
            fishes[i].move();
        }
    }

    function drawFishes(): void {
        for (let i: number = 0; i < fishes.length; i++)
            fishes[i].draw();
    }

    function moveBubbles(): void {
        for (let i: number = 0; i < bubbles.length; i++) {
            bubbles[i].move();
        }
    }

    function drawBubbles(): void {
        for (let i: number = 0; i < bubbles.length; i++)
            bubbles[i].draw();
    }


















    

    
    function drawGround(): void {
        crc2.beginPath();
        crc2.moveTo(0, 100);
        crc2.lineTo(0, 360);
        for (let i: number = 0; i < 990; i++) {
            crc2.lineTo(i, 15 * Math.sin(i * .020) + 460);
        }
        crc2.lineTo(350, 640);
        crc2.lineTo(0, 640);
        crc2.fillStyle ="rgb(210,180,140)"; 
        crc2.fill();
        crc2.closePath();
    }

    function drawWater(): void {
        crc2.beginPath();
        crc2.lineTo(0, 640);
        crc2.lineTo(640, 640);
        crc2.lineTo(360, 0);
        crc2.lineTo(0, 0);
        crc2.fillStyle = "rgba(0, 185, 185, 0.25)";
        crc2.fill();
        crc2.closePath();
    }
    
        // Funktion Seestern 
     function drawStar ( _x: number, _y: number ): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(255, 255, 0)";
        crc2.moveTo( _x + 7, _y );
        crc2.lineTo( _x + 10, _y + 20 );
        crc2.lineTo( _x - 20, _y );
        crc2.lineTo( _x + 10, _y - 20 );
        crc2.closePath();

        crc2.moveTo( _x + 10, _y + 7 );
        crc2.lineTo( _x - 10, _y + 20 );
        crc2.lineTo( _x - 10, _y - 20 );
        crc2.lineTo( _x + 20, _y );
        crc2.closePath();
        crc2.stroke();
        crc2.fill();

    
        }

     //Funktion Seegras 
    function drawSeagrass(_x: number, _y: number, _s: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x + (20 * _s), _y - (20 * _s), _x - (0 * _s), _y - (10 * _s));
        crc2.quadraticCurveTo(_x + (10 * _s), _y - (40 * _s), _x - (0 * _s), _y - (30 * _s));
        crc2.quadraticCurveTo(_x + (10 * _s), _y - (60 * _s), _x - (0 * _s), _y - (50 * _s));
        crc2.quadraticCurveTo(_x + (10 * _s), _y - (60 * _s), _x - (0 * _s), _y - (80 * _s));
        crc2.quadraticCurveTo(_x + (-10 * _s), _y - (80 * _s), _x - (0 * _s), _y - (60 * _s));
        crc2.quadraticCurveTo(_x + (-10 * _s), _y - (70 * _s), _x - (0 * _s), _y - (40 * _s));
        crc2.quadraticCurveTo(_x + (-10 * _s), _y - (50 * _s), _x - (0 * _s), _y - (20 * _s));
        crc2.quadraticCurveTo(_x + (-10 * _s), _y - (30 * _s), _x - (0 * _s), _y - (0 * _s));
   
        crc2.closePath();
        
        crc2.stroke();
        crc2.fillStyle = "rgb(105,139,34)";
        crc2.fill();


    }
   
    
    
    
    


   
} //namespace ende