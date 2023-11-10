const uriCliente = 'http://localhost:3000/cliente';
const uriAutomovel = 'http://localhost:3000/automovel';
const alterarCadastro = document.getElementById("alterar");



alterar.addEventListener("submit", function (e) {
    e.preventDefault();

    const alterarClienteAutomovel = {
        nome: alterarCadastro.nome.value,
        endereco: alterarCadastro.endereco.value,
        telefone: alterarCadastro.telefone.value,
        email: alterarCadastro.email.value,
        senha: alterarCadastro.senha.value,
        modelo: alterarCadastro.modelo.value,
        placa: alterarCadastro.placa.value,
        marca: alterarCadastro.marca.value,
    };

    const optionsAlterarClienteAutomovel = {
        method: 'PUT', // Mude 'UPDATE' para 'PUT'
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(alterarClienteAutomovel) // Use a variável correta
    };

    // Substitua ':id' pelo ID real do recurso
    fetch(uriCliente + 'cliente/', optionsAlterarClienteAutomovel) // Substitua '123' pelo ID real
        .then(resp => resp.status)
        .then(resp => {
            if (resp === 200) { // Verifica se foi uma atualização bem-sucedida (status 200)
                console.log(resp);
            } else {
                alert('Erro ao enviar dados do cliente');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao enviar dados do cliente');
        });
});
