/**
 * Created by Hafeez Syed on 29/5/17.
 */

function startGame(): void {
    // starting a new game
    var messageElement = document.getElementById('messages');
    messageElement.innerText = 'Welcome to MultiMath! Starting a new game . . .';
    console.log('Starting new game .... ');
}

document.getElementById('startGame').addEventListener('click', startGame);