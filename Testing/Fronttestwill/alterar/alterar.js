const uriCliente = 'http://localhost:3000/cliente';
const uriAutomovel = 'http://localhost:3000/automovel';
const alterarCadastro = document.getElementById("alterar");



    alterar.addEventListener("submit", function (e) {
        e.preventDefault();

        const alterarClienteAutomovel = {
            nome: cadastro.nome.value,
            endereco: cadastro.endereco.value,
            telefone: cadastro.telefone.value,
            email: cadastro.email.value,
            senha: cadastro.senha.value,
            modelo: cadastro.modelo.value,
            placa: cadastro.placa.value,
            marca: cadastro.marca.value,
        };

        const optionsalterarClienteAutomovel= {
            method: 'UPDATE',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(optionsalterarClienteAutomovel)
        };
        
        fetch(uriCliente + '/alterar/:id', optionsalterarClienteAutomovel)
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 201) {
                console.log(resp)
            } else {
                alert('Erro ao enviar dados do cliente');
            }
        });

});







