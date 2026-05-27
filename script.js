
document.addEventListener("DOMContentLoaded", () => {

    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".slide");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    if (!carousel || slides.length === 0) return;

    let index = 0;

    function update() {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    next.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        update();
    });

    prev.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        update();
    });

    // 自動スライド（必要なければ削除OK）
    setInterval(() => {
        index = (index + 1) % slides.length;
        update();
    }, 5000);

});