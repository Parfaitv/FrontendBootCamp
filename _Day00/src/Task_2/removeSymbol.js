// Функция на вход принимает две строки - сообщение (обычная строка с текстом) и символ который надо удалить из этого сообщения.

function removeString(message, symbol) {
    for (const i of message) {
        message = message.replace(symbol, '')
    }
    return message
}

// console.log(removeString("Большое и интересное сообщение", "о")) // Бльше и интересне сбщение
console.log(removeString("Большое и интересное сообщение", "о"))   
 console.log(removeString("Hello world!", "z"))   
 console.log(removeString("А роза азора", "А"))


