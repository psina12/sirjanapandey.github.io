


function Decorations() {
    
    var text = document.getElementById("inputTextArea");
    var size = window.getComputedStyle(text).fontSize;
    size = parseInt(size);
    size = size + 2;
    text.style.fontSize = size + "pt";

}

function setTimer() {
    setInterval(biggerDecorations, 3000);

}

function bling(checkbox) {
    var text = document.getElementById("inputTextArea").style;
    if (checkbox.checked) {
        text.fontWeight = "bold";
        text.color = "green";
        text.textDecoration = "underline";
        document.body.style.background = "#f3f3f3 url('https://courses.cs.washington.edu/courses/cse190m/12su/labs/6/hundred-dollar-bill.jpg')  no-repeat right top";


    } else {
        text.fontWeight = "normal";
        text.color = "black";
        text.textDecoration = "none";
        document.body.style.background = "none";
    }

}



