$(function() {
    "use strict";
    var varx = 300;
    var vary = 300;
    $("#puzzlearea").children().each(function(i) {
        let x = ((i % 4) * 100);
        let y = (Math.floor(i / 4) * 100);

        $(this).addClass("puzzlepiece");
        $(this).attr("id", "square_" + x + "_" + y);
        $(this).css({
            "left": x + 'px',
            "top": y + 'px',
            "backgroundImage": 'url("images/background.jpg")',
            "backgroundPosition": -x + 'px ' + (-y) + 'px'
        });
        $(this).attr("x", x);
        $(this).attr("y", y);

    });

     //clicking of movable tile
    $(".puzzlepiece").click(function() {
        let tempX = parseInt($(this).attr("x"));
        let tempY = parseInt($(this).attr("y"));
        if (Moveable(tempX, varx, tempY, vary)) {
            ({ varx, vary } = MoveTile(this, varx, vary, tempX, tempY));

        } else {
            console.log(" Not moveable");
        }

    });

    //hovering of movable tile
    $(".puzzlepiece").hover(function() {
        let tempX = parseInt($(this).attr("x"));
        let tempY = parseInt($(this).attr("y"));
        if (Moveable(tempX, varx, tempY, vary)) {
            $(this).css({ "border-color": "red", "color": "red" });
        }
    }, function() {
        $(this).css({ "border-color": "black", "color": "black" });
    });

      //tiles shuffling
      $("#controls").click(function() {
        const val = [0, 100, 200, 300];

        for (let i = 0; i < 200; i++) {
            const randomX = Math.floor(Math.random() * val.length);
            const randomY = Math.floor(Math.random() * val.length);

            let tempX = val[randomX];
            let tempY = val[randomY];
            let tile = "#square_" + tempX + "_" + tempY;
            ({ varx, vary } = MoveTile(tile, varx, vary, tempX, tempY));
        }


    });



});

function Moveable(tempX, varx, tempY, vary) {
    "use strict";
    return (tempX + 100 == varx && tempY == vary) ||
        (tempX - 100 == varx && tempY == vary) ||
        (tempY + 100 == vary && tempX == varx) ||
        (tempY - 100 == vary && tempX == varx);
}


function MoveTile(tile, varx, vary, tempX, tempY) {
    "use strict";
    $(tile).attr("x", varx);
    $(tile).attr("y", vary);
    let x = varx;
    let y = vary;

    $(tile).css({
        "left": x + 'px',
        "top": y + 'px',
        "backgroundImage": 'url("images/background.jpg")',
    });

    $(tile).attr("id", "square_" + varx + "_" + vary);
    varx = tempX;
    vary = tempY;
    return { varx, vary };
}