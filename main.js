
const PLAYER_TOKEN = "X";
const COMPUTER_TOKEN = "O";

$(document).ready(function(){
	let grid = [
		[' ',' ',' '],
		[' ',' ',' '],
		[' ',' ',' ']
	];

function isGameOver(){

//check horizontal 

	for(let i=0; i<3; i++){
		if(grid[i][0] !== " " && 
		   grid[i][0] === grid[i][1] &&
		   grid[i][0] === grid[i][2]) {
		   	return grid[i][0];
		}
	}

//check vertical

	for(let j=0; j<3; j++){
	    if(grid[0][j] !== " " && 
		   grid[0][j] === grid[1][j] &&
		   grid[0][j] === grid[2][j]) {
		   	return grid[0][j];
		}
	}	

//check diagonal top left to bottom right
	
	    if(grid[0][0] !== " " && 
		   grid[0][0] === grid[1][1] &&
		   grid[0][0] === grid[2][2]) {
		   	return grid[0][0];
		}
	
//check diagonal bottom left to top right

	    if(grid[2][0] !== " " && 
		   grid[2][0] === grid[1][1] &&
		   grid[2][0] === grid[0][2]) {
		   	return grid[2][0];
		}
	
	for(let i=0; i<3; i++){
		for(let j=0; j<3; j++){
			if(grid[i][j] === " "){
				return false;
			}
		}
	}

		return null;
}


function moveAI(){

	for(let i=0; i<3; i++){
		for(let j=0; j<3; j++){
			if(grid[i][j] === " "){
				return {
					i: i,
					j:j
				};
			}
		}
	}

	return null;
}


	$(".col").click(function(){
		let thisVal = $(this);
		$(this).html(PLAYER_TOKEN);
		const i = thisVal.data("i");
		const j = thisVal.data("j");
		grid[i][j] = PLAYER_TOKEN;
		console.log(grid);
		let gameState = isGameOver();

		if(gameState){
			alert('game over:' + gameState);
			return;
		}
		else{
			//move to AI
			const spot = moveAI();
			grid[spot.i][spot.j] = COMPUTER_TOKEN;
			$(".col[data-i=" + spot.i + "][data-j=" +spot.j + "]").html(COMPUTER_TOKEN);

		}

		gameState = isGameOver();
		if(gameState){
			alert('game over:' + gameState)
		}
	});

	$("#restart").click(function(){

	for(let i=0; i<3; i++){
		for(let j=0; j<3; j++){
			grid[i][j] = " ";
			$(".col[data-i=" + i + "][data-j=" +j + "]").html(" ");

		}
	}
	});
});