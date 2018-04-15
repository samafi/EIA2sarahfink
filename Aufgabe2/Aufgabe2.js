var memory;
(function (memory) {
    var infolist = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    var cardList = [];
    function inputPairs() {
        let pairs = prompt("Wie viele Kartenpaare (mindestens 4 & maximal 10)");
        let pairSum = parseInt(pairs);
        let numberPlayers;
        let gameInfo;
        let gameBoard;
        // Anzahl der Spieler erfragen
        numberPlayers = parseInt(prompt("Bitte die Anzahl der Spieler eingeben", "nicht mehr als 4 Spieler"), 10);
        numberPlayers > 4 ? numberPlayers = 4 : numberPlayers = numberPlayers;
        console.log("inputPairs");
        return pairSum;
    }
    let amount = inputPairs();
    console.log("Länge Infolist", infolist.length);
    console.log("Content Infolist", infolist);
    function shuffelAray(x) {
        for (let i = 1; i <= x; i++) {
            var content = infolist[0];
            cardList.push(content);
            cardList.push(content);
            var removed = infolist.splice(0, 1);
        }
        console.log("Content CardList", cardList);
    }
    function generateCards(y) {
        var node = document.getElementById("game");
        var childNodeHTML;
        var i = 0;
        while (i < (y * 2)) {
            let min = 0;
            let max = (cardList.length);
            // min = Math.ceil(min);
            //  max = Math.floor(max);
            var random = Math.floor(Math.random() * (max - min)) + min;
            console.log("Card:" + i);
            console.log(random);
            childNodeHTML = "<div  class='card' id='Karte" + i + "'>";
            childNodeHTML += "<p>";
            childNodeHTML += cardList[random];
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
            console.log("Länge Cardlist nach Generate, " + cardList.length);
            var content = cardList[random];
            var removed = cardList.splice(random, 1);
            console.log(cardList);
            i++;
        }
    }
    // Hauptprogramm
    function main() {
        shuffelAray(amount);
        console.log("main");
        // Content
        generateCards(amount);
    }
    // Add EventListener 
    document.addEventListener("DOMContentLoaded", main);
})(memory || (memory = {}));
//# sourceMappingURL=Aufgabe2.js.map