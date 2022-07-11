// console.log("Hello World")
let playerScore = 0
let compScore = 0

const computerPlay = () =>{
     let choices = ['rock','paper','scissors']
     let randNum =  Math.floor(Math.random()*3)
     let randChoice = choices[randNum]
     return randChoice
    
}
// console.log(computerPlay())
const playRound = (playerSelection,computerSelection) =>{
    if (playerSelection === 'rock' && computerSelection === 'rock'){
        return 'Tied! both picked Rock.'
    }else if (playerSelection === 'paper' && computerSelection === 'paper'){
        return 'Tied! both picked Paper.'
    }else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
        return 'Tied! both picked Scissors.'
    }else if( playerSelection === 'scissors' && computerSelection === 'rock'){
        compScore++
        return 'Loser! Rock beats scissors'
    }else if( playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore++
        return 'Winner! Scissors beats paper'
    }else if( playerSelection === 'rock' && computerSelection === 'paper'){
        compScore++
        return 'Loser! Paper beats rock'
    }else if( playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore++
        return 'Winner! Rock beats scissors'
    }else if( playerSelection === 'paper' && computerSelection === 'scissors'){
        compScore++
        return 'Loser! Rock beats scissors'
    }else if( playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++
        return 'Winner! Paper beats rock'
    }
}

const game = () => {
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt('Choose RPS', 'Rock, Paper, Scissors').toLowerCase()
        const computerSelection = computerPlay()
        playRound(playerSelection, computerSelection)
    }
    if (playerScore > compScore){
        return 'You beat the computer!'
    }else if (playerScore < compScore){
        return 'You lost to the computer!'
    }else{
        return 'You tied the computer!'
    }
}
game()





