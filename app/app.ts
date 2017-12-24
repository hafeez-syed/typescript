/**
 * Created by Hafeez Syed on 29/5/17.
 */

function startGame(): void {

    let playerName: string;
    logPlayer(playerName);

    // starting a new game
    var messageElement = document.getElementById('messages');
    messageElement.innerText = 'Welcome to MultiMath! Starting a new game . . .';
    console.log('Starting new game .... ');
}

function logPlayer(name: string) {
    console.log(`New game starting for player: ${name}`);
}

document.getElementById('startGame').addEventListener('click', startGame);