var score, roundScore, activeplayer, activeGame; 

init()
document.querySelector('.btn-roll').addEventListener('click', function(){
    if (activeGame){
    var dice1 = Math.floor(Math.random() * 6)+ 1
    var dice2 = Math.floor(Math.random() * 6)+ 1

    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
    document.getElementById('dice-1').src = 'dice-'+dice1+'.png'
    document.getElementById('dice-2').src = 'dice-'+dice2+'.png'


   
   if (dice1 !== 1 && dice2 !== 1){
        roundScore += dice1 + dice2;
        document.querySelector('#current-'+ activeplayer).textContent = roundScore;
    } else{
        shiftPlayer()
    }
    }
    
});
   
document.querySelector('.btn-hold').addEventListener('click', function(){
    if (activeGame){
        score[activeplayer] += roundScore;
    document.querySelector('#score-' + activeplayer).textContent = score[activeplayer];
    var input = document.querySelector('.final-score').value;
    var winerScore;
    if (input){
         winerScore = input 
    }else {
    winerScore = 100;
    }
    
    if (score[activeplayer] >= winerScore){
        document.querySelector('#name-'+activeplayer).textContent = 'Winner';
        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';
        document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active')
        document.querySelector('.player-'+activeplayer+'-panel').classList.add('winner')
        activeGame = false
    }else{
        shiftPlayer();
    }

    }
    
});

var shiftPlayer = function(){
    activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
        roundScore = 0
        document.getElementById('current-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';
        document.querySelector('.player-0-panel').classList.toggle('active')
        document.querySelector('.player-1-panel').classList.toggle('active')
}


document.querySelector('.btn-new').addEventListener('click', init);



function init() {   
    score = [0,0];
    activeplayer = 0;
    roundScore = 0;
    activeGame = true;
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-'+activeplayer+'-panel').classList.remove('winner')
    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active')
    document.querySelector('.player-0-panel').classList.add('active')







}