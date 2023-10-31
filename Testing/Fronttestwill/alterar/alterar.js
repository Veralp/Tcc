document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("cadastro");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const endereco = document.getElementById("endereco").value;
        const telefone = document.getElementById("telefone").value;
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;
        const modelo = document.getElementById("modelo").value;
        const placa = document.getElementById("placa").value;
        const marca = document.getElementById("marca").value;

        // Validação simples (pode ser melhorada)
        if (nome && endereco && telefone && email && senha && modelo && placa && marca) {
            alert("Cadastro realizado com sucesso!");
            form.reset();
        } else {
            alert("Preencha todos os campos.");
        }
    });
});
