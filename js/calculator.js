function Calculator() {

    this.setNewCoord = setNewCoord;
    this.setCurrentFloorIndex = setCurrentFloorIndex;
    this.isUserOnWater = isUserOnWater;
    this.isSteppingOnHole = isSteppingOnHole;
    this.shouldBeFalling = shouldBeFalling;
    this.jumpTop = jumpTop;
    this.jumpFloorBase = jumpFloorBase;
    this.getCoord = getCoord;
    this.hitEnemy = hitEnemy;
    this.touchedEnemy = touchedEnemy;
    this.setGameEndingTime = setGameEndingTime;
    this.areTouching = areTouching;
    this.isVisible = isVisible;
    this.isOverHole = isOverHole;

    return this;

    function setGameEndingTime() {
        var finalTime = +new Date();
        gameTime = finalTime - time;
        timer = 0;
    }

    function touchedEnemy() {
        var touched = false;
        enemies.forEach(function(enemy) {
            if (isVisible(enemy) & areTouching(charDiv, enemy)) {
                touched = true;
                return true;
            }
        });

        return touched;
    }

    function hitEnemy(bullet) {
        var hit = false;
        enemies.forEach(function(enemy) {
            if (isVisible(enemy) && areTouching(bullet, enemy)) {
                hit = enemy;
                return true;
            }
        });
        return hit;
    }

    function getCoord(coord) {
        var regex = /[+-]?\d+(\.\d+)?/g;
        if (coord == '') return 0;
        return parseFloat(coord.match(regex).map(function(v) { return parseFloat(v); }));
    }

    function jumpFloorBase() {
        var idx = (!isAllInSection() && isRightFloorHigherThanCurrent()) ? floorIndex+1 : floorIndex;
        return FLOORS[mapArr[idx][2]] - FLOORVERTTOLERANCE;
    }

    function jumpTop() {
        var idx = (!isAllInSection() && isRightFloorHigherThanCurrent()) ? floorIndex+1 : floorIndex;
        return FLOORS[mapArr[idx][2]] - FLOORVERTTOLERANCE - JUMPHIGH;
    }

    function setNewCoord() {
        if (commands.right && canMoveRight()) {
            leftPos += basicMovRate;
            restrainMovement();
            return true;
        } else if (commands.left && canMoveLeft()) {
            leftPos -= basicMovRate;
            return true;
        }
        return false;
    }

    function isSteppingOnHole() {
        return (
                mapArr[floorIndex][3] == 'hole'
                && topPos >= CHARBASEFLOOR
                && (
                    isAllInSection()
                    || mapArr[floorIndex+1][3] == 'hole'
                )
            );
    }

    function isOverHole() {
        return (
                mapArr[floorIndex][3] == 'hole'
                && (
                    isAllInSection()
                    || mapArr[floorIndex+1][3] == 'hole'
                )
            );
    }

    function isUserOnWater() {
        return (
                mapArr[floorIndex][3] == 'liquid'
                && (
                    isAllInSection()
                    || (mapArr[floorIndex+1]
                        && mapArr[floorIndex+1][3] == 'liquid'
                    )
                )
            );
    }

    function isAllInSection() {
        return (leftPos <= mapIndexArray[floorIndex] - FLOORHORTOLERANCE);

    }

    function setCurrentFloorIndex() {
        for (var i = 0; i < mapIndexArray.length; i++) {
            if (leftPos < mapIndexArray[i]) {
                floorIndex = i;
                return;
            }
        }
    }

    function shouldBeFalling() {
        return !actions.falling
            && !actions.swimming
            && !actions.jumping
            && isAllInSection()
            && topPos + FLOORVERTTOLERANCE < FLOORS[mapArr[floorIndex][2]];
    }

    function notCrossMappingToOblivion() {
        return !(leftPos <= -.5 && currMap == 0);
    }

    function restrainMovement() {
        if (!isNextRightStepOnSameFloorBase() && isRightFloorHigherThanCharTop() && leftPos > mapIndexArray[floorIndex] - FLOORHORTOLERANCE) {
            leftPos = mapIndexArray[floorIndex] - FLOORHORTOLERANCE;
        }
    }

    function canMoveRight() {
        return !actions.falling && (!isAllInSection() && !isRightFloorHigherThanCharTop()) || (isNextRightStepOnSameFloorBase() || !isRightFloorHigherThanCharTop());
    }

    function canMoveLeft() {
        return !actions.falling && notCrossMappingToOblivion() && (isNextLeftStepOnSameFloorBase() || !isLeftFloorHigherThanCharTop());
    }

    function isNextRightStepOnSameFloorBase() {
        return (floorIndex == getFloorIndexForPos(leftPos + FLOORHORTOLERANCE));
    }

    function isNextLeftStepOnSameFloorBase() {
        return (floorIndex == getFloorIndexForPos(leftPos - basicMovRate));
    }

    function getFloorIndexForPos(pos) {
        for (var i = 0; i < mapIndexArray.length; i++) {
            if (pos < mapIndexArray[i]) {
                return i;
            }
        }
        return -1;
    }

    function isLeftFloorHigherThanCharTop() {
        var currFloorBase = mapArr[floorIndex][2],
            nextFloorBase = mapArr[floorIndex-1][2];
            return currFloorBase < nextFloorBase && isCharmanHigherThanNextFloor(nextFloorBase);
    }

    function isRightFloorHigherThanCharTop() {
        var currFloorBase = (mapArr[floorIndex]) ? mapArr[floorIndex][2] : 0,
            nextFloorBase = (leftPos < 95) ? mapArr[getFloorIndexForPos(leftPos + FLOORHORTOLERANCE)][2] : currFloorBase;
            return currFloorBase < nextFloorBase && isCharmanHigherThanNextFloor(nextFloorBase);
    }

    function isRightFloorHigherThanCurrent() {
        var currFloorBase = (mapArr[floorIndex]) ? mapArr[floorIndex][2] : 0,
            nextFloorBase = currFloorBase;
            if (mapArr[floorIndex+1]) {
                nextFloorBase = (leftPos < 95) ? mapArr[floorIndex+1][2] : currFloorBase;
            }
            return currFloorBase < nextFloorBase;
    }

    function isCharmanHigherThanNextFloor(nextFloorBase) {
        return topPos + FLOORVERTTOLERANCE > FLOORS[nextFloorBase]
    }

    function isNextSectionHole() {
        return mapArr[floorIndex+1][3] == 'hole';
    }

    function isVisible(element) {
        return element && element.style.display == 'block';
    }

    function areTouching(elementA, elementB) {
        var elALeft = getCoord(elementA.style.left),
            elATop = getCoord(elementA.style.top),
            elBLeft = getCoord(elementB.style.left),
            elBTop = getCoord(elementB.style.top);
        return (
                elALeft + getCoord(elementA.style.width) - 2 >= elBLeft
                && elALeft < elBLeft + getCoord(elementB.style.width) - 2
                && elATop + getCoord(elementA.style.height) - 2 >= elBTop
                && elATop < elBTop + getCoord(elementB.style.height) - 2
            );
    }

}