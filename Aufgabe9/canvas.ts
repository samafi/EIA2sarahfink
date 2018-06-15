namespace Aufgabe9_Canvas {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;
    let ctx: CanvasRenderingContext2D;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        
        // Kiste


        // Boden
        crc2.fillStyle = "rgb(210,180,140)"; 
        crc2.fillRect(0, 500, 360, 640);
        
        // Wasser
        crc2.fillStyle = "rgb(0,154,205)";
        crc2.fillRect(0, 0, 360, 500);

        //Bubbles
        drawBubbles(20, 220, 80, 260, 10)
        drawBubbles(220, 40, 80, 160, 8)

        //Fische (nach links) Koordinaten 
        drawFish1(100, 100, 1);                  // >links-rechts<, oben(kleine Zahl) unten (große Zahl),Objektgröße 
        drawFish1(280, 460, 1);
        drawFish1(340, 150, 0.3);
        drawFish1(210, 320, 0.3);
        drawFish1(80, 220, 0.4);
        
        // Fische (nach rechts) Koordinaten
        drawFish2(170, 200, 1);
        drawFish2(160, 460, 0.6);
        drawFish2(10, 130, 0.5);
        drawFish2(240, 360, 0.3);
        drawFish2(120, 340, 0.4);
        drawFish2(200, 50, 0.4);
        
        
        //Seegras
        drawSeagrass(340, 640, 1.5);
        drawSeagrass(320, 640, 1);
        drawSeagrass(300, 640, 1.3);
        drawSeagrass(280, 640, 0.7);
        drawSeagrass(100, 640, 1);
        drawSeagrass(140, 640, 1.3);
        drawSeagrass(50, 660, 3);
        drawSeagrass(20, 640, 0.8);

    }
    
        // Funktion für die Fische (nach rechts)
        function drawFish2(_x: number, _y: number, _s: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y - (-40 * _s));
        crc2.lineTo(_x - (-40 * _s), _y - (-20 * _s));
        crc2.closePath();
        crc2.moveTo(_x - (-20 * _s), _y - (-20 * _s));
        crc2.quadraticCurveTo(_x - (-60 * _s), _y - (-60 * _s), _x - (-60 * _s), _y - (-20 * _s));
        crc2.quadraticCurveTo(_x - (-60 * _s), _y + (-20 * _s), _x - (-20 * _s), _y - (-20 * _s));


        crc2.stroke();
        crc2.fillStyle = "rgb(255,106,106)"; //Korallfarbig
        crc2.fill();
    }

       // Funktion für die Fische (nach links)
        function drawFish1(_x: number, _y: number, _s: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y - (40 * _s));
        crc2.lineTo(_x - (20 * _s), _y - (20 * _s));
        crc2.closePath();
        crc2.moveTo(_x - (20 * _s), _y - (20 * _s));
        crc2.quadraticCurveTo(_x - (60 * _s), _y - (60 * _s), _x - (60 * _s), _y - (20 * _s));
        crc2.quadraticCurveTo(_x - (60 * _s), _y + (20 * _s), _x - (20 * _s), _y - (20 * _s));


        crc2.stroke();
        crc2.fillStyle = "rgb(138,43,226)"; //Lilafarbig
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
    
    
    
    // Funktion Bubbles
    function drawBubbles(_x: number, _y: number, _w: number, _h: number, _a: number): void {
        for (let i: number = 0; i < _a; i++) {
            let z: number = Math.random() * _w;
            let q: number = Math.random() * _h;
            let scale: number = Math.random() * 10;


            crc2.beginPath();

            crc2.arc(_x + z, _y + q, scale, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "rgb(152,245,255)";
            crc2.fill();
            console.log("Bubble");
        }
        
        
        
        //Seestern
        drawStar (240, 610);
        drawStar (190, 590);
        drawStar (230, 560);
            
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
        
        
        
        // Funktion Kiste 

        
        
    }
}
