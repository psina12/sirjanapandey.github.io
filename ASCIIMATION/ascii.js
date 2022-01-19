
//loads js code
window.onload = function () { 
    "use strict";

    // animation function
    function animationSingle() { 
        if (i == length)
            i = 0;
        textArea.innerHTML = animationArray[i++];
    }

     //displays text of animation
     function displayFirstAnimation() { 
        textArea.innerHTML = ANIMATIONS[animation.value];
    }

    //starting the animation
    function startbutton() { 
        start.disabled = true;
        stop.disabled = false;
        textArea.readOnly = true;
        var animationText = ANIMATIONS[animation.value];
        animationArray = animationText.split("=====\n");
        i = 0;
        length = animationArray.length;
        interval = setInterval(animationSingle, speed);
        animation.disabled = true;
    }
    //stopping the animation
    function stopbutton() { 
        start.disabled = false;
        stop.disabled = true;
        clearInterval(interval);
        interval = null;
        animation.disabled = false;
        textArea.readOnly = false;
    }
    //changing font size
    function fontsizechange() { 
        textArea.style.fontSize = fontsize.value;
    }
    //speed control of animation
    function turboSpeed() { 
        if (turbo.checked == true) {
            speed = 50;
        }
        else {
            speed = 250;
        }
    }

   
    var i;
    var length;
    var animationArray = null;
    var interval = null;
    var speed = 250;
    var start = document.getElementById("start");
    var stop = document.getElementById("stop");
    var animation = document.getElementById("animation");
    var fontsize = document.getElementById("size");
    var turbo = document.getElementById("turbo");
    var textArea = document.getElementById("textarea");
    animation.onchange = displayFirstAnimation;
    start.onclick = startbutton;
    stop.onclick = stopbutton;
    fontsize.onchange = fontsizechange;
    turbo.onchange = turboSpeed;
};