document.addEventListener("mousemove", function(event) {
    const mainSection = document.querySelector('.main-section');
    const backgroundImage = document.querySelector('.background-image');
    
    const x = event.clientX / window.innerWidth - 0.5; // Обчислюємо відносне положення курсора по X
    const y = event.clientY / window.innerHeight - 0.5; // Обчислюємо відносне положення курсора по Y
    
    // Паралакс ефект: зміщуємо фон по X і Y
    backgroundImage.style.transform = `translate(${x * 25}px, ${y * 25}px)`; 
});