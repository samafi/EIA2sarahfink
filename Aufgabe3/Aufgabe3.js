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
    let checkRest = [];
    let greetNumber = 0;
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
        card.setAttribute("class", "hidden");
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
    function randomMix(_array) {
        for (let i = _array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [_array[i], _array[j]] = [_array[j], _array[i]];
        }
        return _array; //Array ist jetzt gemischelt
    }
    function clickHandler(_event) {
        let x = _event.target;
        if (x.classList.contains("hidden")) {
            x.classList.remove("hidden"); //hier war Fehler wegen Doppelklick, Class hidden wurde zuvor nicht entfernt
            x.classList.add("open");
            openCards++;
        }
        if (openCards == 2) {
            setTimeout(cardsCompare, 1000);
        }
        if (openCards > 2) {
            x.classList.remove("open");
            x.classList.add("hidden");
        }
        if (x.classList.contains("open")) {
        }
    }
    function cardsCompare() {
        let card1 = document.getElementsByClassName("open")[0];
        let card2 = document.getElementsByClassName("open")[1];
        openArray.push(card1, card2);
        console.log(openArray);
        if (openArray[0].innerHTML == openArray[1].innerHTML) {
            openArray[0].classList.remove("open");
            openArray[0].classList.add("taken");
            openArray[1].classList.remove("open");
            openArray[1].classList.add("taken");
            score++;
            console.log("Karetnpaaar abeglegt");
            greetNumber++;
            console.log(greetNumber);
        }
        else {
            card1.classList.remove("open");
            card1.classList.add("hidden");
            card2.classList.remove("open");
            card2.classList.add("hidden");
        }
        //        openCards Variabel wieder auf 0 setzen 
        openCards = 0;
        //        opeList Array löschen 
        openArray.splice(0, 2);
        congrats();
    }
    function congrats() {
        if (greetNumber == numPairs) {
            alert("Glückwunsch!");
        }
    }
})(MemoryAufgabe3 || (MemoryAufgabe3 = {}));
//# sourceMappingURL=Aufgabe3.js.map