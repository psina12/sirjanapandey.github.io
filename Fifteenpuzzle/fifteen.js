$(function() {
    var vacantX = 300;
    var vacantY = 300;
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

  
    //when moveable title is hovered
    $(".puzzlepiece").hover(function() {
        let tempX = parseInt($(this).attr("x"));
        let tempY = parseInt($(this).attr("y"));
        if (canMove(tempX, vacantX, tempY, vacantY)) {
            $(this).css({ "border-color": "red", "color": "red" });
        }
    }, function() {
        $(this).css({ "border-color": "black", "color": "black" });
    });

    //When moveable title is clicked
    $(".puzzlepiece").click(function() {
        let tempX = parseInt($(this).attr("x"));
        let tempY = parseInt($(this).attr("y"));
        if (canMove(tempX, vacantX, tempY, vacantY)) {
            ({ vacantX, vacantY } = TileMoveFunc(this, vacantX, vacantY, tempX, tempY));

        } else {
            console.log(" can't move");
        }

    });

      //Shuffling the tiles
      $("#controls").click(function() {
        const val = [0, 100, 200, 300];

        for (let i = 0; i < 200; i++) {
            const randomX = Math.floor(Math.random() * val.length);
            const randomY = Math.floor(Math.random() * val.length);

            let tempX = val[randomX];
            let tempY = val[randomY];
            let tile = "#square_" + tempX + "_" + tempY;
            ({ vacantX, vacantY } = TileMoveFunc(tile, vacantX, vacantY, tempX, tempY));
        }


    });



});

function canMove(tempX, vacantX, tempY, vacantY) {
    return (tempX + 100 == vacantX && tempY == vacantY) ||
        (tempX - 100 == vacantX && tempY == vacantY) ||
        (tempY + 100 == vacantY && tempX == vacantX) ||
        (tempY - 100 == vacantY && tempX == vacantX);
}

function TileMoveFunc(tile, vacantX, vacantY, tempX, tempY) {
    $(tile).attr("x", vacantX);
    $(tile).attr("y", vacantY);
    let x = vacantX;
    let y = vacantY;

    $(tile).css({
        "left": x + 'px',
        "top": y + 'px',
        "backgroundImage": 'url("images/background.jpg")',
    });

    $(tile).attr("id", "square_" + vacantX + "_" + vacantY);
    vacantX = tempX;
    vacantY = tempY;
    return { vacantX, vacantY };
}








































