const button = document.querySelector("#addProject");
const modals = document.querySelectorAll(".modal");
const overlay = document.querySelectorAll(".modal__overlay");

//открывает модалку
function openModal(modal) {
  modal.classList.add("open");
}

//закрываем модалку
function closeModal(modal) {
  modal.classList.remove("open");
}

button.addEventListener("click", () => {
  modals.forEach((modal) => {
    openModal(modal);
    const closeButton = modal.querySelector(".modal__close");
    closeButton.addEventListener("click", () => {
      closeModal(modal);
    });
  });
});

overlay.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target === item) {
      closeModal(item.parentElement);
    }
  });
});
