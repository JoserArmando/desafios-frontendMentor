var buttom = document.querySelector(".box-email__img");
buttom.addEventListener("click", enviarFormulario);

function enviarFormulario(){
    var emailInput = document.querySelector(".box_email__input").value;
    let text = document.querySelector(".text-alert");
    let alert = document.querySelector(".box-email__alert");
    
        if (emailInput === "" || emailInput === null) {
            text.style.display = "inline";
            text.innerHTML = "Please provide o volid email";
            alert.style.display = "block";
        } else {
            if (validarEmail(emailInput)) {
            text.innerHTML = "ok"
            alert.style.display = "none";
            }else{
                text.style.display = "inline";
                text.innerHTML = "Please provide o volid email";
                alert.style.display = "block";
            }
        }
}

function validarEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
