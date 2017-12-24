function startGame() {
    var playerName;
    logPlayer(playerName);
    var messageElement = document.getElementById('messages');
    messageElement.innerText = 'Welcome to MultiMath! Starting a new game . . .';
    console.log('Starting new game .... ');
}
function logPlayer(name) {
    console.log("New game starting for player: " + name);
}
document.getElementById('startGame').addEventListener('click', startGame);
//# sourceMappingURL=app.js.map