var quizFormRef= document.querySelector(".form");

var outputRef=document.querySelector("#result");

 var correctAnswers=['90°','Right Angled','One','85°','60°']



quizFormRef.addEventListener("submit",e=>{
    e.preventDefault();
    const userAnswer=[quizFormRef.question1.value,quizFormRef.question2.value,quizFormRef.question3.value,quizFormRef.question4.value,quizFormRef.question5.value];
    let score=0;
    userAnswer.forEach((answer,index) => {
       
        if (answer===correctAnswers[index]){
            score+=1;
            
        }
          
    });
     outputRef.innerText=`Your Score is ${score}`;
})