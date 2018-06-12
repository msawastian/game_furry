import {Game} from "./game";

document.addEventListener('DOMContentLoaded', function () {
    var game = new Game();

    game.startGame();

    document.addEventListener('keydown', function(event){
        game.turnFurry(event);
    });
});