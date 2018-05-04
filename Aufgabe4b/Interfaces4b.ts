namespace Aufgabe4 {

    export interface Card {
        content: string[];
        cardColor: string;
        cardFont: string;
        cardAmount: string;
    }

    let deck: Card;

    export interface Cards {
        [cardName: string]: Card;
    };

 
    export let cards: Cards = {};
    deck = {
        content: ["Hamburg", "Berlin", "München", "Köln", "Freiburg", "Stuttgart", "Furtwangen", "Linach", "Mannheim", "Heidelberg", "Ulm", "Essen", "Urach"],
        cardColor: "#303030;",
        cardFont: "arial",
        cardAmount: "13"
    };
    cards["city"] = deck;

    deck = {
        content: ["Gans", "Ente", "Hahn", "Katze", "Gorilla", "Hund", "Schwein", "Schlange", "Hahn", "Krebs", "Vogel", "Fisch", "Libelle", "Biene", "Fliege", "Käfer"],
        cardColor: "pink",
        cardFont: "arial",
        cardAmount: "16"
    };
    cards["animals"] = deck;

    deck = {
        content: ["Sarah", "Felix", "Ebru", "Burcu", "Timo", "Marco", "Fabio", "Laura"],
        cardColor: "green",
        cardFont: "arial",
        cardAmount: "8"
    };
    cards["names"] = deck;



    export interface info {
        player: string;
        score: number;
    }

    let info: info[] = [];
}