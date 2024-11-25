function ano_carro() {
let ElementLi = document.querySelector('.optionkkk');
let concat = "";

// Gerar um array de anos entre 2024 e 1970
for (let i = 2024; i >= 1970; i--) {
    if (i === 2024) {
        concat += `<option selected class="text-black text-color">Selecione</option>`;
        concat += `<option class="text-black text-color" value="${i}">${i}</option>`;
    } else {
        concat += `<option class="text-black text-color" value="${i}">${i}</option>`;
    }
}
ElementLi.innerHTML = concat;
};

function armazenarDados() {
    // Pega os valores inseridos
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var telefone = document.getElementById("telefone").value;
    var marca_do_veiculo = document.getElementById("marca_do_veiculo").value;
    var modelo_do_veiculo = document.getElementById("modelo_do_veiculo").value;
    var ano_do_veiculo = document.getElementById("ano_do_veiculo").value;
    var obs_extra = document.getElementById("obs_extra").value;

    // Recupera o array de dados armazenados no localStorage (ou cria um novo se não existir)
    var dados = JSON.parse(localStorage.getItem("dados")) || [];

    // Adiciona um novo objeto representando o agendamento
    dados.push({
        nome: nome,
        sobrenome: sobrenome,
        telefone: telefone,
        marca_do_veiculo: marca_do_veiculo,
        modelo_do_veiculo: modelo_do_veiculo,
        ano_do_veiculo: ano_do_veiculo,
        obs_extra: obs_extra
    });

    // Salva o array atualizado no localStorage
    localStorage.setItem("dados", JSON.stringify(dados));

    // Limpa os campos de entrada para o próximo valor
    document.getElementById("nome").value = '';
    document.getElementById("sobrenome").value = '';
    document.getElementById("telefone").value = '';
    document.getElementById("marca_do_veiculo").value = '';
    document.getElementById("modelo_do_veiculo").value = '';
    document.getElementById("ano_do_veiculo").value = '';
    document.getElementById("obs_extra").value = '';


    // Redireciona para a página de lista
    window.location.href = "lista_agenda.html";
}

ano_carro()

