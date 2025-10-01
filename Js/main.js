// Modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

// Abrir modal ao clicar em qualquer imagem do grid
document.querySelectorAll(".project-item img").forEach(img => {
  img.addEventListener("click", function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  });
});

// Fechar modal no X
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Fechar clicando fora da imagem
modal.onclick = function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}
