//1

function getDay (dayNumber) //Создаём функцию
{
    switch (dayNumber) //Создаём блоки в которых к каждому значению передаём свой день недели и через switch заменяем несколько if в один switch.
    {
        case 1 :
            return "понедельник";
        case 2 :
            return "вторник" 
        case 3 :
            return "среда"
        case 4 :
            return "четверг"
        case 5 :
            return "пятница"
        case 6 :
            return "суббота"
        case 7 :
            return "воскресенье"
        default:
            return "неверный номер дня недели"
    } 
}
const dayNumber = 3; //Создаём переменную которой будем передавать день
const dayWeek = getDay(dayNumber); //Создаём переменную которая будет получать день недели
console.log(dayWeek); //Выводим день недели в консоль

//2

function getCard(cardNumber) { //Создаём функцию
    switch (cardNumber) { //Создаём блоки в которых к каждому значению передаём свой день недели и через switch заменяем несколько if в один switch.
        case 1:
            return "пики";
        case 2:
            return "трефы";
        case 3:
            return "бубны";
        case 4:
            return "черви";
        default:
            return "неверный номер масти";
    }
}

const cardNumber = 4; //Создаём переменную в которую будем передавать номер масти
const Namecard = getCard(cardNumber); //Создаём переменную в которую будет передаваться название масти
console.log(Namecard); //Выводим название масти в консоль

//3

function getCardName(cardNumber, rank) { // Создаём функцию
    const suitName = getCard(cardNumber); // Создаём константную переменную которая хранит в себе функцию по получению номера карты
    let rankName = ""; // Создаём строчную переменную

    if (rank >= 6 && rank <= 10) { // Создаём промежуток выбора
        rankName = rank.toString(); 
    } else {
        switch (rank) { //Создаём блоки в которых к каждому значению передаём свою масть и через switch заменяем несколько if в один switch.
            case 11:
                rankName = "Валет";
            case 12:
                rankName = "Дама";
                break;
            case 13:
                rankName = "Король";
                break;
            case 14:
                rankName = "Туз";
                break;
            default:
                rankName = "неверный номер достоинства карты";
                break;
        }
    }

    return `${rankName} ${suitName}`; // Возвращаем достоинство и масть карт
}

const cardNum = 4; //Создаём константную переменную 
const cardRank = 6; //Создаём константную переменную 
const cardName = getCardName(cardNum, cardRank); //Получаем название карты с мастью
console.log(cardName); // Выводим карту и масть в консоль