let game;

// get kkey presses for guesses
window.addEventListener("keydown", (e) => {
    game.makeGuess(e.key)
    render()
})

//start game
const startGame = () => {
    //const puzzle = getPuzzle
    word = words[4].word
    
    game = new HangMan(word, 5)
    render()
}

const render = () => {
   game.getPuzzle
   game.gameStats()
   game.getStatus
   game.displayMessage()
   gameDiv.prepend(statusEl, guessesEl, wordEl)
}

//let test = new HangMan("hello", 5)

startGame()

//console.log(test.displayMessage())

//reset button 

//async create 

// fetch to post new data to db 
// any promises 
// check for success 
// append or prepend things to their parent 