const cadastroButton = document.getElementById('cadastroButton');
cadastroButton.addEventListener('click', cadastrarCliente);
const showPasswordButton = document.getElementById("showPasswordButton");

showPasswordButton.addEventListener('click', function () {
    if (senhaInput.type === "password") {
        senhaInput.type = "text";
    } else {
        senhaInput.type = "password";
    }
});

function cadastrarCliente() {
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha'.value);
    const placa = document.getElementById('placa'.value);
    const novoCliente = {
        nome,
        endereco,
        telefone,
        email,
        senha,
        placa
    };

    console.log("Dados do novo cliente:", novoCliente); // Adicione este console.log para verificar os dados do cliente

    fetch('http://localhost:3000/cliente', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoCliente)
    })
    .then(response => {
        if (response.status === 201) {
            console.log('Cliente cadastrado com sucesso');
            // Faça algo aqui, como redirecionar o usuário ou exibir uma mensagem de sucesso
        } else {
            console.error('Erro ao cadastrar cliente');
            // Trate o erro, exiba uma mensagem de erro, etc.
        }
    })
    .catch(error => {
        console.error('Erro na solicitação:', error);
    });
}
