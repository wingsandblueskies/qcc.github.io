// VARIABLE SECTION
const defaultDomState = document.body.innerHTML;
const answer = (Math.floor(Math.random() * 100) + 1);
var guessArray = [];
var score = 10;
var highScore = 0;
var guessInput = document.querySelector('.guessinput');
var guessBoxOrg=document.querySelector('.guessbox').innerHTML;
var topBoxOrg=document.querySelector('.topbox');
const resetButton = document.querySelector('.resetbutton');
const playAgainButton = document.querySelector('.playagainbutton');
const guessBox = document.querySelector('.guessbox');
const guessBoxImgWrapper = document.querySelector('.guessboximgwrapper');
var guessBoxImg = document.querySelector('.guessboximg');
const checkButton = document.querySelector('.checkbutton');
const feedbackText = document.querySelector('.feedbacktext');
const guessHistory= document.querySelector('.guesshistory');
console.log(answer);


function youWin(){
    if(`${score}` > `${highScore}`){
         highScore = Number(`${score}`);
         document.querySelector('.highscore').textContent = `${highScore}`;
    }
    guessBoxImg.remove();
    checkButton.remove();
    guessInput.remove();
    resetButton.remove();
    guessBox.insertAdjacentHTML('afterbegin', '<div><div style="margin:auto; width:20%; margin-top: 2%; margin-bottom:0%;"><img src="win.png"></div><span style="color:white;font-weight:bolder;>Winner!</span>'); 
    feedbackText.innerHTML = `<h2 style="line-height:100%">Congratulations!</h2><p style="line-height:25%">Your guess was correct. <h3 style="display:inline-block; line-height:25%">${answer}</h3> was my secret number.</p> <h3 style="line-height:25%">Your Score:${score}</h3><h4>Best:${highScore}</h4>`
    guessBox.insertAdjacentHTML('beforeend','<button class="playagainbutton">Play again</button>');
    const playAgainButton = document.querySelector('.playagainbutton');
    topBoxOrg.insertAdjacentHTML('afterend', '<button class="resetbutton">Reset</button>');
    playAgainButton.addEventListener('click', function(){
        resetAll()
         });
    
    return;
 }
 
 function youLose(){
    checkButton.remove();
    guessInput.remove();
    guessBoxImg.remove();
    guessBox.insertAdjacentHTML('afterbegin', '<div><div style="margin:auto; width:50%; margin-top: 5%;"><img src="dead.jpg"></div><span style="color:white;font-weight:bolder;>Game Over</span>'); 
    feedbackText.innerHTML = `<h3 style="color:darkblue">Unfortunately You Lost the Game.</h3><p style="color:brown">Don't give up and try again.  You can win next time.</p> <p style="color:brown">My number was <span style="font-size:20px; color:brown; font-weight:bolder">${answer}.</span></p>`
    guessBox.insertAdjacentHTML('beforeend','<button class="tryagainbutton">Try again</button>');
    const tryAgainButton = document.querySelector('.tryagainbutton');
    tryAgainButton.addEventListener('click', function(){
        resetAll()
         });
    return;
 }
 
 function wrongAnswer(){
    let guessOffset = `${answer}`-`${guessInput.value}`;
    if(`${guessOffset}` < 0 && `${guessOffset}` > -11 ){
        feedbackText.textContent = 'You are close. Your guess was a little too high.'
    }
    else if(`${guessOffset}` > 0 && `${guessOffset}` < 11 ){
        feedbackText.textContent = 'You are close. Your guess was a little too low.'
    }
    else if(`${guessOffset}` < 0){
        feedbackText.textContent = 'Your guess was too high.'
    }
    else if(`${guessOffset}` > 0){
        feedbackText.textContent = 'Your guess was too low.'
    };
    //  feedbackText.textContent = 'Wrong answer. Guess again.';
     score = Number(`${score}` - 1);
     document.querySelector('.score').textContent = `${score}`;
     guessArray.push(guessInput.value);
     guessHistory.textContent = guessArray;
     if(`${score}` <= 0){
         youLose();
     }
     return;
 }

 function resetAll(){
    while (guessBox.firstChild) {
        guessBox.removeChild(guessBox.firstChild)
      };
     guessBox.insertAdjacentHTML("afterbegin",guessBoxOrg);
     checkButton.addEventListener('click', function(){});
     guessHistory.remove();
     return;
}

function restoreDefaults(){
    document.body.innerHTML = defaultDomState;
}

checkButton.addEventListener('click', function(){
    if(isNaN(`${guessInput.value}`) || guessInput.value < 1 || guessInput.value > 101){
        feedbackText.textContent = 'Please enter a number between 1 & 100 and try again.'
    }
    else if(guessArray.indexOf(guessInput.value) >= 0){
        feedbackText.textContent = 'Error. You\'ve already entered this number.'
    }
    else if(`${guessInput.value}` === `${answer}`){
       youWin()
    }
    else{
        wrongAnswer();
    }
    return;
    })
;

resetButton.addEventListener('click', function(){
    restoreDefaults()
    return;
});
