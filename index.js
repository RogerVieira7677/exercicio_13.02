const form  = document.querySelector("#form");
const num1 = document.querySelector("#n1");
const num2 = document.querySelector("#n2");


form.addEventListener("submit", function(e){
    e.preventDefault();
    
     if(num1.value === "" || num2.value === "" ){
        alert("Por valor, insira um numero");
     }else if(num1.value < num2.value){
        alert("Válido");
     }else{
        alert("Inválido");
     }
})
