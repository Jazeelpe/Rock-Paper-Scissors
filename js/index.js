
        let score = JSON.parse(localStorage.getItem('score'));
        if (score === null){
            score = {
                win:0,
                losses:0,
                tie:0
            }
        }
        function updateScoreElement(){

            document.querySelector('.js-score-line').innerHTML=`Wins: ${score.win} Losses: ${score.losses} Ties:${score.tie}`;
        }
        function computerMove(){
            const computerMove = Math.random();
            let computerChoice = '';
            if(computerMove >=0 && computerMove <=1/3){
                computerChoice = 'rock';
            }else if (computerMove >= 1/3 && computerMove <=2/3){
                computerChoice = 'paper';
            }else{
                computerChoice = 'scissors';
            }
            console.log(computerChoice)
            return computerChoice;
        }

        function compareResult(userChoice){
            const computerChoice = computerMove();
            let result=' ';
            if(userChoice === 'rock'){
                if(computerChoice === 'rock'){
                    result = 'Tie.';
                }else if(computerChoice === 'paper'){
                    result = 'You lose.';
                }else if(computerChoice === 'scissors'){
                    result = 'You win.';
                }
            }else if (userChoice === 'paper') {
                if(computerChoice === 'rock'){
                    result = 'You win.';
                }else if(computerChoice === 'paper'){
                    result = 'Tie.';
                }else if(computerChoice === 'scissors'){
                    result = 'You lose.';
                }
            }else if (userChoice === 'scissors') {
                if(computerChoice === 'rock'){
                    result = 'You lose.';
                }else if(computerChoice === 'paper'){
                    result = 'You win.';
                }else if(computerChoice === 'scissors'){
                    result = 'Tie.';
                }
            }
            
            if (result === 'You win.'){
                score.win ++ ;
            }else if(result === 'You lose.'){
                score.losses ++ ;
            }else if(result === 'Tie.'){
                score.tie ++ ;
            }

            document.querySelector('.js-both-choice').innerHTML=`you <img class="icons" src="Images/${userChoice}.png" > <img class="icons"src="Images/${computerChoice}.png">computer`

            document.querySelector('.js-match-result').innerHTML=result;
            updateScoreElement();

            localStorage.setItem('score', JSON.stringify(score));
            
            
        }
        document.querySelector('.js-score-line').innerHTML=`Wins: ${score.win} Losses: ${score.losses} Ties:${score.tie}`;