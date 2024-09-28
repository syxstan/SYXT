document.getElementById('joinForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let patronymic = document.getElementById('patronymic').value;
    let age = document.getElementById('age').value;
    let country = document.getElementById('country').value;
    let city = document.getElementById('city').value;
    let address = document.getElementById('address').value;

    let messageBody = `Имя: ${firstName}\nФамилия: ${lastName}\nОтчество: ${patronymic}\nВозраст: ${age}\nСтрана: ${country}\nГород: ${city}\nАдрес: ${address}`;

    window.location.href = `mailto:syxstan@gmail.com?subject=Заявка на вступление&body=${encodeURIComponent(messageBody)}`;
});

// Удаляем intro animation после завершения
setTimeout(() => {
    document.querySelector('.intro-animation').style.display = 'none';
}, 2000);

// Добавляем плавное изменение фона при переходе между страницами
document.addEventListener('DOMContentLoaded', function() {
    let currentBackgroundColor = window.getComputedStyle(document.body).backgroundColor;

    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(event) {
            document.body.style.backgroundColor = "#000"; // Темный фон во время перехода
        });
    });
});