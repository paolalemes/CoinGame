function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

function pegarPosicao(pos){
    if(!pos) return 100;
    return parseInt(pos.slice(0, -2));
}

function moveCoin(){
   const y = Math.floor(Math.random() * window.innerHeight);
   const x = Math.floor(Math.random() * window.innerWidth);
   coin.style.top = `${y}px`;
   coin.style.left = `${x}px`;
}

function moveVertical(element, amount){
    const currTop = pegarPosicao(element.style.top);
    element.style.top = `${currTop + amount}px`;
}

function moveHorizontal(element, amount){
    const currLeft = pegarPosicao(element.style.left);
    element.style.left = `${currLeft + amount}px`;
}

const coin = document.querySelector('#coin');
const avatar = document.querySelector('#player');
const points = document.querySelector('#points');
let score = 0;

moveCoin();

window.addEventListener('keydown', function(e){
    if(e.key === 'ArrowDown' || e.key === 'Down'){
        moveVertical(avatar, 50);
    } else if(e.key ===  'ArrowUp' || e.key === 'Up'){
        moveVertical(avatar, -50);
    } else if(e.key ===  'ArrowRight' || e.key === 'Right'){
        moveHorizontal(avatar, 50);
        avatar.style.transform = 'scale(1,1)';
    } else if(e.key ===  'ArrowLeft' || e.key === 'Left'){
        moveHorizontal(avatar, -50);
        avatar.style.transform = 'scale(-1,1)';
    }

    if(isTouching(avatar, coin)){
        moveCoin();
        score = score + 1;
        points.innerText = `Pontuação: ${score}`;

    } 
   
})