var score, roundScore, activeplayer, activeGame; 

init()

document.querySelector('.btn-roll').addEventListener('click', function(){
    if (activeGame){
        var dice = Math.floor(Math.random() * 6)+ 1
    var DOMdice = document.querySelector('.dice')
    DOMdice.src = 'dice-'+dice+'.png'
    DOMdice.style.display = 'block';


    if (dice !== 1){
        roundScore += dice;
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
    if (score[activeplayer] >= 100){
        document.querySelector('#name-'+activeplayer).textContent = 'Winner';
        document.querySelector('.dice').style.display = 'none';
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
    document.querySelector('.dice').style.display = 'none';
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