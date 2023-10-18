const uri = 'http://localhost:3000/cliente'
const cadastro = document.querySelector('#cadastro')

cadastro.addEventListener('submit', e => {
    e.preventDefault();

    const body = {
        "nome": cadastro.nome.value,
        "endereco": cadastro.endereco.value,
        "telefone": cadastro.telefone.value,
        "email": cadastro.email.value,
        "senha": cadastro.senha.value,
        "placa": cadastro.placa.value,
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };

    options.body = JSON.stringify(body)

    fetch(uri + '/criar', options)
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 201) window.location.reload()
            else alert('Erro ao enviar dados')
        })
    })