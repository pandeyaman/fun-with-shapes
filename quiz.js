const formElement = document.forms[0];
const btnSubmit = document.querySelector(".btn-quiz-submit");
const questionCard = document.querySelectorAll(".div-question-card");
const labelChangeColor = document.querySelectorAll(".div-question-card label");
const spanScore = document.querySelector(".span-quiz-score");

const correctanswers = [
    "tetragon",
    "circumcenter",
    "tetradecagon",
    "ray",
    "yes"
];

console.log("chal raha hai ");

const calculateScore = (e) =>{
    e.preventDefault();
    let index = 0;
    let label_index = 0,score = 0;
    const selectedAnswers = new FormData(formElement);
    for(let value of selectedAnswers){
        let k=5;
        if(value[1] == correctanswers[index]){
            questionCard[index].style.border = "6px solid #78e08f";
            while(k > 0){
                labelChangeColor[label_index++].style.color = "#78e08f";
                k--;
            }
            score++;
        }
        else{
            questionCard[index].style.border = "6px solid #eb2f06";
            while(k > 0){
                labelChangeColor[label_index++].style.color = "#eb2f06";
                k--;
            }
        }
        index++;
    }
    spanScore.textContent = `SCORE: ${score}/5`;
    btnSubmit.disabled = true;

}

formElement.addEventListener('submit',()=>{
    calculateScore(event)
});