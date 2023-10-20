const uriCliente = 'http://localhost:3000/cliente';
const uriAutomovel = 'http://localhost:3000/automovel';
const cadastro = document.querySelector('#cadastro');

cadastro.addEventListener('submit', e => {
    e.preventDefault();

    const clienteData = {
        "nome": cadastro.nome.value,
        "endereco": cadastro.endereco.value,
        "telefone": cadastro.telefone.value,
        "email": cadastro.email.value,
        "senha": cadastro.senha.value,
    };

    const automovelData = {
        "modelo": cadastro.modelo.value,
        "placa": cadastro.placa.value,
        "marca": cadastro.marca.value
    };

    const optionsCliente = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(clienteData)
    };

    const optionsAutomovel = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(automovelData)
    };

    // Faz a solicitação POST para a tabela de cliente
    fetch(uriCliente + '/criar', optionsCliente)
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 201) {
                // Solicitação de cliente bem-sucedida, você pode fazer algo aqui, se necessário
            } else {
                alert('Erro ao enviar dados do cliente');
            }
        });

    // Faz a solicitação POST para a tabela de automóvel
    fetch(uriAutomovel + '/criar', optionsAutomovel)
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 201) {
                // Solicitação de automóvel bem-sucedida, você pode fazer algo aqui, se necessário
            } else {
                alert('Erro ao enviar dados do automóvel');
            }
        });
});
