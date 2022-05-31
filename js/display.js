function Display() {

    var ufo = document.getElementById('ufo'),
        alien = document.getElementById('alien'),
        pig = document.getElementById('pig'),
        bullet = document.getElementById('charShot'),
        ufoBullet = document.getElementById('ufoShot'),
        abductionRay = document.getElementById('abduction'),
        bigBoss = document.getElementById('bigBoss'),
        boom = document.getElementById('boom');

    this.jump = jump;
    this.mirrorObj = mirrorObj;
    this.shoot = shoot;
    this.setCharmanRight = setCharmanRight;
    this.setCharmanLeft = setCharmanLeft;
    this.clearBackground = clearBackground;
    this.fall = fall;
    this.setBackgroundImg = setBackgroundImg;
    this.handleCharmanImg = handleCharmanImg;
    this.showResetButton = showResetButton;
    this.ufoIn = ufoIn;
    this.ufoOut = ufoOut;
    this.ufoAttack01 = ufoAttack01;
    this.charShot = charShot;
    this.abduction = abduction;
    this.updateTime = updateTime;
    this.jumpingPig = jumpingPig;
    this.standingPig = standingPig;
    this.abductPig = abductPig;
    this.standingAlien = standingAlien;
    this.alienIn = alienIn;
    this.alienOutRight = alienOutRight;
    this.alienAttack01 = alienAttack01;
    this.alienOutLeft = alienOutLeft;
    this.bigBossIn = bigBossIn;
    this.bigBossOut = bigBossOut;
    this.bigBossRoutine = bigBossRoutine;
    this.charAt = charAt;
    this.turnFragilesToHoles = turnFragilesToHoles;
    this.unHole = unHole;
    this.dialogUfo = dialogUfo;
    this.showGame = showGame;
    this.addZero = addZero;
    this.freezeChar = freezeChar;
    this.unfreezeChar = unfreezeChar;
    this.moveElmRight = moveElmRight;
    this.levelScore = levelScore;
    this.imgColorOver = imgColorOver;
    this.imgColorOut = imgColorOut;

    init();

    return this;

    function init() {
        charDiv = document.getElementById('charman');
        charmanImg = document.getElementById('charmanImg');
        bkgLayer = document.getElementById('gameBrackground');

        charDiv.style.width = FLOORHORTOLERANCE+'%';
        charDiv.style.height = FLOORVERTTOLERANCE+'%';

        bullet.style.width = '1.5%';
        bullet.style.height = '1%';

        ufoBullet.style.width = '2%';
        ufoBullet.style.height = '1%';

        ufo.style.width = '20%';
        ufo.style.height = '20%';

        pig.style.width = '8%';
        pig.style.height = '10%';

        alien.style.width = '4%';
        alien.style.height = '14%';

        bigBoss.style.width = '20%';
        bigBoss.style.height = '35%';
        bigBoss.health = 0;

        boom.style.width = '10%';
        boom.style.height = '20%';
    }

    function imgColorOver(elmId) {
        document.getElementById(elmId).style.filter = 'invert(1)';
    }

    function imgColorOut(elmId) {
        document.getElementById(elmId).style.filter = 'invert(0)';
    }

    function freezeChar() {
        events.tapStop('btnRight');
        actions.canMove = false;
        actions.canJump = false;
        actions.canFire = false;
    }

    function unfreezeChar() {
        actions.canMove = true;
        actions.canJump = true;
        actions.canFire = true;
    }

    function showGame() {
        document.getElementById('gameElements').style.display = 'block';
        document.getElementById('startGame').style.display = 'none';
        setup.prepareSoundsForMobile();
    }

    function dialogUfo() {
        dialogs.start(pig, 02, 10);
    }

    function unHole(indexes) {
        setClassProp('fragile', 'opacity', 0);
        var els = document.getElementsByClassName('fragile'),
            i;
        for (i = 0; i < els.length; i++) {
            if (hasClass(els[i], 'single')) {
                els[i].setAttribute('src', 'img/map/floor/floor02.png');
            } else {
                els[i].setAttribute('src', 'img/map/floor/floor01.png');
            }
            unfade(els[i], setAsSolid);
        }

        function setAsSolid() {
            indexes.forEach(function(idx) {
                mapArr[idx][3] = 'solid';
            });
        }
    }

    function turnFragilesToHoles(params) {
        setClassProp('fragile', 'opacity', 1);
        var els = document.getElementsByClassName('fragile'),
            i;
        for (i = 0; i < els.length; i++) {
            fade(els[i], setAsHole);
        }

        function setAsHole() {
            params.floorIndexes.forEach(function(idx) {
                mapArr[idx][3] = 'hole';
            });
        }
    }

    function charAt(params) {
        leftPos = params.left;
        topPos = params.top;
        at(charDiv, leftPos, topPos);
    }

    function bigBossRoutine(params) {
        var count = 0;
        bigBoss.health = 4;

        routine();

        function routine() {
            var tempLeft = Math.floor(Math.random() * 30),
                left = (count % 2 == 0) ? tempLeft : tempLeft + 50;
            bigBossIn({
                left: left,
                top: 12,
                callback: function () {
                    setTimeout(function () {
                        if (isAlive() && gameOn) {
                            bigBossIn({
                                left: left,
                                top: 31,
                                startAt: 12,
                                callback: function() {
                                    setTimeout(function() {
                                        if (isAlive() && gameOn) {
                                            bigBossShoot();
                                            bigBossOut(function () {
                                                count++;
                                                setTimeout(routine, 650);
                                            });
                                        } else if (gameOn) {
                                            if (params.callback) params.callback((params.args) ? params.args : false);
                                        }
                                    }, 130);
                                }
                            });
                        } else if (gameOn) {
                            if (params.callback) params.callback((params.args) ? params.args : false);
                        }
                    }, 100)
                }
            });
        }

        function isAlive() {
            return calc.isVisible(bigBoss) && bigBoss.health > 0;
        }
    }

    function bigBossShoot(callback) {
        enemyFire(bigBoss, basicMovRate, 23, callback);
    }

    function alienOutRight(callback) {
        moveElmRight(alien, 100, basicMovRate *.6, callback);
    }

    function moveElmRight(el, target, moveRate, callback) {
        var left = calc.getCoord(el.style.left),
            top = calc.getCoord(el.style.top);

        moveRight();

        function moveRight() {
            if (calc.isVisible(el)) {
                if (left <= target) {
                    left += (moveRate);
                    at(el, left, top);
                    setTimeout(moveRight, 5);
                } else {
                    el.style.display = 'none';
                    if (callback) callback();
                }
            }
        }
    }

    function alienOutLeft(callback) {
        var left = calc.getCoord(alien.style.left),
            top = calc.getCoord(alien.style.top);

        moveLeft();

        function moveLeft() {
            if (calc.isVisible(alien)) {
                if (left > -5) {
                    left -= (basicMovRate *.6);
                    at(alien, left, top);
                    setTimeout(moveLeft, 5);
                } else {
                    alien.style.display = 'none';
                    if (callback) callback();
                }
            }
        }
    }

    function alienIn(params) {
        var left = (params.right) ? -3 : 100;

        at(alien, left, params.top);

        moveAlien();

        function moveAlien() {
            if (calc.isVisible(alien)) {
                if (!params.right && left >= params.left) {
                    left -= (basicMovRate *.6);
                } else if (params.right && left < params.left) {
                    left += (basicMovRate *.6);
                } else {
                    if (params.callback) params.callback();
                    return;
                }
                at(alien, left, params.top);
                setTimeout(moveAlien, 5);
            }
        }
    }

    function standingAlien(params) {
        at(alien, params.left, params.top);
        if (params.callback) params.callback();
    }

    function abductPig() {
        var pos = {};
        pos.left = calc.getCoord(pig.style.left) - (calc.getCoord(ufo.style.width) / 2) + (FLOORHORTOLERANCE / 2);
        pos.top = 10;
        ufoIn(pos, abduct, pig);
    }

    function abduct(abductee) {
        at(
            abductionRay,
            calc.getCoord(ufo.style.left) + 2.5,
            calc.getCoord(ufo.style.top) + calc.getCoord(ufo.style.height)
        );
        fade(abductee, abducted);
    }

    function fade(el, callback) {
        var opacity = parseFloat(el.style.opacity) - .02;
        if (opacity >= 0) {
            el.style.opacity = opacity;
            setTimeout(function() { fade(el, callback) }, 20);
            return;
        }
        if (callback) callback(el);
    }

    function unfade(el, callback) {
        var opacity = parseFloat(el.style.opacity) + .02;
        if (opacity < 1) {
            el.style.opacity = opacity;
            setTimeout(function() { unfade(el, callback) }, 20);
            return;
        }
        if (callback) callback(el);
    }

    function variateOpacity() {
        
    }

    function abducted(el) {
        abductionRay.style.display = 'none';
        setTimeout(function() {
            ufoOut();
            el.style.display = 'none';
            if (el.id == 'charman') setTimeout(levelScore, 1500);
        }, 100);
    }

    function standingPig(params) {
        at(pig, params.left, params.top);
        if (params.callback) params.callback();
    }

    function jumpingPig(jumpInfo) {
        var base = jumpInfo.top,
            top = base,
            jumpTop = (jumpInfo.forceTop !== undefined && Number.isInteger(jumpInfo.forceTop)) ? jumpInfo.forceTop : base - 20,
            dir = 'up';
        at(pig, jumpInfo.left, jumpInfo.top);
        jumping();
        function jumping() {
            if (top < jumpTop) {
                dir = 'down';
            } else if (top >= base) {
                pigJumpSound.play();
                dir = 'up';
            }
            if (dir == 'up') {
                top -= JUMPVARRATE;
            } else {
                top += JUMPVARRATE;
            }
            if (calc.isVisible(pig)) {
                moveVertically(pig, top);
                setTimeout(jumping, 10);
            }
        }

    }

    function jump() {
        var direction = 'up',
            jumpTop = calc.jumpTop();

        handleJumpingImg();
        jumping();

        function jumping() {
            var base = calc.jumpFloorBase();
            if (topPos <= jumpTop) direction = 'down';
            topPos = getNewTopPosition(direction);
            if (topPos >= base) {
                topPos = base;
                moveVertically(charDiv, topPos);
                actions.jumping = false;
                return;
            }
            moveVertically(charDiv, topPos);
            setTimeout(jumping, 10);
        }

        function getNewTopPosition(direction) {
            if (direction == 'up') {
                return topPos - JUMPVARRATE;
            }
            return topPos + JUMPVARRATE;
        }

    }
    function updateTime() {
        document.getElementById('time').innerHTML = timer + ' segs.';
    }

    function abduction() {
        var pos = {};
        pos.left = leftPos - (calc.getCoord(ufo.style.width) / 2) + (FLOORHORTOLERANCE / 2);
        pos.top = 20;
        charmanImg.setAttribute('src', 'img/charman/charman-hands-up.png');
        ufoIn(pos, abduct, charDiv);
    }

    function charShot() {
        var hit = false;
        if (!actions.shooting) {
            var direction = actions.lastDirection,
                left = (direction == 'right') ? leftPos + FLOORHORTOLERANCE : leftPos - CHARSHOTWIDTH,
                top = topPos + 6;
            at(bullet, left, top);
            actions.shooting = true;
            charArrowSound.play();

            moveBullet();

            function moveBullet() {
                if (actions.cancelShot) {
                    cancelShooting();
                    return;
                }
                if (hit = calc.hitEnemy(bullet)) {
                    temp = (direction) ? left : left - 15;
                    explosion(temp, top);
                    if (hit.id != 'bigBoss') {
                        hide(hit.id);
                    } else {
                        bigBoss.health -= 1;
                        if (bigBoss.health <= 0) {
                            hide(hit.id);
                        }
                    }
                    cancelShooting();
                    return;
                }
                if (direction == 'right' && left <= 100) {
                    left += (basicMovRate * 2);
                    bullet.style.left = left+'%';
                    setTimeout(moveBullet, 5);
                } else if (direction == 'left' && left >= -2) {
                    left -= (basicMovRate * 2);
                    bullet.style.left = left+'%';
                    setTimeout(moveBullet, 5);
                } else {
                    cancelShooting();
                    return;
                }
            }
        }
    }

    function cancelShooting() {
        bullet.style.display = 'none';
        actions.shooting = false;
    }

    function alienAttack01(pos) {
        pos.callback = alienShot;
        alienIn(pos);
    }

    function ufoAttack01(pos) {
        ufoIn(pos, ufoShot);
    }

    function enemyFire(enemy, moveRate, relativeTop, callback) {
        if (calc.isVisible(enemy)) {
            var enemyLeft = calc.getCoord(enemy.style.left),
                isRight = leftPos > enemyLeft,
                left = (isRight) ? enemyLeft + calc.getCoord(enemy.style.width) : enemyLeft;
            ufoLaserSound.play();
            at(ufoBullet, left, calc.getCoord(enemy.style.top) + relativeTop);
            if (callback) setTimeout(callback, 300);
            moveProjectile();
            function moveProjectile() {
                if (actions.cancelShot) {
                    ufoBullet.style.display = 'none';
                    return;
                }
                if (calc.areTouching(ufoBullet, charDiv) && !actions.swimming) {
                    game.endGame('hit');
                    return;
                }
                if (!isRight && left >= -2) {
                    left -= moveRate;
                    ufoBullet.style.left = left+'%';
                    setTimeout(moveProjectile, 5);
                } else if (isRight && left < 100) {
                    left += moveRate;
                    ufoBullet.style.left = left+'%';
                    setTimeout(moveProjectile, 5);
                } else {
                    ufoBullet.style.display = 'none';
                    if (callback) callback();
                }
            }
        }

    }

    function alienShot() {
        enemyFire(alien, basicMovRate, 9, alienOutRight);
    }

    function ufoShot() {
        enemyFire(ufo, basicMovRate * .6, 10, ufoOut);
    }

    function bigBossIn(params) {
        elementVertIn(
            bigBoss,
            params.left,
            (!params.startAt) ? -20 : params.startAt,
            params.top,
            params.callback, false
        );
    }

    function ufoIn(pos, callback, args) {
        if (ufo.style.display == 'none')
            elementVertIn(ufo, pos.left, -20, pos.top, callback, args);
    }

    function elementVertIn(el, left, top, target, callback, args) {
        at(el, left, top);
        goingDown();
        function goingDown() {
            if (top <= target) {
                top += basicMovRate * 1.5;
                el.style.top = top+'%';
                setTimeout(goingDown, 5);
                return;
            }
            el.style.top = top+'%';
            if (callback) callback(args);
        }
    }

    function elementVertOut(el, moveRate, callback, args) {
        var top = calc.getCoord(el.style.top);
        goinUp();
        function goinUp() {
            if (top > -20) {
                top -= moveRate;
                el.style.top = top+'%';
                setTimeout(goinUp, 5);
            } else {
                hide(el.id);
                if (callback) callback(args);
            }
        }

    }

    function bigBossOut(callback) {
        elementVertOut(bigBoss, basicMovRate * 2, callback, false)

    }

    function ufoOut() {
        if (ufo.style.display == 'block')
            elementVertOut(ufo, basicMovRate * 3, false, false);
    }

    function showResetButton() {
        document.getElementById('gameOver').style.display = 'block';
        document.getElementById('gameTime').innerHTML = millisToMinutesAndSeconds(gameTime);
        document.getElementById('lastStage').innerHTML = currMap+1;
        display.updateTime();
    }

    function handleCharmanImg() {
        if (actions.swimming) {
            handleSwimmingImg();
        } else if (!actions.falling && (commands.right || commands.left) && (actions.jumping || !actions.firing)) {
            handleRunninImg();
        } else if (!actions.jumping && !actions.firing && !actions.falling) {
            charmanIdle();
        }
    }

    function fall(callback) {
        if (!actions.falling) {
            actions.falling = true;
            var target = mapArr[floorIndex][3] != 'hole' ? FLOORS[mapArr[floorIndex][2]] - FLOORVERTTOLERANCE : 120;
            setTimeout(function () {
                charmanImg.setAttribute('src', 'img/charman/charman-hands-up.png');
            }, 20);
            falling();
            function falling() {
                if (topPos <= target) {
                    topPos += JUMPVARRATE;
                    moveVertically(charDiv, topPos);
                    setTimeout(falling, 5);
                } else {
                    moveVertically(charDiv, target);
                    actions.falling = false;
                    if (callback) callback();
                }
            }
        }
    }

    function setBackgroundImg() {
        if (currMap % 2 == 0) {
            bkgLayer.style.backgroundImage = "url('img/map/"+this.bkgdImage1+"')";
        } else {
            bkgLayer.style.backgroundImage = "url('img/map/"+this.bkgdImage2+"')";
        }
    }    

    function clearBackground(){
        var elements = document.getElementsByClassName('floor');
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
    }

    function setCharmanLeft() {
        charDiv.style.left = '-3%';
        leftPos = -3;
        floorIndex = 0;
    }

    function setCharmanRight() {
        charDiv.style.left = '97%';
        leftPos = 95;
    }

    function charmanIdle() {
        charmanImg.setAttribute('src', 'img/charman/charman-01.png');
    }

    function shoot(callback) {
        charmanImg.setAttribute('src', 'img/charman/charman-bow.gif');
        if (callback) {
            setTimeout(function () {
                callback();
            }, 300);
        }
    }


    function handleJumpingImg() {
        charmanImg.setAttribute('src', 'img/charman/charman-jump.gif');
        charmanImg.style.width = '100%';
        charmanImg.style.height = '100%';
        charmanImg.style.paddingTop = '0%';
        setCharmanBackToIdle();
    }

    function mirrorObj(objeto, escala) {
        objeto.style.MozTransform = 'scaleX('+escala+')';
        objeto.style.webkitTransform = 'scaleX('+escala+')';
        objeto.style.OTransform = 'scaleX('+escala+')';
        objeto.style.transform = 'scaleX('+escala+')';
        objeto.style.msFilter = 'fliph';
        objeto.style.filter = 'fliph';
    }

    function setCharmanBackToIdle() {
        if (gameOn && !actions.jumping) {
            if (calc.isUserOnWater(leftPos)) {
                handleSwimmingImg();
                return;
            }
            charmanImg.setAttribute('src', 'img/charman/charman-01.png');
            setTimeout(setCharmanBackToIdle, 50);
        }
    }

    function handleRunninImg() {
        if (!actions.jumping && charmanImg.getAttribute('src') != 'img/charman/charman-run.gif') {
            charmanImg.setAttribute('src', 'img/charman/charman-run.gif');
            charmanImg.style.width = '100%';
            charmanImg.style.height = '100%';
            charmanImg.style.paddingTop = '0%';
        }
    }

    function handleSwimmingImg() {
        if (!actions.jumping && charmanImg.getAttribute('src') != 'img/charman/charman-swim.gif') {
            charmanImg.setAttribute('src', 'img/charman/charman-swim.gif');
            charmanImg.style.width = '160%';
            charmanImg.style.height = '60%';
            charmanImg.style.paddingTop = '85%';

        }
    }

    function hide(elemId) {
        document.getElementById(elemId).style.display = 'none';
    }

    function millisToMinutesAndSeconds(millis) {
        var date = new Date(millis);
        return date.getUTCMinutes() + ':' + addZero(date.getUTCSeconds(), 2) + ':' + date.getUTCMilliseconds();
    }

    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    function at(el, left, top) {
        if (el) {
            el.style.opacity = 1;
            if (left) el.style.left = left+'%';
            if (top) el.style.top = top+'%';
            el.style.display = 'block';
        }
    }

    function moveVertically(el, top) {
        if (el && top) el.style.top = top+'%';
    }

    function levelScore() {
        document.getElementById('gameTime').innerHTML = millisToMinutesAndSeconds(gameTime);
        document.getElementById('lastStage').innerHTML = currMap+1;
        document.getElementById('gameElements').style.display = 'none';
        document.getElementById('levelScore').style.display = 'block';
    }

    async function explosion(left, top) {
        var boomImg = document.getElementById('boomImg');
        boom.style.left = left+'%';
        boom.style.top = (top-8)+'%';
        boom.style.display = 'block';
        boomImg.setAttribute('src', 'img/interactions/explosion01.gif');
        explosionSound.play();
        setTimeout(function() {
            boomImg.setAttribute('src', '');
            boom.style.display = 'none';
        }, 300);
    }

    function hasClass(target, className) {
        return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
    }

}