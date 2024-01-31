const cards = document.querySelector(".cards");

const cardInfo = [
  {
    class: "fa-solid fa-wallet",
    para: "Din personlige wallet",
    btn: "Din Wallet",
  },
  {
    class: "fa-solid fa-euro-sign",
    para: "Følg markedet på forskellige valuta",
    btn: "Køb valuta",
  },
  {
    class: "fa-brands fa-btc",
    para: "Investér i dagens højeste kurs",
    btn: "Køb crypto",
  },
  {
    class: "fa-solid fa-arrow-trend-up",
    para: "Følg kurserne på markedets coins",
    btn: "Se kurser",
  },
];

cardInfo.forEach((card) => {
  cards.innerHTML += `
        <div class="card">
        <i class="${card.class}"></i>
        <p>${card.para}</p>
        <a href="#">${card.btn}</a>
        </div>
    `;
});
