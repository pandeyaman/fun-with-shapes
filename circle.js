const inputRadius = document.getElementById("input-radius");
const btnCalculate = document.querySelector(".btn-calculate");
const remark = document.querySelector(".span-remark");

const calculate = (radius) =>{
    let area = radius * radius * Math.PI;
    let br = document.createElement("br");
    let perimeter = 2*Math.PI*radius;
    remark.textContent = "Area: "+Math.round(area*100)/100 +" Perimeter: "+ Math.round(perimeter*100)/100 ;
}

btnCalculate.addEventListener('click',()=>{
    calculate(Number(inputRadius.value));
});