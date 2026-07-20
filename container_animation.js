(function() {
    const serviceContainers = document.querySelectorAll('.services-container'); // Вибір всіх контейнерів

    const serviceObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Додаємо клас для анімації
                observer.unobserve(entry.target); // Зупиняємо спостереження після анімації
            }
        });
    }, {
        threshold: 0.1 // Спрацьовує, коли 10% елемента видно
    });

    // Спостереження за контейнерами в порядку зворотньому (з останнього до першого)
    for (let i = serviceContainers.length - 1; i >= 0; i--) {
        serviceObserver.observe(serviceContainers[i]);
    }
})();