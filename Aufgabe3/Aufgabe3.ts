namespace MemoryAufgabe3 {
    
document.addEventListener("DOMContentLoaded", main);

    // Variablen erstellen
    let cardContent: string[] = ["Sommer", "Wolken", "Decke", "Tisch", "Zug", "Wasser", "Blume", "Regen", "Auto", "Haus"];
    let cardArray: HTMLElement[] = [];
    
    let openArray: string[] = [];       
    let openCards: number = 0;
    
    let numPairs: number;
    let numPlayers: number;
    let playerInfo: HTMLElement;         
    let game: HTMLElement;

    let score: number = 0;              
    let name: string = "Spieler ";

        //Eingabe wieviele Spieler
    function numsPlayer(): void {
        numPlayers = parseInt(prompt("Wieviele Spieler wollen mitspielen?(min. 1 & max. 4)"), 10);
        if (numPlayers > 4 || numPlayers < 1) {
            numsPlayer();
        }
    }
    
     // Eingabe wieviele KartenPaare   
    function cardPairs(): void {                                                // parseInt wandelt string in number um weil numPairs number erwartet  ;10 am Ende legt Dezimalsystem für Eingabe fest
        numPairs = parseInt(prompt("Mit wie vielen Pärchen wollt Ihr spielen? (min. 5 & max. 10)"), 10);
        if (numPairs < 5 || numPairs > 10) {
            cardPairs();
        }
    }
    
    
    function main(): void {

        cardPairs();
        numsPlayer();

        playerInfo = document.getElementById("info"); 
        game = document.getElementById("card-div");

        for (let i: number = 0; i < numPairs; i++) {
            createCard(cardContent[i]);
            createCard(cardContent[i]);
        }

        // Funktionsaufruf
        randomMix(cardArray);

        // Karten ins Spiel
        for (let i: number = 0; i < cardArray.length; i++) {
            game.appendChild(cardArray[i]);
        }

        for (let i: number = 0; i < numPlayers; i++) {
            createPlayer(score, name + [i + 1]);
        }
        
        // Eventlistener 
        game.addEventListener("click", clickHandler);
        
    }
    
    function createCard(text: string): void {                 
        let card: HTMLElement = document.createElement("div");                 
        
        card.innerHTML = `<span>${text}</span>`;             
                                                                                
        card.setAttribute("class", "card hidden");
                                                                                
        cardArray.push(card);                                                   
    }
    function createPlayer(_score: number, _name: string): void {
        let player: HTMLElement = document.createElement("div");
        let spiel: HTMLElement = document.createElement("div");        
        let n: string = _score.toString();
        player.innerText = _name; //  scoreField = n
        spiel.innerText = n;
        playerInfo.appendChild(player);
        playerInfo.appendChild(spiel);
    }


    
 
    
    function clickHandler (_event: MouseEvent) : void {
        let cardClass: HTMLElement = <HTMLElement>_event.target;                // Gibt das HTMLElement zurück
        if (cardClass.classList.contains("card")) {                             // classList = gibt den Klassen Namen eines Elements zurückk
        openCards ++;                                                           
            if (cardClass.classList.contains("hidden")) {                       // Wenn das Element den Klassen-Namen "hidden" hat, dann:
                cardClass.classList.remove("hidden");                           // Klassen-Namen "hidden" wird gelöscht
                cardClass.classList.add("visible");                             // Klassen-Namen wird auf "visible" gesetzt
            }
        }

        if (openCards == 2) {                                                   // wenn zwei Karten offen daliegen, dann:
            setTimeout(cardsCompare, 1500);                                     // Timeout für 2000 ms bzw. 1,5 Sekunden
        }

        if (openCards > 2) {                                                    // man kann nur 2 Karten anklicken
            cardClass.classList.remove("visible");
            cardClass.classList.add("hidden");
        }
    }
    
        function randomMix(_array: HTMLElement[]): HTMLElement[] {              //  Array wird gemischelt 
        for (let i: number = _array.length - 1; i > 0; i--) {
            const j: number = Math.floor(Math.random() * (i + 1));
            [_array[i], _array[j]] = [_array[j], _array[i]];
        }
        return _array;                                                      //Array ist jetzt gemischelt
    }
    
    function cardsCompare () : void {
        let openArray : HTMLElement[] = filterCardsByClass("visible");        // Definition des openArray, solle Funktion filterCardsByClass ausführen
        if (openArray[0].children[0].innerHTML == openArray[1].children[0].innerHTML) {   
            for (let f: number = 0; f < openArray.length; f++) {
                openArray[f].classList.remove("visible");                    // "visible" wird entfernt
                openArray[f].classList.add("taken");                         // und durch "taken" ersetzt
            }
        }
        else {                                                               // wenn die Kinder des Arrays nicht identisch sind, dann:
            for (let f: number = 0; f < openArray.length; f++) {
                openArray[f].classList.remove("visible");                    // "visible" wird entfernt
                openArray[f].classList.add("hidden");                        // und durch "hidden" ersetzt
            }
        }

        congrat();                                                     
        openArray = [];                                                      
        openCards = 0;                                                       
    }
    
    function filterCardsByClass (_filter : string) : HTMLElement[] {
        return cardArray.filter(card => card.classList.contains(_filter));      // Filter 
        
        }
    
    function congrat(): void {
        let cardsTaken: HTMLElement[] = filterCardsByClass("hidden");
        if (cardsTaken.length == 0) {                                        
            alert("Super!!! :)");
        }
        cardsTaken = [];
    }

}