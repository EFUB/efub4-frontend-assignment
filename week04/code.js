const btns = document.getElementById("btns");
const start = document.getElementById("start");
const reset = document.getElementById("reset");

const human = document.getElementById("Hchoice");
const com = document.getElementById("Cchoice");

const score = document.getElementById("score");
const result = document.getElementById("result");

const elements = ["✌", "✊", "✋"];

let myChoice = null;
let Cchoice = null;

let myScore = 0;
let comScore = 0;

const clickStart = () => {
  document.querySelectorAll("#btns button").forEach((btn) => {
    btn.removeAttribute("disabled");
  });
  myChoice = null;
  Cchoice = Math.floor(Math.random() * 3);

  let std = 0;
  const timer = setInterval(() => {
    com.innerText = elements[std % 3];
    std++;

    if (std > 10) {
      clearInterval(timer);
      com.innerText = elements[Cchoice];
      game(myChoice, Cchoice);
      disableBtn();
    }
  }, 300);
};

const setMyChoice = (choice) => {
  myChoice = choice;
  human.innerText = elements[myChoice];
};

const game = (myChoice, Cchoice) => {
  console.log("판정 시작!");
  console.log(myChoice + "/" + Cchoice);
  if (myChoice === null) {
    //패
    human.innerText = "👎";
    result.innerText = "👎시간 초과로 패배👎";
    comScore++;
  } else if (myChoice === Cchoice) {
    //무
    result.innerText = "무승부!";
  } else if ((myChoice + 1) % 3 === Cchoice) {
    //패
    result.innerText = "패배😭";
    comScore++;
  } else if ((myChoice + 2) % 3 === Cchoice) {
    //승
    result.innerText = "🤩승리🤩";
    myScore++;
  } else {
    //오류
    result.innerText = "오류 발생!!";
  }
  score.innerHTML = myScore + " : " + comScore;
};

const resetAll = () => {
  console.log("초기화");
  myScore = 0;
  comScore = 0;
  score.innerHTML = myScore + " : " + comScore;
  result.innerText = "도전을 누르고 3초 안에 선택하자!";
};

const disableBtn = () => {
  document.querySelectorAll("#btns button").forEach((btn) => {
    btn.setAttribute("disabled", "disabled");
  });
};
