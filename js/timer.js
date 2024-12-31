   const fireworksLaunchDate = new Date("2025-01-01T00:00:00");

    function fulltime() {
        var time = new Date();
        var totalRemains = (fireworksLaunchDate.getTime() - time.getTime());
        
        if (totalRemains > 0) {
            var RemainsSec = Math.floor(totalRemains / 1000);
            var RemainsFullDays = Math.floor(RemainsSec / (24 * 60 * 60));
            var secInLastDay = RemainsSec - RemainsFullDays * 24 * 3600;
            var RemainsFullHours = Math.floor(secInLastDay / 3600);
            if (RemainsFullHours < 10) { RemainsFullHours = "0" + RemainsFullHours; }
            var secInLastHour = secInLastDay - RemainsFullHours * 3600;
            var RemainsMinutes = Math.floor(secInLastHour / 60);
            if (RemainsMinutes < 10) { RemainsMinutes = "0" + RemainsMinutes; }
            var lastSec = secInLastHour - RemainsMinutes * 60;
            if (lastSec < 10) { lastSec = "0" + lastSec; }
        
            document.getElementById("RemainsFullDays").innerHTML = RemainsFullDays + "<span id='Rem'> дн</span>";
            document.getElementById("RemainsFullHours").innerHTML = RemainsFullHours + "<span id='Rem'> час</span>";
            document.getElementById("RemainsMinutes").innerHTML = RemainsMinutes + "<span id='Rem'> мин</span>";
            document.getElementById("lastSec").innerHTML = lastSec + "<span id='Rem'> сек</span>";
        
            setTimeout(fulltime, 500);
        } else {
            document.getElementById("clock").innerHTML = "C НОВЫМ ГОДОМ !!!";
            startFireworks(); // Запускаем фейерверк
        }
    }

    // Функция для запуска фейерверка
    function startFireworks() {
        const container = document.querySelector('.fireworks');
        const fireworks = new Fireworks.default(container); // Используем ваш контейнер
        fireworks.start();
    }

    // Функция для отображения текста "До нового года осталось"
    function showCountdownText() {
        document.getElementById("countdownText").innerHTML = "До нового года осталось:";
    }

    // Задержка перед запуском функции showCountdownText и fulltime
    window.onload = function() {
        setTimeout(showCountdownText, 300); // Показываем текст
        setTimeout(fulltime, 300); // Запускаем таймер
    };