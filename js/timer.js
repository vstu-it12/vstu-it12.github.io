function fulltime() {
    var time = new Date();
    var newYear = new Date("jan,01,2025,00:00:00");
    var totalRemains = (newYear.getTime() - time.getTime());
     
    if (totalRemains > 1) {
        var RemainsSec = (parseInt(totalRemains / 1000));
        var RemainsFullDays = (parseInt(RemainsSec / (24 * 60 * 60)));
        var secInLastDay = RemainsSec - RemainsFullDays * 24 * 3600;
        var RemainsFullHours = (parseInt(secInLastDay / 3600));
        if (RemainsFullHours < 10) { RemainsFullHours = "0" + RemainsFullHours; }
        var secInLastHour = secInLastDay - RemainsFullHours * 3600;
        var RemainsMinutes = (parseInt(secInLastHour / 60));
        if (RemainsMinutes < 10) { RemainsMinutes = "0" + RemainsMinutes; }
        var lastSec = secInLastHour - RemainsMinutes * 60;
        if (lastSec < 10) { lastSec = "0" + lastSec; }
     
        document.getElementById("RemainsFullDays").innerHTML = RemainsFullDays + "<span id='Rem'> дн</span>";
        document.getElementById("RemainsFullHours").innerHTML = RemainsFullHours + "<span id='Rem'> час</span>";
        document.getElementById("RemainsMinutes").innerHTML = RemainsMinutes + "<span id='Rem'> мин</span>";
        document.getElementById("lastSec").innerHTML = lastSec + "<span id='Rem'> сек</span>";
        setTimeout(fulltime, 500); // Обновляем каждую секунду
    } else {
        document.getElementById("clock").innerHTML = "C НОВЫМ ГОДОМ !!!";
    }
}

// Функция для отображения текста "До нового года осталось"
function showCountdownText() {
    document.getElementById("countdownText").innerHTML = "До нового года осталось:";
}

// Задержка на 1 секунду перед запуском функции showCountdownText и fulltime
window.onload = function() {
    setTimeout(showCountdownText, 400); // Показываем текст через 1 секунду
    setTimeout(fulltime, 400); // Запускаем таймер через 1 секунду
};