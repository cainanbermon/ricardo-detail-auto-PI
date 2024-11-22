var celulaId = 1;

document.getElementById('formulario').addEventListener('button', function(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var telefone = document.getElementById('telefone').value;
    var marca_do_veiculo = document.getElementById('marca_do_veiculo').value;
    var modelo_do_veiculo = document.getElementById('modelo_do_veiculo').value;
    var ano_do_veiculo = document.getElementById('ano_do_veiculo').value;
    var obs_extra = document.getElementById('obs_extra').value;


    var tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];
    var novaLinha = tabela.insertRow();

    var celulaId = novaLinha.insertCell(0);
    var celulaNome = novaLinha.insertCell(1);
    var celulaSobrenome = novaLinha.insertCell(2);
    var celulaTelefone = novaLinha.insertCell(3);
    var celulaMarcadoveiculo = novaLinha.insertCell(4);
    var celulaModelodoveiculo = novaLinha.insertCell(5);
    var celulaAnodoveiculo = novaLinha.insertCell(6);
    var celulaObsextra = novaLinha.insertCell(7);


    celulaId.textContent = celulaId++;
    celulaNome.textContent = nome;
    celulaSobrenome.textContent = sobrenome;
    celulaTelefone.textContent = telefone;
    celulaMarcadoveiculo.textContent = marca_do_veiculo;
    celulaModelodoveiculo.textContent = modelo_do_veiculo;
    celulaAnodoveiculo.textContent = ano_do_veiculo;
    celulaObsextra.textContent = obs_extra;


    document.getElementById('nome').value = '';
    document.getElementById('sobrenome').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('marca_do_veiculo').value = '';
    document.getElementById('modelo_do_veiculo').value = '';
    document.getElementById('ano_do_veiculo').value = '';
    document.getElementById('obs_extra').value = '';

  });