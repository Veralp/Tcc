const uri = 'http://localhost:3000/cliente'
function login() {
    const userName = document.querySelector('#user')
    const password = document.querySelector('#password');

    const body = {
        "email": userName.value,
        "senha": password.value,
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };

    options.body = JSON.stringify(body)

    fetch(uri + '/login', options)
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp)
            if (resp == `Acesso concedido`) {
                localStorage.setItem(
                    `usuario`,
                    userName.value,   
                )
            }
        })
}

const button = document.querySelector("#botaoLogin")
button.addEventListener('click', e => {
login()

})
