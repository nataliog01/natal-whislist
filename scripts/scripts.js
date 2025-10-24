const form = document.getElementById('wishlist-form');
const wishlist = document.getElementById('wishlist');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('item-name').value.trim();
    const link = document.getElementById('item-link').value.trim();

    if (name === "") return;

    const li = document.createElement('li');
    li.innerHTML = link
        ? `<strong>${name}</strong> - <a href="${link}" target="_blank">Ver produto</a>`
        : `<strong>${name}</strong>`;

    wishlist.appendChild(li);

    form.reset();

});


// ❄️ Animação de neve
function createSnowflake() {
    const snowContainer = document.getElementById('snow-container');
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄'; // Podes trocar por "✦" ou "•" para variar

    // Posição e tamanho aleatórios
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.fontSize = (Math.random() * 15 + 10) + 'px';
    snowflake.style.animationDuration = (Math.random() * 5 + 5) + 's';
    snowflake.style.opacity = Math.random();

    snowContainer.appendChild(snowflake);

    // Remover floco após a queda
    setTimeout(() => {
        snowflake.remove();
    }, 10000);
}

// Criar flocos a intervalos regulares
setInterval(createSnowflake, 200);

//Função para guardar wishlist

