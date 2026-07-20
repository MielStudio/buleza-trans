document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const mainSection = document.querySelector(".main-section");
    let lastScrollY = window.scrollY;
    let isHeaderFixed = false;
    let originalHeaderPosition = header.offsetTop; // Зберігаємо початкове положення хедера

    window.addEventListener("scroll", () => {
        // Перевіряємо, чи хедер повністю зник із виду
        if (window.scrollY > originalHeaderPosition + header.offsetHeight) {
            if (!isHeaderFixed) {
                header.classList.add("hidden"); // Спершу приховуємо хедер з анімацією
                setTimeout(() => {
                    header.classList.add("fixed"); // Потім закріплюємо через затримку
                    header.classList.remove("hidden"); // Показуємо знову
                    isHeaderFixed = true;
                    mainSection.classList.add("fixed-section");
                }, 200); // Налаштуйте затримку для плавнішого переходу
            }
        } else if (window.scrollY <= 0) {
            // Відкріплюємо хедер при поверненні на верх сторінки
            header.classList.remove("fixed");
            header.classList.remove("hidden");
            mainSection.classList.remove("fixed-section");
            isHeaderFixed = false;
        } else if (window.scrollY < lastScrollY && isHeaderFixed) {
            // Якщо користувач скролить вгору, хедер залишається закріпленим
            header.classList.remove("hidden");
        }

        // Оновлюємо позицію скролінгу для наступного циклу
        lastScrollY = window.scrollY;
    });
});