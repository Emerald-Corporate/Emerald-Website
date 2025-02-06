// Modal
let modal = document.querySelector(".modal");
let titleModal = document.querySelector(".title");
let messageModal = document.querySelector(".message");

function showModal(message, error) {
  messageModal.innerHTML = message;
  
  if(error) {
    titleModal.innerHTML = "Erro";
    titleModal.style.background = "red";
  }

  modal.classList.add("active");

  setTimeout(() => {
    modal.classList.remove("active");
  }, 3000)
}

// Border Select
document.querySelectorAll("select").forEach((select) => {
  select.addEventListener("change", function () {
    if (this.value) {
      this.classList.add("select-active");
    } else {
      this.classList.remove("select-active");
    }
  });
});
