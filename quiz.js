var quizForm = document.querySelector('.quiz-form');
var submitBtn = document.querySelector("#submit-btn");
var output = document.querySelector("#output");

const correctAnswers = ["Centeroid","Concurrent","Circumcenter","Altitude","Incenter"];

function calculateScores(){
    let score=0;
    let index=0;
     const formResults = new FormData(quizForm);
     for(let value of formResults.values()){
        if(value===correctAnswers[index]){
            score=score+1;
        }
        index=index+1;
     }
     console.log(score);
}
submitBtn.addEventListener("click",calculateScores);