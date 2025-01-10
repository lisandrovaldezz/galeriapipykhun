document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const closeBtn = document.querySelector(".close");
    const images = document.querySelectorAll(".galeria img");

    if (modal && modalImage && closeBtn && images.length > 0) {
        images.forEach((img) => {
            img.addEventListener("click", () => {
                modal.style.display = "flex";
                modalImage.src = img.src;
                document.body.classList.add("modal-open");
            });
        });

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
                document.body.classList.remove("modal-open");
            }
        });
    }
});