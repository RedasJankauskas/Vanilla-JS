let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  draws: 0
};

updateScoreElement();

function computerMove(){
  const randomNumber=Math.random();

  let computermove='';
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computermove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computermove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computermove = 'scissors';
  }
  return computermove
}

function playgame(playerMove, computerMove){

  let result='';

  if(playerMove==='rock'){

    if(computerMove==='rock'){
    result='Draw';
    score.draws +=1;
  }
    else if(computerMove==='paper'){
      result='You lose!';
      score.losses +=1;
    }
    else if(computerMove==='scissors'){
      result='You win!';
      score.wins +=1;
    }
  }

  if(playerMove==='paper'){

    if(computerMove==='rock'){
    result='You win!';
    score.wins +=1;
  }
    else if(computerMove==='paper'){
      result='Draw';
      score.draws += 1;
    }
    else if(computerMove==='scissors'){
      result='You lose!';
      score.losses += 1;
    }
  }

  if(playerMove==='scissors'){

    if(computerMove==='rock'){
    result='You lose!';
    score.losses += 1;
  }
    else if(computerMove==='paper'){
      result='You win!';
      score.wins +=1;
    }
    else if(computerMove==='scissors'){
      result='Draw';
      score.draws +=1;
    }
  }
  document.querySelector('.js-moves').innerHTML=`You played: <img src="Icons/${playerMove}-emoji.png" class="fotke">. Computer played: <img src="Icons/${computerMove}-emoji.png" class="fotke">`;
  document.querySelector('.js-result').innerHTML=`The result is: ${result}.`;
  updateScoreElement();
  localStorage.setItem('score', JSON.stringify(score));}




  function updateScoreElement(){
  document.querySelector('.js-score').innerHTML=`Wins:${score.wins}, Losses:${score.losses}, Draws: ${score.draws}.`;
  }

  var isAutoPlaying=false;
  var intervalId;

  function AutoPlay(){
    if(!isAutoPlaying){
    intervalId = setInterval(() => {
      const playerMove=computerMove();
      playgame(playerMove, computerMove());
    }, 1000)
    isAutoPlaying=true;}
    else{
      clearInterval(intervalId);
      isAutoPlaying=false;
    }
  }
  
document.querySelector('.fotke-container').addEventListener('click', function(){console.log('666');});
