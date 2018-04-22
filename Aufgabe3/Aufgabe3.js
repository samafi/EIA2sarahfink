var MemoryAufgabe3;
(function (MemoryAufgabe3) {
    document.addEventListener("DOMContentLoaded", main);
    // Variablen erstellen
    let cardContent = ["Sommer", "Wolken", "Decke", "Tisch", "Zug", "Wasser", "Blume", "Regen", "Auto", "Haus"];
    let cardArray = [];
    let openArray = [];
    let openCards = 0;
    let numPairs;
    let numPlayers;
    let playerInfo;
    let game;
    let score = 0;
    let name = "Spieler ";
    //Eingabe wieviele Spieler
    function numsPlayer() {
        numPlayers = parseInt(prompt("Wieviele Spieler wollen mitspielen?(min. 1 & max. 4)"), 10);
        if (numPlayers > 4 || numPlayers < 1) {
            numsPlayer();
        }
    }
    // Eingabe wieviele KartenPaare   
    function cardPairs() {
        numPairs = parseInt(prompt("Mit wie vielen Pärchen wollt Ihr spielen? (min. 5 & max. 10)"), 10);
        if (numPairs < 5 || numPairs > 10) {
            cardPairs();
        }
    }
    function main() {
        cardPairs();
        numsPlayer();
        playerInfo = document.getElementById("info");
        game = document.getElementById("card-div");
        for (let i = 0; i < numPairs; i++) {
            createCard(cardContent[i]);
            createCard(cardContent[i]);
        }
        // Funktionsaufruf
        randomMix(cardArray);
        // Karten ins Spiel
        for (let i = 0; i < cardArray.length; i++) {
            game.appendChild(cardArray[i]);
        }
        for (let i = 0; i < numPlayers; i++) {
            createPlayer(score, name + [i + 1]);
        }
        // Eventlistener 
        game.addEventListener("click", clickHandler);
    }
    function createCard(text) {
        let card = document.createElement("div");
        card.innerHTML = `<span>${text}</span>`;
        card.setAttribute("class", "card hidden");
        cardArray.push(card);
    }
    function createPlayer(_score, _name) {
        let player = document.createElement("div");
        let spiel = document.createElement("div");
        let n = _score.toString();
        player.innerText = _name; //  scoreField = n
        spiel.innerText = n;
        playerInfo.appendChild(player);
        playerInfo.appendChild(spiel);
    }
    function clickHandler(_event) {
        let cardClass = _event.target; // Gibt das HTMLElement zurück
        if (cardClass.classList.contains("card")) {
            openCards++;
            if (cardClass.classList.contains("hidden")) {
                cardClass.classList.remove("hidden"); // Klassen-Namen "hidden" wird gelöscht
                cardClass.classList.add("visible"); // Klassen-Namen wird auf "visible" gesetzt
            }
        }
        if (openCards == 2) {
            setTimeout(cardsCompare, 1500); // Timeout für 2000 ms bzw. 1,5 Sekunden
        }
        if (openCards > 2) {
            cardClass.classList.remove("visible");
            cardClass.classList.add("hidden");
        }
    }
    function randomMix(_array) {
        for (let i = _array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [_array[i], _array[j]] = [_array[j], _array[i]];
        }
        return _array; //Array ist jetzt gemischelt
    }
    function cardsCompare() {
        let openArray = filterCardsByClass("visible"); // Definition des openArray, solle Funktion filterCardsByClass ausführen
        if (openArray[0].children[0].innerHTML == openArray[1].children[0].innerHTML) {
            for (let f = 0; f < openArray.length; f++) {
                openArray[f].classList.remove("visible"); // "visible" wird entfernt
                openArray[f].classList.add("taken"); // und durch "taken" ersetzt
            }
        }
        else {
            for (let f = 0; f < openArray.length; f++) {
                openArray[f].classList.remove("visible"); // "visible" wird entfernt
                openArray[f].classList.add("hidden"); // und durch "hidden" ersetzt
            }
        }
        congrat();
        openArray = [];
        openCards = 0;
    }
    function filterCardsByClass(_filter) {
        return cardArray.filter(card => card.classList.contains(_filter)); // Filter 
    }
    function congrat() {
        let cardsTaken = filterCardsByClass("hidden");
        if (cardsTaken.length == 0) {
            alert("Super!!! :)");
        }
        cardsTaken = [];
    }
})(MemoryAufgabe3 || (MemoryAufgabe3 = {}));
//# sourceMappingURL=Aufgabe3.js.map