var numero = document.querySelector(".mensagem")
var avaliacao = localStorage.getItem("avaliacao");
numero.innerText = `You selected ${avaliacao} out of 5`