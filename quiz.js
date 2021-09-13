var quizFormRef= document.querySelector(".form");
var btnRef=document.querySelector("#submit");
var outputRef=document.querySelector("#result");

 var correctAnswers=['90°','Right Angled','One','85°']

function calculateScore(){
    var formData= new FormData(quizFormRef);
    var answerReceived=formData.values();
    var score=0;
    var index=0
    console.log(answerReceived)
    for (var answer of answerReceived){
        console.log(answer);
       if(answer===correctAnswers[index]){
           score=score+1;
       }
       index=index+1;
    }
    outputRef.innerText=`Your Score is ${score}`;
}


btnRef.addEventListener("click",calculateScore);