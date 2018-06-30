
// ANMERKUNG!!! Ich weiß dass man die color mit vererben kann (Für Fische, bubble, Futter) ich fand es so aber für mich übersichtlicher und verständlicher.
// deshalb hab ich in den jeweiligen Subklassen die color direkt deklariert. Das geht hoffentlich so in Ordnung.  

namespace Aufgabe11 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let imgData: ImageData;
    let objects: MovingObjects[] = [];
    let nfish: number = 10;
    let nsfish: number = 30;
    let b: number = 30;


    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        let width: number = canvas.width;
        let height: number = canvas.height;

        let hintergrund: Background = new Background();
        hintergrund.paint();
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height); //Canvas als Bild gespeichert
        console.log(imgData);

        canvas.addEventListener("click", insertNewObject);
        
        canvas.addEventListener("touchstart", insertNewObject);
        
        // Fische
        for (let i: number = 0; i < nfish; i++) {
            let fish: Fish = new Fish(Math.random() * crc2.canvas.width, Math.random() * crc2.canvas.height, "rgb(255,106,106)");
            objects.push(fish);
        }

        // Bubble 
     for (let i: number = 0; i < b - 2; i++) {
            let blubb: Bubble = new Bubble(Math.random() * (1000 - 500) + 0, Math.random() * 180, "rgba(188,210,238,10)");
            blubb.r = Math.random() * 10;
            objects.push(blubb);
        }   

        
        animate();

    }
    
    //Futterflocken
    function insertNewObject(_event: MouseEvent): void {
        let cx: number = _event.pageX
        let cy: number = _event.pageY;
        let foodColor: string[] = ["rgba(238,154,73)", "rgba(290,154,73)", "rgba(138,154,73)", "rgba(238,54,233)"]
        let flake: Food = new Food(cx, cy, foodColor[Math.floor(Math.random()* 4)]);
        flake.r = Math.random() * 10;
        objects.push(flake);
    }

   /* function insertNewObject(_event: MouseEvent): void {
        
        let cx: number = _event.clientX;
        let cy: number = _event.clientY;
    
        for (let i: number = 0; i < 3; i++) {
        let foodColor: string[] = []
        let flake: Food = new Food(cx, cy);
                    objects.push(flake);
        cx += Math.random() * 0;
         cx += Math.random() * 0;
                    cy += Math.random() * 0;



    }       */ 
                   /*         function insertFlakes(_event: MouseEvent): void {
        let newPositionX: number = _event.clientX;
        let newPositionY: number = _event.clientY;
        
        for (let i: number = 0; i < 4; i++) {
            let flakes: Flake = new Flake(newPositionX, newPositionY);
            movingObjects.push(flakes);
            //Bereich, in dem die Futterflocken liegen bleiben, damit sie nicht auf einer Linie liegen
            newPositionX += Math.random() * 60;
            newPositionX -= Math.random() * 60;
            newPositionY += Math.random() * 30;
        }
    } 
}*/

    function animate(): void {

        window.setTimeout(animate, 40);
        crc2.putImageData(imgData, 0, 0);

        moveObjects();
        drawObjects();

    }


    function moveObjects(): void {

        for (let i: number = 0; i < objects.length; i++) {
            objects[i].move();
        }

    }

    function drawObjects(): void {

        for (let i: number = 0; i < objects.length; i++) {
            objects[i].draw();
        }

    }
}