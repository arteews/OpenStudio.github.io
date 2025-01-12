function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const targetPosition = section.offsetTop; // Позиция секции
    const startPosition = window.scrollY;     // Текущее положение
    const distance = targetPosition - startPosition; // Расстояние до цели
    const duration = 800; // Длительность анимации в миллисекундах
    let startTime = null;

    function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const targetPosition = section.offsetTop; // Позиция секции
    const startPosition = window.scrollY;     // Текущее положение
    const distance = targetPosition - startPosition; // Расстояние до цели
    const duration = 800; // Длительность анимации в миллисекундах
    let startTime = null;

    function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}