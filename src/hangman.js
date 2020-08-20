// gamestats 
// get a puzzle 
// make a guess 
// get status 
// display end message

class HangMan {
    constructor(word, remainingGuesses){
        this.word = word.toLowerCase().split("")
        this.remainingGuesses = remainingGuesses
        this.guesses = []
        this.status = "playing"
    }

    gameStats = function() {
        wordEl.innerHTML = ""
        const spanWord = this.getPuzzle.split("")
        spanWord.forEach((letter) => {
            // append things to a span tag
            wordEl.innerHTML += `<span> ${letter}</span>`
        })
        // append remaining guesses to a p tag
        guessesEl.textContent = `Remaining guesses: ${this.remainingGuesses}`
    }

    // check guesses against answer 
    get getPuzzle() {
        let answer = ""
        this.word.forEach((letter) => {
            if(this.guesses.includes(letter) || letter === " "){
                answer += letter
            } else {
                answer += "*"
            }
        })
        return answer
    }

    get getStatus() {
        const finished = this.word.every((letter) => this.guesses.includes(letter) || letter === " ")
        if(this.remainingGuesses === 0){
            this.status = "failed"
        } else if (finished) {
            this.status = "finished"
        } else {
            this.status = "playing"
        }
        return this.status
    }

    makeGuess = function(guess){
        if(this.status === "playing"){
           
            guess = guess.toLowerCase()
            const uniqueLetter = !this.guesses.includes(guess)
            const badGuess = !this.word.includes(guess)
            if(uniqueLetter){
                this.guesses.push(guess)
            }
            
            if(badGuess && uniqueLetter) {
                this.remainingGuesses--
            }
        }
    }

    displayMessage = function() {
        if(this.status === "finished") {
            // set p tag to "great job you guessed the word!"
            statusEl.textContent = "great job you guessed the word!"
            return "great job you guessed the word!"
        } else if(this.status === "failed") {
            statusEl.textContent = `You lost! the word was ${this.word.join("")}`
            // You lost! the word was ${this.word.join("")}
        } else {
            statusEl.innerText = "playing"
            // now playing
        }
        
    }
} // end of class

const gameDiv = document.querySelector("#game-wrapper")

const statusEl = document.createElement("p")
statusEl.id = "status"

const wordEl = document.createElement("p")
wordEl.id = "word"
wordEl.className = "puzzle"

const guessesEl = document.createElement("p")
guessesEl.id = "guesses"
