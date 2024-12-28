        // Функция для очистки всех куки
        function clearCookies() {
            const cookies = document.cookie.split("; ");

            for (const cookie of cookies) {
                const eqPos = cookie.indexOf("=");
                const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
            }
            console.log("Все куки очищены");
        }

        // Всегда очищать куки при загрузке страницы
        clearCookies();
