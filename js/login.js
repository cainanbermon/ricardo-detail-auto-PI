// Usuário e senha pré-definidos
var user = {
    usuario: "ricardo",
    senha: "2024"
};

var botaoLogin = document.getElementById("botao_login");

botaoLogin.addEventListener("click", (event) => {
    event.preventDefault(); // Impedir que o evento aconteça

    var usuarioDigitado = document.getElementById("usuario").value;
    var senhaDigitada = document.getElementById("senha").value;

    var mensagemVerificacao = document.getElementById("mensagem");

    if (usuarioDigitado == user.usuario && senhaDigitada == user.senha) {
        mensagemVerificacao.innerHTML = '<p class="text-success text-center">Login bem-sucedido!</p>';
        
        setTimeout(() => {
            window.location.href = "agenda.html";
        }, 1000);
    } 
    else {
        mensagemVerificacao.innerHTML = '<p class="text-danger text-center">Usuário ou senha incorretos!</p>';
    }
});