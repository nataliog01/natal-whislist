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

    // Limpar inputs
    form.reset();
});
