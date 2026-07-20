(function() {
    /**
     * Універсальна функція для анімації елементів при їх перетині з вікном перегляду.
     * @param {string} selector - CSS-селектор елементів для спостереження.
     * @param {number} threshold - Поріг видимості (0-1).
     * @param {function} [callback] - Додатковий зворотний виклик, який виконується при спрацьовуванні.
     */
    function setupObserver(selector, threshold, callback) {
        const elements = document.querySelectorAll(selector);

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    if (callback) callback(entry.target); // Виклик додаткової функції, якщо задано
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: threshold
        });

        elements.forEach(element => observer.observe(element));
    }

    // Налаштування для різних елементів
    setupObserver('.truck-image', 0.5); // Для анімації зображення
    setupObserver('.services-container', 0.1); // Для анімації контейнерів
    setupObserver('.statistic', 0.1); // Для анімації тексту
})();