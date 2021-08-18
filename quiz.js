const formElement = document.forms[0];
const btnSubmit = document.querySelector(".btn-quiz-submit");
const questionCard = document.querySelectorAll(".div-question-card");


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
    let label_index = 0;
    const selectedAnswers = new FormData(formElement);
    for(let value of selectedAnswers){
        if(value[1] == correctanswers[index]){
            questionCard[index].style.border = "4px solid #78e08f";
        }
        else{
            questionCard[index].style.border = "4px solid #eb2f06";
        }
        index++;
    }
}

formElement.addEventListener('submit',()=>{
    calculateScore(event)
});