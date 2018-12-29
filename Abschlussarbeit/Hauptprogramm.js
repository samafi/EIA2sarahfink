var Abschlussarbeit;
(function (Abschlussarbeit) {
    window.addEventListener("load", init);
    let imgData;
    //MovingObject
    let movingObjects = [];
    let m = 3;
    //Weihnachtsbäume
    let trees = [];
    let n = 7;
    //Highscore
    let highscore = 0;
    //Korb 
    let snowman = new Abschlussarbeit.Snowman();
    snowman.x = 450;
    snowman.y = 630;
    //Funktion init
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Abschlussarbeit.crc2 = canvas.getContext("2d");
        console.log(Abschlussarbeit.crc2);
        //Hintergrund
        let hg = new Abschlussarbeit.Background;
        hg.paint();
        imgData = Abschlussarbeit.crc2.getImageData(0, 0, canvas.width, canvas.height);
        console.log(imgData);
        //Schneemann auf dem Smartphone steuern 
        document.addEventListener('keydown', moveBasket);
        //Schneemann auf Handy/Tablet steuern 
        document.addEventListener('touchmove', moveBasketTouch);
        //Weihnachtsbäume
        for (let i = 0; i < n; i++) {
            let tree = new Abschlussarbeit.Tree();
            tree.x = Math.random() * 900;
            tree.y = (550);
            trees.push(tree);
        }
        animate();
        checkBubblePosition();
        createBubbles();
    }
    //Funktion für die Animation
    function animate() {
        window.setTimeout(animate, 10);
        Abschlussarbeit.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
    }
    //Überprüfung ob Schneemann und Schneeflocke auf gleicher Höhe
    function checkBubblePosition() {
        window.setTimeout(checkBubblePosition, 10);
        for (let i = 0; i < movingObjects.length; i++) {
            let bubble = movingObjects[i];
            let inside = snowman.checkIfInside(bubble.x, bubble.y);
            if (inside) {
                movingObjects.splice(i, 1);
                updateHighscore(bubble.points);
            }
        }
    }
    //Funktion für ständige Schneeflocken
    function createBubbles() {
        window.setTimeout(createBubbles, 500);
        let p = Math.floor(Math.random() * 3);
        switch (p) {
            case 0:
                let bubblesRed = new Abschlussarbeit.BubbleRed();
                movingObjects.push(bubblesRed);
                break;
            case 1:
                let bubblesOrange = new Abschlussarbeit.BubbleOrange();
                movingObjects.push(bubblesOrange);
                break;
            case 2:
                let bubblesPink = new Abschlussarbeit.BubblePink();
                movingObjects.push(bubblesPink);
                break;
        }
    }
    //Funktion für die Steuerung
    function moveBasket(_event) {
        if (_event.key == "ArrowRight") {
            snowman.moveRight();
        }
        if (_event.key == "ArrowLeft") {
            snowman.moveLeft();
        }
    }
    //Funktion für Smartphone/Tabletsteuerung 
    function moveBasketTouch(_event) {
        if (_event.changedTouches[0].clientX < Abschlussarbeit.crc2.canvas.clientWidth / 2) {
            snowman.moveLeft();
        }
        else {
            snowman.moveRight();
        }
        console.log(_event, Abschlussarbeit.crc2.canvas.clientWidth / 2);
    }
    //Funktion für die Schneeflocken, die runter fallen
    function moveObjects() {
        for (let i = 0; i < movingObjects.length; i++) {
            movingObjects[i].move();
        }
    }
    //Funktion welche bewegte Elemente zeichnet
    function drawObjects() {
        for (let i = 0; i < trees.length; i++)
            trees[i].draw();
        for (let i = 0; i < movingObjects.length; i++)
            movingObjects[i].draw();
        snowman.draw();
        showHighscore();
    }
    //Funktion für die Punktezahl
    function updateHighscore(points) {
        highscore += points;
        if (highscore >= 200) {
            alert("You did a great job!");
            highscore = 0;
        }
    }
    //Funktion die den Punktestand anzeigt
    function showHighscore() {
        Abschlussarbeit.crc2.font = "28px Sans-Serif";
        Abschlussarbeit.crc2.fillStyle = "#2E2E2E";
        Abschlussarbeit.crc2.fillText("Score: " + highscore, 20, 50);
    }
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Hauptprogramm.js.map