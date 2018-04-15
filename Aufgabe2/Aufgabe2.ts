namespace memory {

    
    var infolist: string []=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    var cardList: string []=[];
    var classList: string[]=["hidden", "taken", "visible"];

   

    // Eingabe für Kartenpaare
   function inputPairs() : number{
       
    let pairs : string = prompt("Mit wie vielen Pärchen wollt Ihr spielen? (min. 5 & max. 10)");
    let pairSum : number = parseInt(pairs);
       if (isNaN(pairSum) || pairSum < 5 || pairSum > 10) {
        alert("FALSCH")
        inputPairs();    
    }
    
        else {
       
      
       console.log("inputPairs")
        
       console.log(pairSum);
       return pairSum;
           
    }
       }
     
   
    // Eingabe wieviele Spieler
   
      
 function inputPlayer():number{
           let n : string = prompt ("Wieviele Spieler wollen mitspielen?(min. 1 & max. 4)");
           let nSum : number = parseInt(n);
            if (isNaN(nSum) || nSum < 0 || nSum > 4) {
        alert("FALSCH")
        inputPlayer();    
    }
    
        else {
       
      
       console.log("inputPlayer")
        
    console.log(nSum);
       return nSum;
           
    }
     }      
   let amount :number =  inputPairs();
   let players : number = inputPlayer();
        
    console.log("Länge Infolist", infolist.length);
    console.log("Content Infolist", infolist);
    
    
    
    //Buchstaben verdoppeln und in einem neuen Array sichern
    function shuffelAray(x:number): void {
        
        for (let i: number = 1; i <= x; i++) {
             
            
        var content : string = infolist[0];  
        cardList.push (content);
            cardList.push(content);
             
            var removed = infolist.splice(0, 1);
   
        }
        
    console.log("Content CardList", cardList);
   
    
    }
    

    // Karten bauen
    function generateCards(y:number) : void{
        var node : any= document.getElementById("game");
        var childNodeHTML : string;
        var i : number = 0;
        
        
        while (i < (y*2)) {
            let min: number = 0;
        let max: number = (cardList.length);

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
    
    function generatePlayers() : void{
        var node : any= document.getElementById("info");
        var childNodeHTML : string;
        var i : number = 0;
        while (i < players) {
          
            childNodeHTML = "<div  class='player' id='Spieler" + i + "'>";
            childNodeHTML += "Spieler " + (i+1);
            childNodeHTML += "<p>";
            childNodeHTML += "13 ";
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";      
            node.innerHTML += childNodeHTML;
            i++;
        }
        }
    
function randomStatus(): string {
    let randomStatus: number = Math.random();
    if (randomStatus <= .5) {
      return "hidden";
    } else if (randomStatus > .5 && randomStatus <= .95) {
      return "taken";
    } else if (randomStatus > .95) {
      return "open";
    }
  



}
    
    
    
    // Hauptprogramm
    function main () : void {
        
         shuffelAray(amount);

        
        console.log("main");
        
        // Content
         generateCards(amount);
         generatePlayers();
        }
    


        
    // Add EventListener 
document.addEventListener("DOMContentLoaded", main);
} 
