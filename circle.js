const inputRadius = document.getElementById("input-radius");
const btnCalculate = document.querySelector(".btn-circle-calculate");
const remarkArea = document.querySelector(".span-remark-area");
const remarkCircumference = document.querySelector(".span-remark-circumference");

const calculate = (radius) =>{
    if(radius == 0){
        remarkArea.textContent = "Please enter value of the radius";
    }
    else{
        let area = radius * radius * Math.PI;
        let perimeter = 2*Math.PI*radius;
        remarkArea.textContent = "Area: "+Math.round(area*100)/100;
        remarkCircumference.textContent = "Perimeter: "+ Math.round(perimeter*100)/100;
    }
        
    
}

btnCalculate.addEventListener('click',()=>{
    calculate(Number(inputRadius.value));
});