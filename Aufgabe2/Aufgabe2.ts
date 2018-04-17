namespace Memorie {
    /*Variablen erstellen*/
    let numPlayer: number = 0;
    let numPairs: number = 0;

    /*Array*/
    let cardContent: string[] = ["Apfel", "Bahn", "C", "D", "Elf", "F", "Gans", "Hans", "I", "J", "Kuh", "L", "M", "Null", "O"];
    let cardArray: string[] = [];
    let player: string[] = [];
    let score: number[] = [0,0,0,0];

      /* Eingabe wieviele Spieler*/
        let i: boolean = true;
        while (i) {
            numPlayer = parseInt(prompt("Wieviele Spieler wollen mitspielen?(min. 1 & max. 4)"), 10);
            if (numPlayer >= 1 && numPlayer <= 4) {
                i = false;
            }
        }

        for (let i: number = 0; i < numPlayer; i++) {
            player[i] = prompt("Bitte Spielernamen " + (i+1) + " eingeben");
            if (player[i] == null) {
                player[i] = "Mickey";
            }
        }

        /* Eingabe wieviele Kartenpaare */
        i = true;
        while (i) {
            numPairs = parseInt(prompt("Mit wie vielen Pärchen wollt Ihr spielen? (min. 5 & max. 15)"), 10);
            if (numPairs >= 5 && numPairs <= 15) {
                i = false;
            }
        }


    /* Status mischen */
    function mixStatus(): string {
        let randomState: number = Math.random();
        if (randomState >= 0.75) {
            return "visible";
        } else if (randomState > 0.5 && randomState < 0.75) {
            return "taken";
        }
        return "hidden";
    }

    /* Karten durcheinander mischen*/
    function shuffleCardArray(): void {
        let i: number = cardArray.length;
        let j: number = 0;
        let temp: string = "";
        while(--i > 0) {
            j = Math.floor(Math.random() * (i+1));
            temp = cardArray[j];
            cardArray[j] = cardArray[i];
            cardArray[i] = temp;
        }
    }

    /*  Karten erzeugen */
    function createBoard(): void {
        let node: any = document.getElementById("game");
        shuffleCardArray();
        let childNodeHTML: string = "";
        childNodeHTML += "<div>";
        for (let i: number = 0; i < cardArray.length; i++) {
            childNodeHTML += "<div>";
            childNodeHTML += "<div class=\"";
            childNodeHTML += mixStatus();
            childNodeHTML += "\">";
            childNodeHTML += cardArray[i];
            childNodeHTML += "</div></div>";
        }
        childNodeHTML += "</div>";
        node.innerHTML += childNodeHTML;
        
        console.log(childNodeHTML); 
    }
    
    function playerInfo(): void {
        let node: any = document.getElementById("info");
        let childNodeHTML: string = "";
        childNodeHTML += "<div>";
        for(let i: number = 0; i < player.length; i++) {
            childNodeHTML += "<div id=Spieler";
            childNodeHTML += i;
            childNodeHTML += ">";
            childNodeHTML += "<p>Spieler: ";
            childNodeHTML += player[i];
            childNodeHTML += "</p>";
            childNodeHTML += "<p>Punkte: ";
            childNodeHTML += score[i];
            childNodeHTML += "</p></div>";
        }
        childNodeHTML += "</div>";
        node.innerHTML += childNodeHTML;  
        
        console.log(childNodeHTML);
    }

    /* Hauptprogramm */
    function section(): void {
        console.log("section");
       


        /* Schleife für Kartenpaare */
        for (let i: number = 0; i < numPairs; i++) {
            /* cardContent 2x an cardArray [] anf�gen */
            cardArray.push(cardContent[i]);
            cardArray.push(cardContent[i]);
        }

        /* Spielboard erzeugen */
        createBoard();
        
        /* info erzeugen */
        playerInfo();
    }
    // Add EventListener - section() wird ausgeführt, sobald das DOM vollst�ndig geladen ist
    document.addEventListener("DOMContentLoaded", section);
}