//Abrir y cerrar el modal
const modal = document.getElementById("myModal");
const openModal = document.getElementById("openModal");
const closeModal = document.querySelector(".close");

openModal.addEventListener("click", () => (modal.style.display = "flex"));
closeModal.addEventListener("click", () => (modal.style.display = "none"));

//Cerrar al hacer clic fuera del modal
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});