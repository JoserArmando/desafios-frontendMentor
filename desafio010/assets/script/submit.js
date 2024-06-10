// função das avalições
var number = document.querySelectorAll(".number");
const numberArray = Array.from(number);
var valor = 0;

for(let i = 0; i < numberArray.length; i++){
    numberArray[i].addEventListener("click", () => clicar(i))
}

function clicar(index){
    for(let i = 0; i < numberArray.length; i++){
        if(numberArray[i].style.backgroundColor == "white"){
            numberArray[i].style.backgroundColor = "#273139"
        }
        numberArray[index].style.backgroundColor = "white";

        valor = index + 1;
    }
}

// funções do submit
var submit = document.querySelector(".submit");
submit.addEventListener("click", submit(valor))

function submit(valor){
    var chave = false;
    for(let i = 0; i < numberArray.length; i++){
        if(numberArray[i].style.backgroundColor == "white"){
            chave = true;
        }
    if(chave == true){
        window.location.href =""
    }
    }
}