window.onload = function() {
    // Recupera o array de dados armazenados no localStorage
    var dados = JSON.parse(localStorage.getItem("dados"));

    // Verifica se existem dados válidos
    if (dados && dados.length > 0) {
        var lista = document.getElementById("Lista_dados");

        // Para cada objeto válido no array, cria uma nova linha
        dados.forEach(function(agendamento, index) {
            // Ignora entradas inválidas ou incompletas
            if (!agendamento.nome || !agendamento.sobrenome) {
                return;
            }

            var linha = document.createElement("tr");

            // Cria colunas para cada campo
            linha.innerHTML = `
                <td>${index + 1}</td>
                <td>${agendamento.nome}</td>
                <td>${agendamento.sobrenome}</td>
                <td>${agendamento.telefone}</td>
                <td>${agendamento.marca_do_veiculo}</td>
                <td>${agendamento.modelo_do_veiculo}</td>
                <td>${agendamento.ano_do_veiculo}</td>
                <td>${agendamento.obs_extra}</td>
            `;

            lista.appendChild(linha);
        });
    } else {
        // Se não houver dados, exibe uma mensagem
        var tabela = document.getElementById("tabela");
        tabela.innerHTML = "<tr><td colspan='3'>Nenhum dado encontrado.</td></tr>";
    }
};

function apagarDados() {
    localStorage.removeItem("dados");
    alert("Todos os dados foram apagados!");
    // Atualize a página para refletir a remoção
    window.location.reload();
}

