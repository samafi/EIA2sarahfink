var Aufgabe9;
(function (Aufgabe9) {
    window.addEventListener("load", init);
    let crc2;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        // Wasser  
        crc2.fillStyle = "rgb(142,229,238)";
        crc2.fillRect(0, 0, 360, 640);
        //Seestern
        drawStar(250, 600);
        drawStar(190, 600);
        function drawStar(_x, _y) {
            crc2.beginPath();
            crc2.fillStyle = "rgb(255, 255, 0)";
            crc2.moveTo(_x + 7, _y);
            crc2.lineTo(_x + 10, _y + 20);
            crc2.lineTo(_x - 20, _y);
            crc2.lineTo(_x + 10, _y - 20);
            crc2.closePath();
            crc2.moveTo(_x + 10, _y + 7);
            crc2.lineTo(_x - 10, _y + 20);
            crc2.lineTo(_x - 10, _y - 20);
            crc2.lineTo(_x + 20, _y);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
    }
})(Aufgabe9 || (Aufgabe9 = {})); // Namespace schließen
//# sourceMappingURL=canvas.js.map