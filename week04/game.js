//변수 할당
const curWin = document.getElementById("win");
const curDraw = document.getElementById("draw");
const curLose = document.getElementById("lose");

let msg = document.getElementById("text");

winScore = parseInt(curWin.innerText);
drawScore = parseInt(curDraw.innerText);
loseScore = parseInt(curLose.innerText);

const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");
const reset = document.getElementById("reset");

//컴퓨터의 선택 고르기
function getComChoice() {
  const choiceArray = ["r", "s", "p"];
  const comChoice = Math.floor(Math.random() * 3);
  return choiceArray[comChoice];
}

function compareChoice() {}
//승리
function win() {
  console.log("승리");
  winScore += 1;
  curWin.innerText = winScore;
  setTimeout(() => {
    msg.innerText = "퍼비가 이겼다! 아싸!";
    setTimeout(() => {
      msg.innerText =
        "이제 무엇을 할까? \n전적: " +
        winScore +
        "승 " +
        drawScore +
        "무 " +
        loseScore +
        "패";
    }, 2500);
  }, 2500);
}
//무승부
function draw() {
  console.log("무승부");
  drawScore += 1;
  curDraw.innerText = drawScore;
  setTimeout(() => {
    msg.innerText = "둘이 똑같은 것을 냈군!";
    setTimeout(() => {
      msg.innerText =
        "이제 무엇을 할까? \n전적: " +
        winScore +
        "승 " +
        drawScore +
        "무 " +
        loseScore +
        "패";
    }, 2500);
  }, 2500);
}
//패배
function lose() {
  console.log("패배");
  loseScore += 1;
  curLose.innerText = loseScore;
  setTimeout(() => {
    msg.innerText = "이런.. 컴퓨터가 이겨버렸다!";
    setTimeout(() => {
      msg.innerText =
        "이제 무엇을 할까? \n전적: " +
        winScore +
        "승 " +
        drawScore +
        "무 " +
        loseScore +
        "패";
    }, 2500);
  }, 2500);
}
//리셋
reset.onclick = () => {
  msg.innerText = "에잇! 다시 시작하자.";
  curWin.innerText = 0;
  curDraw.innerText = 0;
  curLose.innerText = 0;

  winScore = 0;
  drawScore = 0;
  loseScore = 0;

  setTimeout(() => {
    msg.innerText =
      "이제 무엇을 할까? \n전적: " +
      winScore +
      "승 " +
      drawScore +
      "무 " +
      loseScore +
      "패";
  }, 1500);
};
rock.onclick = () => {
  const infomsg = document.getElementById("msg");
  msg.innerText = "퍼비는 바위를 냈다!";
  const comChoice = getComChoice();

  switch (comChoice) {
    case "r":
      setTimeout(() => {
        msg.innerText = "컴퓨터는 바위를 냈다!";
      }, 1000);
      draw();
      break;
    case "s":
      setTimeout(() => {
        msg.innerText = "컴퓨터는 가위를 냈다!";
      }, 1000);
      win();
      break;
    case "p":
      setTimeout(() => {
        msg.innerText = "컴퓨터는 보를 냈다!";
      }, 1000);
      lose();
      break;
  }
};

scissors.onclick = () => {
  const infomsg = document.getElementById("msg");
  msg.innerText = "퍼비는 가위를 냈다!";
  const comChoice = getComChoice();

  switch (comChoice) {
    case "r":
      setTimeout(() => {
        msg.innerText = "컴퓨터는 바위를 냈다!";
      }, 1000);
      lose();
      break;
    case "s":
      setTimeout(() => {
        msg.innerText = "컴퓨터는 가위를 냈다!";
      }, 1000);
      draw();
      break;
    case "p":
      setTimeout(() => {
        msg.innerText = "컴퓨터는 보를 냈다!";
      }, 1000);
      win();
      break;
  }
};

paper.onclick = () => {
  const infomsg = document.getElementById("msg");
  msg.innerText = "퍼비는 보를 냈다!";
  const comChoice = getComChoice();

  switch (comChoice) {
    case "r":
      setTimeout(() => {
        msg.innerText = "컴퓨터는 바위를 냈다!";
      }, 1000);
      win();
      break;
    case "s":
      setTimeout(() => {
        msg.innerText = "컴퓨터는 가위를 냈다!";
      }, 1000);
      lose();
      break;
    case "p":
      setTimeout(() => {
        msg.innerText = "컴퓨터는 보를 냈다!";
      }, 1000);
      draw();
      break;
  }
};

//버튼의 입력 구분
/*
function main() {
  rock.addEventListener("click", () => gameR());
  scissors.addEventListener("click", () => gameS());
  paper.addEventListener("click", () => gameP());
  reset.addEventListener("click", () => setReset());
}

main();*/
