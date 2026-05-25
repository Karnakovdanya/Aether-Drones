let currentStep = 0;

function scrollSlider(direction) {
    const gallery = document.querySelector('.gallery');
    
    // Всего фоток 7, видим 3. Значит шагов вправо может быть максимум 4 (7 - 3 = 4).
    const maxSteps = 4; 

    // Меняем шаг
    currentStep += direction;

    // Проверяем границы
    if (currentStep < 0) currentStep = 0;
    if (currentStep > maxSteps) currentStep = maxSteps;

    // Двигаем ровно на 32% (ширина слайда + gap)
    // Мы используем проценты, так надежнее
    gallery.style.transform = `translateX(-${currentStep * 37}%)`;
}