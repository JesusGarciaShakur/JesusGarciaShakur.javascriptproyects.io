export function createPagination() {
    let buttons = '';
    for (let i = 1; i <= 42; i++) {
        buttons += `
            <li class="page-link href="#" data-id=${i}>
            ${i}
            </a>
        </li>`
    }
    return buttons;
}

export function createCard(personaje) {
    const card = document.createElement('div');
    card.classList.add('card', 'mb-3');
    card.style.width = '18rem';
    let contentCard = `  
    <img src="${personaje.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${personaje.name}</h5>
      <p class="card-text">${personaje.status}</p>
      <p class="card-text">${personaje.gender}</p>
      <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${personaje.id}">Ver más</a>
    </div>`
    card.innerHTML = contentCard;
    return card;
}