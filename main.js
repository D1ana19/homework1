if (confirm("Вам есть 15 лет?")) {  
    let userName = prompt("Введите ваше имя:");
    if (userName) {
        alert("Добро пожаловать, " + userName + "!");
    } else {
        alert("Вы не ввели имя!");
    }
    
} else {
    alert("Вход запрещен");
}
