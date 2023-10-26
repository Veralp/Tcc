const card = document.querySelector('#container');

card.addEventListener('submit', e(e) => {
    e.preventDefault();


    const container = document.getElementById("container");
    const cardTemplate = document.querySelector(".card");
    const newCard = cardTemplate.cloneNode(true); // Clone o card

    // Modifique os textos do novo card
    const title = newCard.querySelector("h2");
    const description = newCard.querySelector("p");
    title.textContent = "Novo Título";
    description.textContent = "Nova descrição do card.";

    container.appendChild(newCard); // Adicione o novo card ao contêiner
})

// Event listener para o botão "Adicionar Card"
const addCardButton = document.getElementById("addCard");
addCardButton.addEventListener("click", addCard);
