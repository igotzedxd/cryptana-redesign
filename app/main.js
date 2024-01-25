const slides = ["../img/hero.jpg", "../img/hero2.jpg", "../img/hero3.jpg"];

function changeSlides() {
  let i = 1;
  setInterval(() => {
    let header = document.querySelector(".slides");
    header.style.backgroundImage = `url(${slides[i]})`;
    i++;
    if (i === slides.length) {
      i = 0;
    }
  }, 7000);
}

changeSlides();

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let form = document.querySelector(".form");
  let success = document.querySelector(".success");
  form.style.display = "none";
  success.innerHTML = `<h1>Tak ${name} (${email}) for at udfylde vores form</h1>`;
});
