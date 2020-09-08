import setPrice from './setPrice/setPrice';
import {deadlineToHour, deadlineToStr} from './setDeadline/setDeadline'

//Получение активных эл-ов формы
let deadline = document.getElementsByClassName('deadline')[0];
let price = document.getElementsByClassName('price')[0];
let characters = document.getElementsByClassName('characters')[0];
let languages = document.getElementsByClassName('language_wrapper')[0];
let textarea = document.getElementsByClassName('text')[0];

//Начальное объявление главных переменных
//symbols - количество символов в тексте
//language - язык на котором написан текст
let symbols = 0;
let language = null;

//---------------------------------------------
//Функция вывода сформированных в виде строки даты окончания работ и цены услуг
//---------------------------------------------
let outputOnDisplay = (symbols, language) => {
    //Проверка на заполненость текстового поля, а также выбор одного из языков
    if (symbols === 0 || language === null) {
        price.textContent = '0,00 грн.'
        deadline.classList.add('empty');
        return false;
    }

    //Занисение данных о цене услуги в соответствующий элемент на странице
    price.textContent = setPrice(symbols, language);

    let time, str;

    time = deadlineToHour (symbols, language);

    str = deadlineToStr(time.hours, time.minutes);
   
    if (str) {
        //Занисение данных о дате окончания работ в соответствующий элемент на странице
        deadline.textContent = str;
        //Отображение элемента deadline на странице
        deadline.classList.remove('empty');
    }

    return true;
}

//---------------------------------------------
//Функция отслеживания изменений в текстовом поле и формирование новых 
//даты окончания работ и цены услуг в виде строки
//---------------------------------------------
let changeSymbols = (e) => {
    symbols = e.target.value.length;
    characters.textContent = symbols;

    outputOnDisplay(symbols, language);
}

//---------------------------------------------
//Функция отслеживания изменений у списка radio кнопок и формирование 
//новых даты окончания работ и цены услуг в виде строки
//---------------------------------------------
let changeLanguage = (e) => {
    language = e.target.value;

    outputOnDisplay(symbols, language);
}

textarea.addEventListener('input', changeSymbols);
languages.addEventListener('change', changeLanguage);

//Проверка на пустоту элемента на странице,
//она не отображается в таком случае
if (!deadline.textContent) deadline.classList.add('empty');

export {setPrice, deadlineToStr}
//module.exports.outputOnDisplay = outputOnDisplay;

