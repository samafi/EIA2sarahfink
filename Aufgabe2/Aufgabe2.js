var memory;
(function (memory) {
    var infolist = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    var cardList = [];
    var classList = ["hidden", "taken", "visible"];
    // Eingabe für Kartenpaare
    function inputPairs() {
        let pairs = prompt("Wie viele Kartenpaare (min. 5 & max. 10)");
        let pairSum = parseInt(pairs);
        if (isNaN(pairSum) || pairSum < 5 || pairSum > 10) {
            alert("FALSCH");
            inputPairs();
        }
        else {
            console.log("inputPairs");
            console.log(pairSum);
            return pairSum;
        }
    }
    // Eingabe wieviele Spieler
    function inputPlayer() {
        let n = prompt("Wieviele Spieler wollen mitspielen?(min. 1 & max. 4)");
        let nSum = parseInt(n);
        if (isNaN(nSum) || nSum < 0 || nSum > 4) {
            alert("FALSCH");
            inputPlayer();
        }
        else {
            console.log("inputPlayer");
            console.log(nSum);
            return nSum;
        }
    }
    let amount = inputPairs();
    let players = inputPlayer();
    console.log("Länge Infolist", infolist.length);
    console.log("Content Infolist", infolist);
    //Buchstaben verdoppeln und in einem neuen Array sichern
    function shuffelAray(x) {
        for (let i = 1; i <= x; i++) {
            var content = infolist[0];
            cardList.push(content);
            cardList.push(content);
            var removed = infolist.splice(0, 1);
        }
        console.log("Content CardList", cardList);
    }
    // Karten bauen
    function generateCards(y) {
        var node = document.getElementById("game");
        var childNodeHTML;
        var i = 0;
        while (i < (y * 2)) {
            let min = 0;
            let max = (cardList.length);
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
    function generatePlayers() {
        var node = document.getElementById("info");
        var childNodeHTML;
        var i = 0;
        while (i < players) {
            childNodeHTML = "<div  class='player' id='Spieler" + i + "'>";
            childNodeHTML += "Spieler " + (i + 1);
            childNodeHTML += "<p>";
            childNodeHTML += "13 ";
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
            i++;
        }
    }
    // Hauptprogramm
    function main() {
        shuffelAray(amount);
        console.log("main");
        // Content
        generateCards(amount);
        generatePlayers();
    }
    // Add EventListener 
    document.addEventListener("DOMContentLoaded", main);
})(memory || (memory = {}));
//# sourceMappingURL=Aufgabe2.js.map