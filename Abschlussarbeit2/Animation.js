var Abschlussarbeit2;
(function (Abschlussarbeit2) {
    window.addEventListener("load", init);
    let imgData;
    //  alert("Benutze die Pfeiltasten um den bösen Schneeflocken auszuweichen! Hast du zu viele Minuspunkte, verlierst du..")
    //MovingObject
    let movingObjects = [];
    let m = 3;
    //Weihnachtsbäume
    let trees = [];
    let n = 5;
    //Highscore
    let highscore = 0;
    //Schneemann 
    let snowman = new Abschlussarbeit2.Snowman();
    snowman.x = 450;
    snowman.y = 630;
    //Funktion init
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Abschlussarbeit2.crc2 = canvas.getContext("2d");
        console.log(Abschlussarbeit2.crc2);
        //Hintergrund
        let hg = new Abschlussarbeit2.Background;
        hg.paint();
        imgData = Abschlussarbeit2.crc2.getImageData(0, 0, canvas.width, canvas.height);
        console.log(imgData);
        //um Schneemann auf dem Smartphone zu steuern 
        document.addEventListener('keydown', moveSnowman);
        //um Schneemann auf Handy/Tablet zu steuern 
        document.addEventListener('touchmove', moveSnowmanTouch);
        //Weihnachtsbäume
        for (let i = 0; i < n; i++) {
            let tree = new Abschlussarbeit2.Tree();
            tree.x = Math.random() * 900;
            tree.y = (550);
            trees.push(tree);
        }
        animate();
        checkBubblePosition();
        createFlakes();
    }
    //Funktion für die Animation
    function animate() {
        window.setTimeout(animate, 10);
        Abschlussarbeit2.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
    }
    //Überprüfung ob Schneemann und Schneeflocke auf gleicher Höhe sind
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
    function createFlakes() {
        window.setTimeout(createFlakes, 500);
        let p = Math.floor(Math.random() * 3);
        switch (p) {
            case 0:
                let GreyFlake = new Abschlussarbeit2.greyFlake();
                movingObjects.push(GreyFlake);
                break;
            case 1:
                let WhiteFlake = new Abschlussarbeit2.whiteFlake();
                movingObjects.push(WhiteFlake);
                break;
            case 2:
                let BlueFlake = new Abschlussarbeit2.blueFlake();
                movingObjects.push(BlueFlake);
                break;
        }
    }
    //Funktion für die Steuerung
    function moveSnowman(_event) {
        if (_event.key == "ArrowRight") {
            snowman.moveRight();
        }
        if (_event.key == "ArrowLeft") {
            snowman.moveLeft();
        }
    }
    //Funktion für Smartphone/Tabletsteuerung 
    function moveSnowmanTouch(_event) {
        if (_event.changedTouches[0].clientX < Abschlussarbeit2.crc2.canvas.clientWidth / 2) {
            snowman.moveLeft();
        }
        else {
            snowman.moveRight();
        }
        console.log(_event, Abschlussarbeit2.crc2.canvas.clientWidth / 2);
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
        if (highscore <= -120) {
            alert("Oh nein, du wurdest zu oft von den Schneeflocken getroffen. Versuche es doch noch einmal.");
            highscore = 0;
        }
    }
    //Funktion die den Punktestand anzeigt
    function showHighscore() {
        Abschlussarbeit2.crc2.font = "30px Lato";
        Abschlussarbeit2.crc2.fillStyle = "rgb(153, 40, 40)";
        Abschlussarbeit2.crc2.fillText("Score: " + highscore, 740, 50);
    }
})(Abschlussarbeit2 || (Abschlussarbeit2 = {}));
//# sourceMappingURL=Animation.js.map