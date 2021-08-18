const angleOne = document.getElementById("triangle-angle-1");
const angleTwo = document.getElementById("triangle-angle-2");
const angleThree = document.getElementById("triangle-angle-3");
const btnSubmit = document.querySelector(".btn-submit");
const myForm = document.getElementById("myForm");
const remark = document.querySelector(".span-triangle-remark");

function typeOfTriangle(event){
    event.preventDefault();
    let angle1 = Number(angleOne.value);
    let angle2 = Number(angleTwo.value);
    let angle3 = Number(angleThree.value);

    if((angle1+angle2+angle3) != 180 ){
        remark.textContent = "The sum of the angles should be 180 exactly.";
    }
    else{
        if(angle1 == 60 && angle2 == 60 && angle3 == 60){
            remark.textContent = `All angles are equal, it's an EQUILATERAL Triangle !`;
        }
        else if(angle1 == 90 || angle2 == 90 || angle3 == 90 ){
            remark.textContent = `One angle is of 90 degree, it's a Right-Angled Triangle !`;
        }
        else if(angle1 > 90 || angle2 > 90 || angle3 > 90){
            remark.textContent = "One angle is more than 90 degree, it's an Obtuse Angled Triangle !";
        }
        else {
            remark.textContent = "It's an Acute Angled Triangle";
        }
    }
    
}

myForm.addEventListener('submit',()=>{
    typeOfTriangle(event);
});


