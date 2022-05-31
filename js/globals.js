var charDiv,
    charmanImg,
    bkgLayer,
    gameOn = true;

var musicTheme,
    charJumpSound,
    ufoLaserSound,
    charArrowSound,
    pigJumpSound,
    explosionSound;

var basicMovRate = .6,
    commands = {},
    actions = {},
    currMap = 0,
    jumpTop,
    mapIndexArray = [],
    mapArr = [],
    levelTriggers = [],
    enemies = [],
    floorIndex = 0,
    leftPos = 0,
    topPos,
    lastDirection = 'right',
    time = 0,
    timer = 0,
    gameTime = 0;

var CHARBASEFLOOR = 52,
    CHARFIRSTFLOOR = 39,
    FLOORS = [66, 60, 54];
    SINGLEBLOCK = 6.25,
    DOUBLEBLOCK = SINGLEBLOCK * 2,
    JUMPVARRATE = .7,
    FLOORHORTOLERANCE = 5
    FLOORVERTTOLERANCE = 14,
    JUMPHIGH = 21,
    UFOSHOTWIDTH = 2,
    UFOSHOTHEIGHT = 1,
    CHARSHOTWIDTH = 1.5;
    CHARSHOTHEIGHT = 1;
