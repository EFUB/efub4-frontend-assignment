const myScore = document.getElementById("myScore");
const computerScore = document.getElementById("computerScore");
const result = document.getElementById("result");

const playerImage = document.getElementById("playerImage");
const computerImage = document.getElementById("computerImage");

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resetBtn = document.getElementById("reset");

let humanHand = "";
let computerHand = "";

const judge = () => {
    if (humanHand === "바위") {
        if (computerHand === "가위") {
            myScore.innerText = parseInt(myScore.innerText) + 1;
            result.innerText = "Win!!";
        } else if (computerHand === "보") {
            computerScore.innerText = parseInt(computerScore.innerText) + 1;
            result.innerText = "Lose;(";
        } else {
            result.innerText = "Tie~";
        }
    } else if (humanHand === "보") {
        if (computerHand === "바위") {
            myScore.innerText = parseInt(myScore.innerText) + 1;
            result.innerText = "Win!!";
        } else if (computerHand === "가위") {
            computerScore.innerText = parseInt(computerScore.innerText) + 1;
            result.innerText = "Lose;(";
        } else {
            result.innerText = "Tie~";
        }
    } else if (humanHand === "가위") {
        if (computerHand === "보") {
            myScore.innerText = parseInt(myScore.innerText) + 1;
            result.innerText = "Win!!";
        } else if (computerHand === "바위") {
            computerScore.innerText = parseInt(computerScore.innerText) + 1;
            result.innerText = "Lose;(";
        } else {
            result.innerText = "Tie~";
        }
    }
};

const getCard = (humanHand) => {
	let hSrc, cSrc;
	if (humanHand === "바위")
		hSrc = "src/humanRock.png";
	else if (humanHand === "보")
		hSrc = "src/humanPaper.png";
	else 
		hSrc = "src/humanScissors.png";
	playerImage.src = hSrc;

	computerChoice();
    if (computerHand === "바위")
		cSrc = "src/computerRock.png";
	else if (computerHand === "보")
		cSrc = "src/computerPaper.png";
	else 
		cSrc = "src/computerScissors.png";
	computerImage.src = cSrc;

	judge();
};

const computerChoice = () => {
	const randomIdx = Math.floor(Math.random() * 3);
    //0: 바위, 1: 보, 2: 가위
    if (randomIdx === 0)
        computerHand = "바위";
    else if (randomIdx === 1)
        computerHand = "보";
    else
        computerHand = "가위";
	return computerHand;
};

rockBtn.addEventListener("click", () => {
	humanHand = "바위";
	getCard(humanHand);
});
paperBtn.addEventListener("click", () => {
	humanHand = "보";
	getCard(humanHand);
});
scissorsBtn.addEventListener("click", () => {
	humanHand = "가위";
	getCard(humanHand);
});

const resetAll = () => {
	myScore.innerText = "0";
	computerScore.innerText = "0";
	result.innerText = "vs";
	playerImage.src = "src/humanDefault.png";
	computerImage.src = "src/computerDefault.png";
};
resetBtn.addEventListener("click", resetAll);
resetAll();
