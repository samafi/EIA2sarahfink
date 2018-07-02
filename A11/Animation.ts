namespace Aufgabe_11 {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let movingObjects: MovingObjects[] = [];

    let canvas: HTMLCanvasElement;
    let imgData: ImageData;

    function init(_event: Event): void {
        
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", insertFlakes);
        
        let width: number = canvas.width;
        let height: number = canvas.height;
        
        drawBackground(); //Background aus separater ts Datei erstellen
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        
      /*  // (Background.ts)
         let hintergrund: Background = new Background();
        hintergrund.paint();
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height); //Canvas als Bild gespeichert
        console.log(imgData); */
        
        //Fische 
        for (let i: number = 0; i < 9; i++) {
            let fish: Fish = new Fish();
            movingObjects.push(fish);
        }
        
        //Bubble

        for (let i: number = 0; i < 20; i++) {
            let bubbles: BubbleRechts = new BubbleRechts ();
            movingObjects.push(bubbles);
        }


        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    
    //Futter
    function insertFlakes(_event: MouseEvent): void {
        let newPositionX: number = _event.clientX;
        let newPositionY: number = _event.clientY;
        
        for (let i: number = 0; i < 4; i++) {
            let flakes: Flake = new Flake(newPositionX, newPositionY);
            movingObjects.push(flakes);
            //Bodenbereich: nicht alle auf der gleichen Linie
            newPositionX += Math.random() * 60;
            newPositionX -= Math.random() * 60;
            newPositionY += Math.random() * 30;
        }
    }
    
    //Animations-Function
    function animate(): void {
        
        window.setTimeout(animate, 10);

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);

        moveObjects();
        drawObjects();
    }

    //MoveObjects-Function
    function moveObjects(): void {
        
        for (let i: number = 0; i < movingObjects.length; i++) {
            movingObjects[i].move();
        }
        
    }
    
    //DrawObjects-Function
    function drawObjects(): void {
        
        for (let i: number = 0; i < movingObjects.length; i++) {
            movingObjects[i].draw();
        }        
    }    
}