// ==== WISHLIST ==== //
const form = document.getElementById('wishlist-form');
const wishlist = document.getElementById('wishlist');

const STORAGE_KEY = 'wishlist-natal-goncalo';

// Lê a wishlist guardada no localStorage
function getSavedWishlist() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

// Guarda a wishlist no localStorage
function saveWishlist(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

// Cria um <li> para um item
function createWishlistItemElement(item) {
    const li = document.createElement('li');

    const textPart = document.createElement('span');
    textPart.innerHTML = item.link
        ? `<strong>${item.name}</strong> - <a href="${item.link}" target="_blank">Ver produto</a>`
        : `<strong>${item.name}</strong>`;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✖';
    deleteBtn.style.border = 'none';
    deleteBtn.style.background = 'transparent';
    deleteBtn.style.cursor = 'pointer';
    deleteBtn.style.marginLeft = '8px';

    deleteBtn.addEventListener('click', () => {
        removeItem(item.id);
    });

    li.appendChild(textPart);
    li.appendChild(deleteBtn);

    return li;
}

// Desenha a wishlist toda no <ul>
function renderWishlist() {
    wishlist.innerHTML = '';

    const items = getSavedWishlist();
    items.forEach(item => {
        const li = createWishlistItemElement(item);
        wishlist.appendChild(li);
    });
}

// Remove um item pelo id
function removeItem(id) {
    const updated = getSavedWishlist().filter(item => item.id !== id);
    saveWishlist(updated);
    renderWishlist();
}

// Quando se submete o formulário
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('item-name');
    const linkInput = document.getElementById('item-link');

    const name = nameInput.value.trim();
    const link = linkInput.value.trim();

    if (name === "") return;

    const items = getSavedWishlist();

    const newItem = {
        id: Date.now(),
        name,
        link
    };

    items.push(newItem);
    saveWishlist(items);
    renderWishlist();

    nameInput.value = '';
    linkInput.value = '';
});

// Carrega a wishlist quando a página abre
document.addEventListener('DOMContentLoaded', renderWishlist);


// ==== NEVE 🎄 ==== //
const snowContainer = document.getElementById('snow-container');

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';

    // posição horizontal aleatória
    snowflake.style.left = Math.random() * 100 + 'vw';

    // tamanho aleatório
    const size = Math.random() * 1.2 + 0.5;
    snowflake.style.fontSize = size + 'rem';

    // duração da queda (entre 5 e 10 segundos)
    const duration = Math.random() * 5 + 5;
    snowflake.style.animationDuration = duration + 's';

    snowContainer.appendChild(snowflake);

    // remover depois da animação
    setTimeout(() => {
        snowflake.remove();
    }, duration * 1000);
}

// Criar flocos a intervalos regulares
setInterval(createSnowflake, 200);
