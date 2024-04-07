// id로 HTML 태그 가져오기
const selectBox = document.getElementById("select-box");
const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");
const paperBtn = document.getElementById("paper");

const resultText = document.getElementById("result-text");
const playerStatus = document.getElementById("result-player");
const computerStatus = document.getElementById("result-computer");

const playerSelectedImg = document.getElementById("player-selected-img");
const computerSelectedImg = document.getElementById("computer-selected-img");
const resetBtn = document.getElementById("reset");

let playerSelectedText = "";
let computerSelectedText = "";
const bgImage = ["selected-scissors", "selected-rock", "selected-paper"];
const selectedText = ["가위", "주먹", "보"];

const updateStatus = () => {
	if (
		(playerSelectedText === selectedText[0] &&
			computerSelectedText === selectedText[2]) ||
		(playerSelectedText === selectedText[1] &&
			computerSelectedText === selectedText[0]) ||
		(playerSelectedText === selectedText[2] &&
			computerSelectedText === selectedText[1])
	) {
		playerStatus.innerText++;
		resultText.innerText = "이겼습니다!";
	} else if (
		(playerSelectedText === selectedText[0] &&
			computerSelectedText === selectedText[1]) ||
		(playerSelectedText === selectedText[1] &&
			computerSelectedText === selectedText[2]) ||
		(playerSelectedText === selectedText[2] &&
			computerSelectedText === selectedText[0])
	) {
		computerStatus.innerText++;
		resultText.innerText = "졌습니다!";
	} else {
		resultText.innerText = "비겼습니다!";
	}
};

selectBox.addEventListener("click", (e) => {
	// 초기화
	resultText.innerText = "";
	playerSelectedImg.style.background = "";
	playerSelectedText = "";
	computerSelectedImg.style.background = "";
	computerSelectedText = "";

	// 인간이 선택한 텍스트와 이미지 변경
	if (e.target === scissorsBtn) {
		playerSelectedText = selectedText[0];
		playerSelectedImg.className = bgImage[0];
	} else if (e.target === rockBtn) {
		playerSelectedText = selectedText[1];
		playerSelectedImg.className = bgImage[1];
	} else if (e.target === paperBtn) {
		playerSelectedText = selectedText[2];
		playerSelectedImg.className = bgImage[2];
	} else {
		return;
	}

	// 컴퓨터가 랜덤으로 선택 후 텍스트와 이미지 변경
	setTimeout(() => {
		const randomNum = Math.floor(Math.random() * 3);
		computerSelectedText = selectedText[randomNum];
		computerSelectedImg.className = bgImage[randomNum];
	}, 300);

	// 상태 업데이트
	setTimeout(() => {
		updateStatus();
	}, 500);
});

// 초기화
const resetStatus = () => {
	playerStatus.innerText = 0;
	computerStatus.innerText = 0;
	resultText.innerText = "시작하려면 가위, 바위, 보 중 하나를 선택하세요.";
	playerSelectedImg.style.background = "none";
	playerSelectedText = "";
	computerSelectedImg.style.background = "none";
	computerSelectedText = "";
	results = [];
};
resetBtn.addEventListener("click", resetStatus);
resetStatus();
