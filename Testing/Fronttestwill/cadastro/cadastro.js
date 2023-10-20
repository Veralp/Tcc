const uri = 'http://localhost:3000/cliente'
const cadastro = document.querySelector('#cadastro')

cadastro.addEventListener('submit', e => {
    e.preventDefault();

    const clienteData = {
        "nome": cadastro.nome.value,
        "endereco": cadastro.endereco.value,
        "telefone": cadastro.telefone.value,
        "email": cadastro.email.value,
        "senha": cadastro.senha.value,
    }

    const automovelData = {
        "modelo": cadastro.modelo.value,
        "placa": cadastro.placa.value,
        "marca": cadastro.marca.value
    }

    const body = {
        "clienteData": clienteData,
        "automovelData": automovelData
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };

    fetch(uri + '/criar', options)
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 201) window.location.reload()
            else alert('Erro ao enviar dados')
        })
})
