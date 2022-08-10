

const minnum = document.querySelector('.minnumber'),
		maxnum = document.querySelector('.maxnumber'),
		getinput = document.querySelector('#guessnumber'),
		getbtn = document.querySelector('#btn'),
		message1 = document.querySelector('.message1'),
		message2 = document.querySelector('.message2'),
		getgame = document.querySelector('#game');


let min = 1;
let max = 10;
let gameleft = 3;
let winningnum = randomnum(min,max);

minnum.textContent = min;
maxnum.innerText = max;

getbtn.addEventListener('click', function(){
	// console.log('i am working');
	// console.log(getinput.value);
	// console.log(typeof getinput.value);

	let guess = parseInt(getinput.value);
	// console.log(typeof guess);

	if(guess < min || guess > max || isNaN(guess)){
		// message2.textContent = `Please Enter a number between ${min} to ${max}`;
		sentmessage2(`Please Enter a number between ${min} to ${max}`,'red');
	}

	if(guess === winningnum){
		//// Gameover WON

		//// disable  getinput
		// getinput.disabled = true;

		//// getinput border green
		// getinput.style.borderColor = 'green';

		//// message1 win
		// message1.textContent = `${winningnum} is Correct!!!, You Won`;
		// message1.style.color = 'green';
		// sentmessage1(`${winningnum} is Correct!!!, You Won`,'green')

		// play again
		// getbtn.value = 'Play Again';
		gameover(true,`${winningnum} is Correct!!!, You Won`);

	}else{
		// Wrong Number
		gameleft--;

		//// Gameover
		if(gameleft === 0){
			// Gameover lose
			// console.log('ss')

			// disabled input 
			// getinput.disabled = true;

			// getinput border color
			// getinput.style.borderColor = 'red';

			//// message2
			// message2.textContent = `Gameover You Lose!!! The Correct Number is ${winningnum}`;
			// message2.style.color = 'red';

			// sentmessage1(`Gameover You Lose!!! The Correct Number is ${winningnum}`,'red');

			//// play again
			// getbtn.value = 'Play Again';

			gameover(false,`Gameover You Lose!!! The Correct Number is ${winningnum}`);

		}else{
			//// Continue Game

			getinput.style.borderColor = 'red';

			//// getinput clear
			// getinput.value = '';

			//// message1
			// message1.innerText = `${guess} is not Correct, ${gameleft} guess left`;

			sentmessage1(`${guess} is not Correct, ${gameleft} guess left`,'blue');

		}

	}

});

function sentmessage1(msg,color){
	message1.textContent = msg;
	message1.style.color = color;
}

function sentmessage2(msg,color){
	message2.textContent = msg;
	message2.style.color = color;
	setTimeout(function (){
		message2.textContent = '';
	},2000);
}


// Gameover
function gameover(won,msg){
	let color;

	won === true ? color = 'green' : color = 'red';

	getinput.disabled = true;

	getinput.style.borderColor = color;

	sentmessage1(msg,color);

	getbtn.value = 'Play Again';

	// getbtn.className = 'btn playagain';
	getbtn.classList.add('playagain');

}


getgame.addEventListener('mouseup', (e) => {
	if(e.target.className === 'btn playagain'){
		window.location.reload();
	}
});

// Winning Number
function randomnum(minnum,maxnum){
	let getrdm = Math.floor(Math.random()*(maxnum-minnum)+1);
	return getrdm;
}