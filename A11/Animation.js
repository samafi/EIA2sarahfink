var Aufgabe_11;
(function (Aufgabe_11) {
    window.addEventListener("load", init);
    let movingObjects = [];
    let canvas;
    let imgData;
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe_11.crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", insertFlakes);
        let width = canvas.width;
        let height = canvas.height;
        Aufgabe_11.drawBackground(); //Background aus separater ts Datei erstellen
        imgData = Aufgabe_11.crc2.getImageData(0, 0, canvas.width, canvas.height);
        /*  // (Background.ts)
           let hintergrund: Background = new Background();
          hintergrund.paint();
          imgData = crc2.getImageData(0, 0, canvas.width, canvas.height); //Canvas als Bild gespeichert
          console.log(imgData); */
        //Fische 
        for (let i = 0; i < 9; i++) {
            let fish = new Aufgabe_11.Fish();
            movingObjects.push(fish);
        }
        //Bubble
        for (let i = 0; i < 20; i++) {
            let bubbles = new Aufgabe_11.BubbleRechts();
            movingObjects.push(bubbles);
        }
        imgData = Aufgabe_11.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    //Futter
    function insertFlakes(_event) {
        let newPositionX = _event.clientX;
        let newPositionY = _event.clientY;
        for (let i = 0; i < 4; i++) {
            let flakes = new Aufgabe_11.Flake(newPositionX, newPositionY);
            movingObjects.push(flakes);
            //Bodenbereich: nicht alle auf der gleichen Linie
            newPositionX += Math.random() * 60;
            newPositionX -= Math.random() * 60;
            newPositionY += Math.random() * 30;
        }
    }
    //Animations-Function
    function animate() {
        window.setTimeout(animate, 10);
        Aufgabe_11.crc2.clearRect(0, 0, Aufgabe_11.crc2.canvas.width, Aufgabe_11.crc2.canvas.height);
        Aufgabe_11.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
    }
    //MoveObjects-Function
    function moveObjects() {
        for (let i = 0; i < movingObjects.length; i++) {
            movingObjects[i].move();
        }
    }
    //DrawObjects-Function
    function drawObjects() {
        for (let i = 0; i < movingObjects.length; i++) {
            movingObjects[i].draw();
        }
    }
})(Aufgabe_11 || (Aufgabe_11 = {}));
//# sourceMappingURL=Animation.js.map