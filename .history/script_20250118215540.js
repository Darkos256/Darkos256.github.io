const urlSearchParams = new URLSearchParams(window.location.search);
const messageCustom = urlSearchParams.get("message");

if (messageCustom) {
  const mainMessageElement = document.querySelector("#mainMessage");
  mainMessageElement.textContent = decodeURI(messageCustom);
}

// Seleccionar elementos
const btnOpenElement = document.querySelector("#open");
const btnCloseElement = document.querySelector("#close");
const coverElement = document.querySelector(".cover");
const paperElement = document.querySelector(".paper");
const heartElement = document.querySelector(".heart");

btnCloseElement.disabled = true;

btnOpenElement.addEventListener("click", () => {
  btnOpenElement.disabled = true;
  btnCloseElement.disabled = false;

  coverElement.classList.add("open-cover");

  setTimeout(() => {
    coverElement.style.zIndex = -1;
    paperElement.style.display = "block"; // Mostrar el mensaje
    paperElement.classList.remove("close-paper");
    paperElement.classList.add("open-paper");

    // Animación del corazón
    heartElement.style.display = "block";
  }, 500);
});

btnCloseElement.addEventListener("click", () => {
  btnOpenElement.disabled = false;
  btnCloseElement.disabled = true;

  paperElement.classList.remove("open-paper");
  paperElement.classList.add("close-paper");

  setTimeout(() => {
    coverElement.style.zIndex = 0;
    coverElement.classList.remove("open-cover");

    paperElement.style.display = "none"; // Ocultar el mensaje
    heartElement.style.display = "none"; // Ocultar el corazón
  }, 500);
});
