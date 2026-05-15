const gifts = [
    {
        name: "Birkenstock BOSTON",
        link: "https://ericeirasurfskate.pt/pt/chinelos-birkenstock-boston-leoi-regular-tabacco-brown",
        taken: false
    },
    {
        name: "French Avenue - Liquid Burn Edicion Limitada",
        link: "https://www.druni.pt/liquid-brun-edicion-limitada-french-avenue-eau-de-parfum-para-homem",
        taken: false
    },
    {
        name: "Versace - Dylan Blue",
        link: "https://www.druni.pt/dylan-blue-versace-eau-toilette-homem",
        taken: false
    },
    {
        name: "Helio Strap",
        link: "https://www.amazon.es/-/pt/gp/product/B0F8HJCB47?smid=&psc=1",
        taken: false
    }
];

const giftList = document.getElementById("giftList");

gifts.forEach(gift => {
    const item = document.createElement("div");
    item.className = "gift-item";

    item.innerHTML = `
        <div class="gift-info">
            <div class="gift-title">${gift.name}</div>
            <div class="gift-link">
                <a href="${gift.link}" target="_blank">
                    Ver produto
                </a>
            </div>
        </div>

        <div class="status ${gift.taken ? "taken" : "available"}">
            ${gift.taken ? "Já oferecido" : "Disponível"}
        </div>
    `;

    giftList.appendChild(item);
});