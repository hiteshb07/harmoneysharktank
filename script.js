// Modal functionality for Contact Us
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("contactModal");
    const contactBtn = document.getElementById("contactBtn");
    const closeModal = document.getElementById("closeModal");
  
    contactBtn.addEventListener("click", () => {
      modal.style.display = "block";
    });
  
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  