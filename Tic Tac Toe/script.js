let boxes = document.querySelectorAll('.box');
let resetButton = document.getElementById('resetButton');
let msg = document.querySelector('.msg');
let newGame = document.querySelector('.newBtn');
let Draw = 0;
let gameOver = false; // Flag to check if the game is over
let turnX = true; // true for X's turn, false for O's turn
let winner = (player) => { // Function to declare the winner
    msg.classList.remove('hide');
    msg.innerText = `Player ${player} has won the game!`;
    gameOver = true;

};
 const enableAllButtons = () => { // Function to enable all buttons
    boxes.forEach(box => {
        box.disabled = false;
    });
};
const resetGame = () => { // Function to reset the game
    msg.classList.add('hide');
    turnX = true;
    Draw = 0;
    gameOver = false;
    enableAllButtons();
    boxes.forEach(box => { // Clear all boxes
        box.textContent = '';
        
    });
    };

const winningPattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]; // Winning patterns

boxes.forEach(boxxo => { // Adding click event to each box
    boxxo.addEventListener('click', () => { 
        if (gameOver) return; // If game is over, do nothing
        boxxo.innerText = turnX ? 'X' : 'O'; // Set box text to X or O
        turnX = !turnX; // Switch turn
        boxxo.disabled = true;
        Draw ++;

        checkwinner();
        if (!gameOver && Draw === 9) {
            noWinner();
            disableAllButtons();
        }
    });
});

const checkwinner = () => { // Function to check for a winner
    for (let pattern of winningPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 !== '' && pos1 === pos2 && pos2 === pos3) {
                winner(pos1);
                disableAllButtons();
            }
        }
    }
const disableAllButtons = () => { // Function to disable all buttons
    boxes.forEach(box => {
        box.disabled = true;
    });
}
resetButton.addEventListener('click', resetGame); // Adding event listener to reset button
newGame.addEventListener('click', resetGame); // Adding event listener to new game button

const noWinner = () => { // Function to declare no winner
    msg.classList.remove('hide');
    msg.innerText = `It's a Draw!`;
    gameOver = true;
}
