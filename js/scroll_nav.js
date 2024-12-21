  window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        const sticky = 95; // Позиция, при которой navbar должен стать фиксированным

        if (window.pageYOffset > sticky) {
            navbar.classList.add('fixed-top');
            document.body.style.paddingTop = '56px'; // Устанавливаем отступ для body
        } else {
            navbar.classList.remove('fixed-top');
            document.body.style.paddingTop = '0px'; // Возвращаем отступ для body
        }
    });