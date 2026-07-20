// Елементи
const openFormBtns = document.querySelectorAll('.openFormBtn');
const closeFormBtn = document.getElementById('closeFormBtn');
const formOverlay = document.getElementById('contactForm');

// Відкрити форму
openFormBtns.forEach(button => {
  button.addEventListener('click', () => {
    formOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Блокує прокрутку
  });
});

// Закрити форму
closeFormBtn.addEventListener('click', () => {
  formOverlay.style.display = 'none';
  document.body.style.overflow = 'auto'; // Відновлює прокрутку
});

// Елементи
const topicLabels = document.querySelectorAll('.topic-label');

topicLabels.forEach(label => {
  const input = label.querySelector('input');

  label.addEventListener('click', () => {
    // Скидаємо фон для всіх контейнерів
    topicLabels.forEach(l => {
      l.style.backgroundColor = 'transparent';
      l.style.color = '#232121';
    });

    // Змінюємо фон для вибраного контейнера
    label.style.backgroundColor = '#2768C9';
    label.style.color = '#ffffff';
  });
});