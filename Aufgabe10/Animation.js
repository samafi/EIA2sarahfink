var L10;
(function (L10) {
    window.addEventListener("load", init);
    let n = 9;
    let nBubbles = 20;
    let imagedata;
    let fishes = [];
    let bubbles = [];
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        L10.crc2 = canvas.getContext("2d");
        console.log(L10.crc2);
        drawGround();
        for (let i = 0; i < 10; i++) {
            let a = Math.random() * L10.crc2.canvas.width;
            let b = Math.random() * (360 - 250) + 250;
            let c = Math.random() * (10 - 5) + 5;
        }
        //Seestern
        drawStar(240, 610);
        drawStar(190, 590);
        drawStar(230, 560);
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
        imagedata = L10.crc2.getImageData(0, 0, 640, 360);
        for (let i = 0; i < n; i++) {
            let fish = new L10.Fish();
            fish.x = Math.random() * L10.crc2.canvas.width;
            fish.y = Math.random() * 300;
            fish.r = Math.random() * 255;
            fish.g = Math.random() * 255;
            fish.b = Math.random() * 255;
            fishes.push(fish);
        }
        for (let i = 0; i < n - 2; i++) {
            let bubble = new L10.Bubbles();
            bubble.x = Math.random() * (100 - 550) + 300;
            bubble.y = Math.random() * 180;
            bubble.r = Math.random() * 10;
            bubbles.push(bubble);
        }
        animate();
    }
    function animate() {
        window.setTimeout(animate, 17);
        L10.crc2.putImageData(imagedata, 0, 0);
        moveFishes();
        moveBubbles();
        drawFishes();
        drawBubbles();
    }
    function moveFishes() {
        for (let i = 0; i < fishes.length; i++) {
            fishes[i].move();
        }
    }
    function drawFishes() {
        for (let i = 0; i < fishes.length; i++)
            fishes[i].draw();
    }
    function moveBubbles() {
        for (let i = 0; i < bubbles.length; i++) {
            bubbles[i].move();
        }
    }
    function drawBubbles() {
        for (let i = 0; i < bubbles.length; i++)
            bubbles[i].draw();
    }
    function drawGround() {
        L10.crc2.beginPath();
        L10.crc2.moveTo(0, 100);
        L10.crc2.lineTo(0, 360);
        for (let i = 0; i < 990; i++) {
            L10.crc2.lineTo(i, 15 * Math.sin(i * .020) + 460);
        }
        L10.crc2.lineTo(350, 640);
        L10.crc2.lineTo(0, 640);
        L10.crc2.fillStyle = "rgb(210,180,140)";
        L10.crc2.fill();
        L10.crc2.closePath();
    }
    function drawWater() {
        L10.crc2.beginPath();
        L10.crc2.lineTo(0, 640);
        L10.crc2.lineTo(640, 640);
        L10.crc2.lineTo(360, 0);
        L10.crc2.lineTo(0, 0);
        L10.crc2.fillStyle = "rgba(0, 185, 185, 0.25)";
        L10.crc2.fill();
        L10.crc2.closePath();
    }
    // Funktion Seestern 
    function drawStar(_x, _y) {
        L10.crc2.beginPath();
        L10.crc2.fillStyle = "rgb(255, 255, 0)";
        L10.crc2.moveTo(_x + 7, _y);
        L10.crc2.lineTo(_x + 10, _y + 20);
        L10.crc2.lineTo(_x - 20, _y);
        L10.crc2.lineTo(_x + 10, _y - 20);
        L10.crc2.closePath();
        L10.crc2.moveTo(_x + 10, _y + 7);
        L10.crc2.lineTo(_x - 10, _y + 20);
        L10.crc2.lineTo(_x - 10, _y - 20);
        L10.crc2.lineTo(_x + 20, _y);
        L10.crc2.closePath();
        L10.crc2.stroke();
        L10.crc2.fill();
    }
    //Funktion Seegras 
    function drawSeagrass(_x, _y, _s) {
        L10.crc2.beginPath();
        L10.crc2.moveTo(_x, _y);
        L10.crc2.quadraticCurveTo(_x + (20 * _s), _y - (20 * _s), _x - (0 * _s), _y - (10 * _s));
        L10.crc2.quadraticCurveTo(_x + (10 * _s), _y - (40 * _s), _x - (0 * _s), _y - (30 * _s));
        L10.crc2.quadraticCurveTo(_x + (10 * _s), _y - (60 * _s), _x - (0 * _s), _y - (50 * _s));
        L10.crc2.quadraticCurveTo(_x + (10 * _s), _y - (60 * _s), _x - (0 * _s), _y - (80 * _s));
        L10.crc2.quadraticCurveTo(_x + (-10 * _s), _y - (80 * _s), _x - (0 * _s), _y - (60 * _s));
        L10.crc2.quadraticCurveTo(_x + (-10 * _s), _y - (70 * _s), _x - (0 * _s), _y - (40 * _s));
        L10.crc2.quadraticCurveTo(_x + (-10 * _s), _y - (50 * _s), _x - (0 * _s), _y - (20 * _s));
        L10.crc2.quadraticCurveTo(_x + (-10 * _s), _y - (30 * _s), _x - (0 * _s), _y - (0 * _s));
        L10.crc2.closePath();
        L10.crc2.stroke();
        L10.crc2.fillStyle = "rgb(105,139,34)";
        L10.crc2.fill();
    }
})(L10 || (L10 = {})); //namespace ende
//# sourceMappingURL=Animation.js.map