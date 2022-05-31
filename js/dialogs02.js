function Dialogs() {

    var balloon = document.getElementById('dialogBalloon'),
        charDiv = document.getElementById('charman');

    this.start = start;
    this.dialog021007 = dialog021007;

    return this;

    function start(el, level, screen) {
        display.freezeChar();
        dialogBalloon(pig, "Hey, wait a moment! DON'T SHOOT!", dialog021001);
    }

    function dialog021001() {
        dialogBalloon(pig, "I got abducted last level, man...", dialog021002);
    }

    function dialog021002() {
        dialogBalloon(pig, "Did you see it?", dialog021003);
    }

    function dialog021003() {
        dialogBalloon(charDiv, "<br/>Yes...", dialog021004);
    }

    function dialog021004() {
        dialogBalloon(pig, "Cool, wasn't it? =D", dialog021005);
    }

    function dialog021005() {
        dialogBalloon(charDiv, "<br/>Yes...", dialog021006);
    }

    function dialog021006() {
        dialogBalloon(pig, "Don't be shy. Come closer...", display.unfreezeChar);
    }

    function dialog021007() {
        display.freezeChar();
        dialogBalloon(pig, "How did you get here?", dialog021008);
    }

    function dialog021008() {
        dialogBalloon(charDiv, "I was also abducted.", dialog021009);
    }

    function dialog021009() {
        dialogBalloon(pig, "Cool!! =D", dialog021010);
    }

    function dialog021010() {
        dialogBalloon(charDiv, "Wait, how come you're a talking pig??", dialog021011);
    }

    function dialog021011() {
        dialogBalloon(pig, "Microchips in my head, dude.", dialog021012);
    }

    function dialog021012() {
        dialogBalloon(charDiv, "?? =O", dialog021013);
    }

    function dialog021013() {
        dialogBalloon(pig, "The aliens implanted'em.", dialog021014);
    }

    function dialog021014() {
        dialogBalloon(pig, "I guess they wanted to communicate,", dialog021015);
    }

    function dialog021015() {
        dialogBalloon(pig, "or something...", dialog021016);
    }

    function dialog021016() {
        dialogBalloon(charDiv, "...cool... I guess! =S", dialog021017);
    }

    function dialog021017() {
        dialogBalloon(pig, "...", dialog021018);
    }

    function dialog021018() {
        dialogBalloon(charDiv, "...", dialog021019);
    }

    function dialog021019() {
        dialogBalloon(pig, "...so, wanna get out of this shit?", dialog021020);
    }

    function dialog021020() {
        dialogBalloon(charDiv, "Well, sure!", dialog021021);
    }

    function dialog021021() {
        dialogBalloon(pig, "Follow me. I know the way...", dialog021022);
    }

    function dialog021022() {
        dialogBalloon(pig, "Just be careful not to touch me.", dialog021023);
    }

    function dialog021023() {
        dialogBalloon(pig, "They made me radioactive as well...", endDialog);
    }

    function endDialog() {
        hideBalloon()
        display.unfreezeChar();
        setTimeout(function() {
            display.moveElmRight(pig, 100, basicMovRate *.3, function() { pig.style.display = 'none'; });
        }, 500);
        
    }

    function dialogBalloon(el, txt, callback) {
        if (el.getAttribute('class').indexOf('enemy') > -1) {
            balloon.style.backgroundImage = "url('img/interactions/dialog-balloon-right.png')";
            balloon.style.left = (calc.getCoord(el.style.left) - 27)+'%';
            balloon.style.top = (calc.getCoord(el.style.top) - 45)+'%';
        } else {
            balloon.style.backgroundImage = "url('img/interactions/dialog-balloon-left.png')";
            balloon.style.left = (calc.getCoord(el.style.left) + FLOORHORTOLERANCE)+'%';
            balloon.style.top = (calc.getCoord(el.style.top) - 45)+'%';
        }
        balloon.innerHTML = txt;
        balloon.onclick = (callback) ? callback : false;
        balloon.style.display = 'block';
    }

    function hideBalloon() {
        balloon.style.display = 'none';
    }

}