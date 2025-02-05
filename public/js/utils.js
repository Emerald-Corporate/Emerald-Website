document.querySelectorAll("select").forEach((select) => {
  select.addEventListener("change", function () {
    if (this.value) {
      this.classList.add("select-active");
    } else {
      this.classList.remove("select-active");
    }
  });
});
