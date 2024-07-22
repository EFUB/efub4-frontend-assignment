const buttons=document.querySelectorAll('button');
const rock=document.querySelectorAll('rock');
const computerChoice=document.querySelector('.computerChoice');
const userChoice=document.querySelector('.yourChoice');
const winner=document.querySelector('.result');
const score=document.querySelector('.score');
const reset=document.getElementById("reset");
let comScore=0;
let userScore=0;

const result=['가위','바위','보'];
const show=(user,computer,result)=>{
    if(computer=="가위")
        computer="✂️";
    else if(computer=="바위")
        computer="🪨";
    else
        computer="✋";
    if(user=="가위")
        user="✂️";
    else if(user=="바위")
        user="🪨";
    else
        user="✋";
    computerChoice.innerText=computer;
    userChoice.innerText=user;
    winner.innerText=result;
}
const game=(user,computer)=>{
    let message;
    if(user===computer){
        message='비겼습니다!';
    }
    else if(user==="가위"){
        if(computer=="바위"){
            comScore+=1;
            message="졌습니다!"
        }else if(computer==="보"){
            userScore+=1;
            message="이겼습니다!";
        }
    }
    else if(user==="바위"){
        if(computer==="보"){
            comScore+=1;
            message="졌습니다!"
        }else if(computer==="가위"){
            userScore+=1;
            message="이겼습니다!";
        }
    }
    else if(user==="보"){
       if(computer==="가위"){
            comScore+=1;
            message="졌습니다!"
        }else if(computer==="바위"){
            userScore+=1;
            message="이겼습니다!";
        }
    }
    show(user,computer,message);
    score.innerText=userScore+"   :   "+comScore;

};
const play=(event)=>{
    const user=event.target.innerText;
    const randomIndex=Math.floor(Math.random()*3);
    const computer=result[randomIndex];
    game(user,computer);
}
buttons.forEach((button)=>{
    button.addEventListener('click',play);
});
reset.onClick=()=>{
    comScore=0;
    userScore=0;
    score.innerText=userScore+"   :   "+comScore;
    result.innerText="시작하려면 가위, 바위, 보 중 하나를 선택하세요"
}
