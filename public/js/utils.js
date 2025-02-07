// Modal
let modal = document.querySelector(".modal");
let titleModal = document.querySelector(".title");
let messageModal = document.querySelector(".message");

function showModal(message, error) {
  messageModal.innerHTML = message;
  titleModal.innerHTML = error ? "Erro!" : "Sucesso!";
  titleModal.style.background = error ? "red" : "#00ac4d";
  
  modal.classList.add("active");
  setTimeout(() => modal.classList.remove("active"), 3000);
}

// Border Select
document.querySelectorAll("select").forEach((select) => {
  select.addEventListener("change", () => {
    if (this.value) {
      this.classList.add("select-active");
    } else {
      this.classList.remove("select-active");
    }
  });
});
