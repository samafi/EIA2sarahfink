namespace Semester {
    export let crc2: CanvasRenderingContext2D;
    let charakter: Charakter;
    let bg: Background;
    let objs: MoveObj[] = [];
    let maxObj: number = Math.round(Math.random() * 10 + 10);
    let deadCounter: number = 0;
    let start: boolean = false;
    let noPlace:number = 0;

    window.addEventListener("load", menu);
    function menu(): void {
        let button: HTMLDivElement = <HTMLDivElement>document.getElementById("button");
        button.style.display = "block";
        let submit: HTMLButtonElement = document.createElement("button");
        submit.name = "Button";
        submit.type = "button";
        submit.innerText = "Start";
        submit.style.position = "absolute";
        submit.style.fontSize = "5em";
        submit.style.left = "30%";
        submit.style.top = "3em";
        submit.style.width = "40%";
        submit.style.height = "3em";
        submit.style.backgroundColor = "black";
        submit.style.color = "white";
        submit.addEventListener("mousedown", init);
        button.appendChild(submit);
    }

    function init(): void {
        buttonL();
        buttonR();
         jump();
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        document.getElementsByTagName("button")[0].style.display = "none";

        crc2 = canvas.getContext("2d");

        document.addEventListener("keydown", moveChange);
        document.addEventListener("keyup", moveChangeUp);



        charakter = new Charakter(400, 400);

        bg = new Background(0, 0);
        for (let i: number = 0; i < maxObj; i++) {
            let obj: MoveObj = new MoveObj(800 * Math.random(), 100 * Math.random()+i*50, charakter);
            objs.push(obj);
        }
        bg.draw();
        animate();
    }
function buttonL(): void {
        let button: HTMLDivElement = <HTMLDivElement>document.getElementById("button");
        button.style.display = "block";
        let submit: HTMLButtonElement = document.createElement("button");
        submit.name = "ButtonL";
        submit.type = "button";
        submit.innerText = "<--";
        submit.style.position = "absolute";
        submit.style.fontSize = "1em";
        submit.style.left = "10%";
        submit.style.bottom = "3em";
        submit.style.width = "20%";
        submit.style.height = "3em";
        submit.style.backgroundColor = "black";
        submit.style.color = "white";
        submit.addEventListener("click", left);
        button.appendChild(submit);
    }
    function buttonR(): void {
        let button: HTMLDivElement = <HTMLDivElement>document.getElementById("button");
        button.style.display = "block";
        let submit: HTMLButtonElement = document.createElement("button");
        submit.name = "ButtonR";
        submit.type = "button";
        submit.innerText = "-->";
        submit.style.position = "absolute";
        submit.style.fontSize = "1em";
        submit.style.right = "10%";
        submit.style.bottom = "3em";
        submit.style.width = "20%";
        submit.style.height = "3em";
        submit.style.backgroundColor = "black";
        submit.style.color = "white";
        submit.addEventListener("click", right);
        button.appendChild(submit);
    }
        function jump(): void {
        let button: HTMLDivElement = <HTMLDivElement>document.getElementById("button");
        button.style.display = "block";
        let submit: HTMLButtonElement = document.createElement("button");
        submit.name = "ButtonR";
        submit.type = "button";
        submit.innerText = "JUMP";
        submit.style.position = "absolute";
        submit.style.fontSize = "1em";
        submit.style.left = "40%";
        submit.style.bottom = "1em";
        submit.style.width = "20%";
        submit.style.height = "3em";
        submit.style.backgroundColor = "black";
        submit.style.color = "white";
        submit.addEventListener("click", jumP);
        button.appendChild(submit);
    }

function left():void{
    charakter.moveleft = true;
    charakter.moveright = false;
    start = true;
    }
    function right():void{
    charakter.moveleft = false;
        charakter.moveright= true;
        start = true;
    }
     function jumP():void{
     for (let i: number = 0; i < objs.length; i++) {
                let obj: MoveObj = objs[i];
                obj.jumpBo = true;
                start = true;
            }
    }
    
    
    function moveChange(_event: KeyboardEvent): void {
        start = true;
        if (_event.key == " ") {
            for (let i: number = 0; i < objs.length; i++) {
                let obj: MoveObj = objs[i];
                obj.jumpBo = true;

            }
        }
        if (_event.key == "a") {
            charakter.moveleft = true;
            
        }
        if (_event.key == "d") {
            charakter.moveright = true;
        }

    }
    function moveChangeUp(_event: KeyboardEvent): void {

        if (_event.key == "a") {
            charakter.moveleft = false;
        }
        if (_event.key == "d") {
            charakter.moveright = false;
        }

    }



    function collision(): void {
        if(start == true){
            for (let i: number = 0; i < objs.length; i++) {
                let obj: MoveObj = objs[i];
                if (charakter.xPos >= obj.xPos - 20 && charakter.xPos <= obj.xPos + 40 && charakter.yPos <= obj.yPos + 20 &&charakter.yPos >= obj.yPos - 50) {
                    for (let i: number = 0; i < objs.length; i++) {
                        let obj: MoveObj = objs[i];
                        obj.jumpStop();
      

                    }
                }
                else {
                    noPlace++;   
                                    
                }
            }

             if(noPlace == maxObj){
                    for (let i: number = 0; i < objs.length; i++) {
                        let obj: MoveObj = objs[i];
                        obj.falling = true;
                    }
                        }
       } 
        noPlace=0;
    }
    function iamDead() {
        for (let i: number = 0; i < objs.length; i++) {
            let obj: MoveObj = objs[i];
            if (obj.out == true) {
                deadCounter++;

            }
        }


        if (deadCounter == maxObj) {
            alert("You are DEAD! Your score is:"+objs[0].playerCounter);
        }

        deadCounter = 0;

    }
    function animate(): void {
        crc2.clearRect(0, 0, 800, 600);
        bg.update();
        charakter.update();
        collision();
        iamDead();
        crc2.fillStyle = "white";
        crc2.fillText("Score: "+objs[0].playerCounter,35, 35);
        for (let i: number = 0; i < objs.length; i++) {
            let obj: MoveObj = objs[i];
            obj.update();



        }

        window.setTimeout(animate, 20);
    }
}
