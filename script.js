const data = {
	count: 1, //this count is for the current player
	movements: [],
	player: [[],[]],
	gameContainer: document.querySelector('.game__container')
}

const colors = el => { // current player
	const id = document.getElementById(el.target.id)

	if(el.target.attributes.length === 2){
		if(data.count){
			id.style.backgroundColor = '#ADFFF2'
			data.player[0].push(parseInt(el.target.id)) // save the actual movement of the player[0]
			data.count--

		}
		else{
			id.style.backgroundColor = '#FFB2D8'
			data.player[1].push(parseInt(el.target.id)) // save the actual movement of the player[1]
			data.count++
		}
		data.movements.push(el.target)
	}
	winnerPatterns()
	draw()
}

const draw = () => {
	if(data.movements.length === 9) setTimeout(() => {
		alert('Draw')
		window.location.reload()
	}, 200)
}

const winnerPatterns = () => {    // combinations for win

	/* loops over the player[0] and player[1] searching if in the current array
	 are any valid combination, indifferent of the order */

	data.player.forEach((el, i) => { 
		if((data.player[i].includes(1) && data.player[i].includes(2) && data.player[i].includes(3))
			|| (data.player[i].includes(1) && data.player[i].includes(4) && data.player[i].includes(7))
			|| (data.player[i].includes(3) && data.player[i].includes(6) && data.player[i].includes(9))
			|| (data.player[i].includes(7) && data.player[i].includes(8) && data.player[i].includes(9))
			|| (data.player[i].includes(1) && data.player[i].includes(5) && data.player[i].includes(9))
			|| (data.player[i].includes(3) && data.player[i].includes(5) && data.player[i].includes(7))
			|| (data.player[i].includes(2) && data.player[i].includes(5) && data.player[i].includes(8))
			|| (data.player[i].includes(4) && data.player[i].includes(5) && data.player[i].includes(6))
			){
			setTimeout(() => {
				if(data.count) alert(`The pink player wins`)
				else alert(`The blue player wins`)
				window.location.reload()
			}, 50)
		}
	})
}

data.gameContainer.addEventListener('click', e => colors(e))