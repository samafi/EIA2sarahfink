namespace memory {
   
    var infolist: string []=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    var cardList: string[]=[];


    
   function inputPairs() : number{
       
    let pairs : string = prompt("Wie viele Kartenpaare (mindestens 4 & maximal 10)")
    let pairSum : number = parseInt(pairs)
    let numberPlayers: number;       
    let gameInfo: HTMLElement;
    let gameBoard: HTMLElement;
     
   
    // Anzahl der Spieler erfragen
    numberPlayers = parseInt(prompt("Bitte die Anzahl der Spieler eingeben", "nicht mehr als 4 Spieler"), 10);
    numberPlayers > 4 ? numberPlayers = 4 : numberPlayers = numberPlayers;
       
      
       console.log("inputPairs")
        
    
       return pairSum;
    }
  
   let amount :number =  inputPairs();
   
        
    console.log("Länge Infolist", infolist.length);
    console.log("Content Infolist", infolist);
    
    
    
    
    function shuffelAray(x:number): void {
        
        for (let i: number = 1; i <= x; i++) {
             
            
        var content : string = infolist[0];  
        cardList.push (content);
            cardList.push(content);
             
            var removed = infolist.splice(0, 1);
            
            
            
        }
    console.log("Content CardList", cardList);
   
    
    }
    

    
    function generateCards(y:number) : void{
        var node : any= document.getElementById("game");
        var childNodeHTML : string;
        var i : number = 0;
        
        
        while (i < (y*2)) {
            let min: number = 0;
        let max: number = (cardList.length);
            // min = Math.ceil(min);
          //  max = Math.floor(max);
            var random:number=Math.floor(Math.random() * (max - min)) + min; 
            console.log("Card:" + i);
              console.log(random); 
          
            childNodeHTML = "<div  class='card' id='Karte" + i + "'>";
            childNodeHTML += "<p>";
            childNodeHTML += cardList[random];
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";      
            node.innerHTML += childNodeHTML;
            console.log("Länge Cardlist nach Generate, " + cardList.length)
            var content : string = cardList[random];  
             
            var removed = cardList.splice(random, 1);
            console.log(cardList);
            
            i++;
        }
    }
    
    
    // Hauptprogramm
    function main () : void {
        
         shuffelAray(amount);

        
        console.log("main");
        
        // Content
         generateCards(amount);
        }
    


    // Add EventListener 
document.addEventListener("DOMContentLoaded", main);
}
    
