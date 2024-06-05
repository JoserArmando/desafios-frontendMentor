// Seleciona todos os elementos com a classe .subTitulo__titulo
const subTituloTituloElements = document.querySelectorAll('.subTitulo__titulo');
// Transforma a NodeList em um array
const subTituloTituloArray = Array.from(subTituloTituloElements);

// Seleciona todos os elementos <p>
const pElements = document.querySelectorAll('.box__subTitulo > p');
// Transforma a NodeList em um array
const pArray = Array.from(pElements);

//selecionando todas as imagens
const imgElements = document.querySelectorAll('.subTitulo__titulo > img');
//Transforma a NodeList em um array
const imgArray = Array.from(imgElements);

// Adicionando o evento click
for(let i = 0; i < subTituloTituloArray.length; i++){
    subTituloTituloArray[i].addEventListener("click", function(event) {
        clicar(event, i); // Passa o evento e o índice como argumentos
    });
}

function clicar(valor1, valor2){ 
        if(pArray[valor2].style.display === "none"){
            pArray[valor2].style.display = "block"
            
            imgArray[valor2].src = "assets/images/icon-minus.svg"
        }else{
            pArray[valor2].style.display = "none"

            imgArray[valor2].src = "assets/images/icon-plus.svg"
        }
    }


