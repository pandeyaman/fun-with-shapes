const angle1 = document.getElementById("angle-1");
const angle2 = document.getElementById("angle-2");
const angle3 = document.getElementById("angle-3");
const angle4 = document.getElementById("angle-4");
const btnCheck = document.querySelector(".btn-check");
const remark = document.querySelector(".p-remark");


const checkQuadilateral = () =>{
   if(Number(angle1.value) + Number(angle2.value) + Number(angle3.value) + Number(angle4.value) == 360){
        remark.textContent = "Yes, the given angles form a Quadilateral !"
   }
   else{
       remark.textContent = "Oops ! They don't form a Quadilateral !"
   }
}


btnCheck.addEventListener('click',checkQuadilateral);

