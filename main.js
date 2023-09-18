"use strict";


/* Encapsulation of the code */

(() => {


    $(document).ready(function() {

        /* Declaring global variables only in this scope */

        let canvas = document.getElementById('myCanvas');
        let context = canvas.getContext('2d');
        let offsX = 10;
        let offsY = 10;
        let timer = 90;
        let startX = 0;
        let startY = 0;
        let secCounter = 0;


        /* Animation of the name */

        function animation() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.rect(0, 0, canvas.width, canvas.height);
            let colors = context.createLinearGradient(0, 0, 0, canvas.height);
            colors.addColorStop(0, 'black');
            colors.addColorStop(0.33, 'red');
            colors.addColorStop(0.66, 'red');
            colors.addColorStop(1, 'black');
            context.fillStyle = colors;
            context.fill();
            context.shadowBlur = 15;
            context.shadowOffsetX = offsX;
            context.shadowOffsetY = offsY;
            context.shadowColor = "black";
            context.fillRect(startX, startY, 500, 250);
            if (timer > 70) {
                timer -= 1;
                offsX -= 1;
            } else if (timer > 50) {
                timer -= 1;
                offsY -= 1;
            } else if (timer > 30) {
                timer -= 1;
                offsX += 1;
            } else if (timer > 10) {
                timer -= 1;
                offsY += 1;
            } else {
                timer = 90;
            }
            const text1 = 'Gerencsér';
            const text2 = 'Péter';
            context.fillStyle = 'red';
            context.font = 'bold 48pt Tahoma';
            context.fillText(text1, 250, 120);
            context.fillText(text2, 250, 180);
            context.textAlign = 'center';
            setTimeout(animation, 32);
        }
        animation();


        /* Elapsed time meter */

        function secCalc() {
            secCounter++;
            document.getElementById("secondcalc").innerHTML = secCounter;
            setTimeout(secCalc, 1000);
        }
        secCalc();


        /* Impossible click */

        $(function() {
            $(".negative button").button().hover(
                function() {
                    $(this).animate({ top: "230px" });
                },
                function() {
                    $(this).animate({ top: "0px" });
                }
            );
        });
    });

})();