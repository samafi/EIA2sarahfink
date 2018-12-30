namespace Abschlussarbeit2 {

    window.addEventListener( "load", init );
    export let crc2: CanvasRenderingContext2D;
    let imgData: ImageData;

        alert("Benutze die Pfeiltasten um den bösen Schneeflocken auszuweichen! Hast du zu viele Minuspunkte, verlierst du..")

    //MovingObject

    let movingObjects: MovingObject[] = [];
    let m: number = 3;

    //Weihnachtsbäume

    let trees: Tree[] = [];
    let n: number = 5;

    //Highscore

    let highscore: number = 0;

    //Schneemann 

    let snowman: Snowman = new Snowman();
    snowman.x = 450;
    snowman.y = 630;

    //Funktion init

    function init( _event: Event ): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName( "canvas" )[0];
        crc2 = canvas.getContext( "2d" );
        console.log( crc2 );

        //Hintergrund

        let hg: Background = new Background;
        hg.paint();
        imgData = crc2.getImageData( 0, 0, canvas.width, canvas.height );
        console.log( imgData );

        //Schneemann auf dem Smartphone steuern 

        document.addEventListener( 'keydown', moveSnowman );

        //Schneemann auf Handy/Tablet steuern 

        document.addEventListener( 'touchmove', moveSnowmanTouch );

        //Weihnachtsbäume

        for ( let i: number = 0; i < n; i++ ) {
            let tree: Tree = new Tree();
            tree.x = Math.random() * 900;
            tree.y = ( 550 );

            trees.push( tree );
        }

        animate();
        checkBubblePosition();
        createFlakes();
    }

    //Funktion für die Animation

    function animate(): void {
        window.setTimeout( animate, 10 );
        crc2.putImageData( imgData, 0, 0 );

        moveObjects();
        drawObjects();
    }

    //Überprüfung ob Schneemann und Schneeflocke auf gleicher Höhe

    function checkBubblePosition(): void {
        window.setTimeout( checkBubblePosition, 10 );
        for ( let i: number = 0; i < movingObjects.length; i++ ) {
            let bubble = movingObjects[i];
            let inside = snowman.checkIfInside( bubble.x, bubble.y );

            if ( inside ) {
                movingObjects.splice( i, 1 );
                updateHighscore( bubble.points );
            }
        }
    }

    //Funktion für ständige Schneeflocken

    function createFlakes(): void {
        window.setTimeout( createFlakes, 500 );

        let p: number = Math.floor( Math.random() * 3 );
        switch ( p ) {
            case 0:
                let GreyFlake: greyFlake = new greyFlake();
                movingObjects.push(GreyFlake);
                break;
            case 1:
                let WhiteFlake: whiteFlake = new whiteFlake();
                movingObjects.push(WhiteFlake);
                break;
            case 2:
                let BlueFlake: blueFlake = new blueFlake();
                movingObjects.push(BlueFlake);
                break;
        }

    }

    //Funktion für die Steuerung

    function moveSnowman( _event: KeyboardEvent ): void {
        if ( _event.key == "ArrowRight" ) {
            snowman.moveRight();
        }
        if ( _event.key == "ArrowLeft" ) {
            snowman.moveLeft();
        }
    }

    //Funktion für Smartphone/Tabletsteuerung 

    function moveSnowmanTouch( _event: TouchEvent ): void {
        if ( _event.changedTouches[0].clientX < crc2.canvas.clientWidth / 2 ) {
            snowman.moveLeft();
        } else {
            snowman.moveRight();
        }
        console.log( _event, crc2.canvas.clientWidth / 2 );
    }

    //Funktion für die Schneeflocken, die runter fallen

    function moveObjects(): void {

        for ( let i: number = 0; i < movingObjects.length; i++ ) {
            movingObjects[i].move();

        }
    }

    //Funktion welche bewegte Elemente zeichnet

    function drawObjects(): void {

        for ( let i: number = 0; i < trees.length; i++ )
            trees[i].draw();

        for ( let i: number = 0; i < movingObjects.length; i++ )
            movingObjects[i].draw();

        snowman.draw();
        showHighscore();
    }

    //Funktion für die Punktezahl

    function updateHighscore( points: number ): void {
        highscore += points;
        if ( highscore <= -120 ) {
            alert( "Oh nein, du wurdest zu oft von den Schneeflocken getroffen. Versuche es doch noch einmal." );
            highscore = 0;
        }
    }

    //Funktion die den Punktestand anzeigt

    function showHighscore(): void {
        crc2.font = "30px Lato";
        crc2.fillStyle = "rgb(153, 40, 40)";
        crc2.fillText( "Score: " + highscore, 740, 50 );
      
    }
}