let month = prompt("Введите месяц (номер от 1 до 12):")

switch (month) {
    case '1':
    case '2':
    case '12':
        console.log("Зима")
        break
    case '3':
    case '4':
    case '5':
        console.log("Весна")
        break
    case '6':
    case '7':
    case '8':
        console.log("Лето")
        break
    case '9':
    case '10':
    case '11':
        console.log("Осень")
        break
    default:
        console.log("Вы ввели некорректный номер месяца")
        break
}


var arr = [2]
var number = arr[0]
console.log(number)



var value1 = prompt("Введите первое число:")
var value2 = prompt("Введите второе число:")
var operator = prompt("(+, -, *, /):")

var num1 = +value1
var num2 = +value2

var result
switch (operator) {
    case '+':
        result = num1 + num2
        break
    case '-':
        result = num1 - num2
        break
    case '*':
        result = num1 * num2
        break
    case '/':
        if (num2 !== 0) {
            result = num1 / num2
        } else {
            result = "Деление на ноль невозможно"
        }
        break
    default:
        result = "Некорректный оператор"
        break
}

console.log(`Результат: ${result}`)


