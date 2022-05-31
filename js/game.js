function Game() {

    this.init = init;
    this.endGame = endGame;
    this.nextLevel = nextLevel;
    this.passedNextLevel = passedNextLevel;

    return this;

    function init() {
        setup.enableKeyboard();
        setup.preventDblClick();
        setup.loadContent();
        display.showGame();
        setup.resetGame();
        gameLoop();
        gameClock();
    }

    function nextLevel() {
        window.location.href = 'level'+display.addZero(level.current+1)+'.html';
    }

    function passedNextLevel() {
        endGame('nextLevel');
    }

    function gameLoop() {
        if (gameOn) {
            handleMovement();
            events.triggers();
            handleGameEnds();
            handleCrossMargin();
            handleFiring();
        }
        setTimeout(gameLoop, 15);
    }

    function gameClock() {
        if (gameOn) {
            display.updateTime();
            timer += 1;
        }
        setTimeout(gameClock, 1000);
    }

    function handleFiring() {
        if (commands.fire && !actions.firing) {
            actions.firing = true;
            display.shoot(function() {
                commands.fire = false;
                actions.firing = false;
                display.charShot();
            });
            return;
        }
    }

    function handleMovement() {
        calc.setCurrentFloorIndex();
        moveCharman();
        actions.swimming = calc.isUserOnWater();
        display.handleCharmanImg();
        handleJump();
    }

    function moveCharman() {
        calc.setNewCoord();
        if (calc.shouldBeFalling()) {
            if (calc.isOverHole()) {
                endGame('hole');
            } else {
                display.fall();
            }
        }
        charDiv.style.left = leftPos+'%';
    }

    function handleGameEnds() {
        var ending = getEndingCause()
        if (ending) endGame(ending);
    }

    function getEndingCause() {
        if (calc.isSteppingOnHole()) return 'hole';
        if (calc.touchedEnemy()) return 'touched';
        return false;
    }

    function endGame(reason) {
        gameOn = false;
        musicTheme.pause();
        pigJumpSound.pause();
        setGameEndingTime();
        switch (reason) {
            case 'hole':
                gameOverTheme.currentTime = 0;
                gameOverTheme.play();
                display.fall(display.showResetButton);
                break;
            case 'hit':
            case 'touched':
                gameOverTheme.currentTime = 0;
                gameOverTheme.play();
                display.showResetButton();
                break;
            case 'abducted':
                nextLevelTheme.currentTime = 0;
                nextLevelTheme.play();
                display.abduction();
                break;
            case 'nextLevel':
                nextLevelTheme.currentTime = 0;
                nextLevelTheme.play();
                display.levelScore();
        }
    }

    function handleJump() {
        if (commands.jump && !actions.jumping) {
            actions.jumping = true;
            display.jump();
        }
    }

    function handleCrossMargin() {
        if (commands.right || commands.left) {
            if (leftPos >= 98) {
                events.crossRight();
            } else if ((currMap != 0 ) && leftPos <= -3) {
                events.crossLeft();
            }
        }
    }

}