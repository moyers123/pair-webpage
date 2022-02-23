const holesArray = document.getElementsByClassName('hole')
const board = document.getElementById('whack-a-mole')
const score = document.getElementById('score')

const delay = ms => new Promise(res => setTimeout(res, ms));
let scoreCount = localStorage.getItem('score') || 0;
score.innerHTML = scoreCount;


const popUp = () => {
    const indexNumber = Math.floor(Math.random() * 9);
    const holePosition = holesArray[indexNumber];

    if(holePosition.classList.contains('mole') || holePosition.classList.contains('whacked')){
        return;
    }
    
    holePosition.classList.toggle('mole');
    setTimeout(() => {
        //remove mole if not clicked on//
        if(holePosition.classList.contains('mole'))
        holePosition.classList.remove('mole');
    }, 500)
}

const moleClick = (event) => {
    if(event.target.classList.contains('mole')){
        scoreCount++;
        score.innerHTML = scoreCount;
        localStorage.setItem('score', scoreCount);
        event.target.classList.toggle('mole');
        event.target.classList.toggle('whacked')
        setTimeout(() => {
            event.target.classList.toggle('whacked')
        }, 200)
    }
    console.log(event.target);
}

board.addEventListener('click', moleClick)

setInterval(popUp, 500);


