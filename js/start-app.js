document.addEventListener("DOMContentLoaded", function(event) {

    setup = Setup();
    events = Events();
    calc = Calculator();
    display = Display();
    level = Level();
    dialogs = (typeof Dialogs !== 'undefined') ? Dialogs() : false;
    game = Game();

    //game.init();

});
