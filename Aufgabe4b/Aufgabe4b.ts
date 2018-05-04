namespace Aufgabe4 {
    window.addEventListener("load", main);


    //Variablen deklarieren
    let sliderAmount: number = 1;
    let playerPoints: number = 0;
    let cardArray: HTMLElement[] = [];
    let cardsOpen: number = 0;
    let cardsOpenArray: HTMLElement[] = [];
    let checkRest: HTMLElement[] = [];
    let playerCounter: number = 1;

   
    function main(): void {
        document.getElementById("addplayer").addEventListener("click", addPlayer);                      // Startseite definieren
        document.getElementById("removeplayer").addEventListener("click", removePlayer);
        document.getElementById("sliderinfo").addEventListener("change", createSlider);        
        document.getElementById("start").addEventListener("click", start);

        
    }

    function addPlayer(): void {
        if (playerCounter < 4) {                                                                        // nur 4 Spieler
            let player: HTMLElement = document.createElement("input");
            player.setAttribute("type", "text");
            player.setAttribute("placeholder", "Spielernamen eingeben");                                // Name der Spieler eingeben
            player.setAttribute("name", "player");
            player.setAttribute("maxlength", "15");
            player.setAttribute("id", "player");
            document.getElementById("playernames").appendChild(player);                                 // Dass die Namen später im Memory angezeigt werden
            playerCounter++;
        }
    }

    function removePlayer(): void {
        document.getElementById("player").remove();                                                     // Button um einen Spieler zu löschen deklariert
        playerCounter--;
    }

    function createSlider(): void {                                                                     // Slider für die verschiedenen Kartensets
        if (sliderAmount == 1) {
            let slider: HTMLElement = document.createElement("input");
            slider.setAttribute("type", "range");
            slider.setAttribute("value", "5");
            slider.setAttribute("min", "5");
            slider.setAttribute("max", cards[document.getElementsByTagName("select").item(0).value].cardAmount);
            slider.setAttribute("step", "1");
            slider.setAttribute("id", "slider");
            document.getElementById("sliderbox").appendChild(slider);
            sliderAmount++;
            let sliderValue: HTMLElement = document.createElement("p");
            sliderValue.setAttribute("id", "sliderValue");
            sliderValue.innerText = "Anzahl Kartenpaare: " + (<HTMLInputElement>document.getElementById("slider")).value;
            slider.oninput = function(): void {
                sliderValue.innerText = "Anzahl Kartenpaare: " + this.value;
            };
            document.getElementById("sliderbox").appendChild(sliderValue);
        } else {                                                                                            // oder
            sliderUpdate();
        }
    }

    function sliderUpdate(): void {
        document.getElementById("slider").remove();
        document.getElementById("sliderValue").remove();
        sliderAmount--;
        createSlider();
    }

    
        //shuffleArray                                                                                     // um Karten zu mischen
    function shuffleArray(_array: any[]): any[] {
        for (var i: number = _array.length - 1; i > 0; i--) {
            var j: number = Math.floor(Math.random() * (i + 1));
            var temp: number = _array[i];
            _array[i] = _array[j];
            _array[j] = temp;
        }
        return _array;
    }
    
      // Memory-Spiel anzeigen                                                                                                    // dass das Memory Spiel erst nach klick auf "Los gehts" erscheint:
    function start(): void {
        document.getElementById("startseite").style.display = "none";
        document.getElementById("info").style.display = "block";
        document.getElementById("game").style.display = "block";

        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let numPairs: number = parseInt((<HTMLInputElement>document.getElementById("slider")).value);

        for (let i: number = 0; i < playerCounter; i++) {
            let playerDiv: HTMLDivElement = document.createElement("div");
            document.getElementById("info").appendChild(playerDiv);
            playerDiv.innerHTML = inputs[i].value + ": " + playerPoints + " Punkte";
        }

        //Karten machen    
        for (let i: number = 0; i < numPairs; i++) {
            createCard(cards[document.getElementsByTagName("select").item(0).value].content[i]);
            createCard(cards[document.getElementsByTagName("select").item(0).value].content[i]);
        }

        //Aufruf der Shuffle Algorithen   
        shuffleArray(cardArray);

        for (let i: number = 0; i < cardArray.length; i++) {
            document.getElementById("playerbox").appendChild(cardArray[i]);
        }

    }
    
    //Karte initialisieren     
    function createCard(_content: string): void {
        let card: HTMLElement = document.createElement("div");
        card.innerHTML = "<p>" + _content + "</p>";
        card.setAttribute("class", "card hidden");
        cardArray.push(card);
        checkRest.push(card);
        card.addEventListener("click", clickHandler);
    }

    function clickHandler(_event: Event): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        if (target.classList.contains("card")) {
            cardsOpen++;
            if (!(cardsOpen > 2) && target.classList.contains("hidden") && target != cardsOpenArray[0]) {                           // 2 Karten aufdecken
                if (target.classList.contains("hidden")) {
                    target.classList.remove("hidden");
                    target.classList.add("open");
                    cardsOpenArray.push(target);
                }
            } else {
                cardsOpen--;
            }
            if (cardsOpen == 2) {
                window.setTimeout(compareCards, 2000);
            }
        }
    }

    function compareCards(): void {

        if (cardsOpenArray[0].innerHTML == cardsOpenArray[1].innerHTML) {                                       // wenn die Karten gleich sind - Status auf taken 
            for (let i: number = 0; i < 2; i++) {
                cardsOpenArray[i].classList.remove("open");
                cardsOpenArray[i].classList.add("taken");
            }
            checkRest.splice(0, 2);
        } else {
            for (let i: number = 0; i < cardsOpenArray.length; i++) {                                              // wenn die Karten ungleich sind - Status auf hidden (immer noch auf dem Spielfeld)
                cardsOpenArray[i].classList.remove("open");
                cardsOpenArray[i].classList.add("hidden");
            }
        }
        cardsOpenArray = [];                                                                                            // leeres Array für die Karten
        cardsOpen = 0;
        checkWin();
    }



    function checkWin(): void {                                                                                                 // Vergleich, wenn Spielfeld leer - Glückwunsch
        if (checkRest.length == 0) {
            alert("Super gemacht!! :)");
        }
    }





} // Namespace schließen