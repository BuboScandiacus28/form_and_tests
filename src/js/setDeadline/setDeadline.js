//---------------------------------------------
//Функция формирования объекта хранящего деструктуризированную дату окончания работ 
//---------------------------------------------
let setEndWorkDay = (year, month, day) => {

    let date = new Date(year, month, day);

    //Перенос даты с воскресенья на понедельник
    if (date.getDay() === 0) {
        date = new Date(year, month, day + 1);
        //Перенос даты с субботы на понедельник
    } else if (date.getDay() === 6) {
        date = new Date(year, month, day + 2);
    }

    return {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate(),
        dayOfWeek: date.getDay()
    }
}

let deadlineToHour = (symbols, language) => {
    let hours = 0;
    let minutes = 0;
    
    //Формирование количества затраченного времени в часах
    //исходя из количества символов и коэффициента языка 
    // + дополнительные 30 минут
    language === 'en' ?
        hours = 0.5 + (symbols / 333) :
        hours = 0.5 + (symbols / 1333);

    //Приведение к минимальному значению, 
    //если на работу уходит меньше часа
    if (hours < 1) {

        minutes += Math.trunc((hours - Math.trunc(hours)) * 60);

        if (minutes >= 60) {
            hours = 1;
            minutes -= 60;
        } else {
            hours = 1;
            minutes = 0;
        }

        //Проверка на целочисленность переменной hours.
    } else if (hours > Math.trunc(hours)) {

        //Дробная часть переводится в минуты
        minutes += Math.trunc((hours - Math.trunc(hours)) * 60);
        hours = Math.trunc(hours);

        //Проверка на переполненость переменной minutes
        //Смотреть строку 166
        if (minutes >= 60) {
            ++hours;
            minutes -= 60;
        }

    }

    return {
        hours,
        minutes
    }
}

//---------------------------------------------
//Функция формирования даты окончания работ в виде строки
//---------------------------------------------
let deadlineToStr = (time, date = new Date()) => {

    //Начальное объявление переменных
    //hours - количество часов затраченых на работу
    //P.S. переменная не может хранить более 9 часов, т.к. это полный рабочий день.
    //переменная обнулится, а к количеству дней прибавится один
    //workDay - количество рабочих дней затраченых на работу
    //minutes - количество минут затраченых на работу
    //P.S. переменная не может хранить более 60 минут, т.к. это полный рабочий час.
    //переменная обнулится, а к количеству часов прибавится один
    let hours = time.hours,
        workDay = 0,
        minutes = time.minutes;

    //objData - объект хранящий деструктуризированную дату
    let objData = {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate(),
        dayOfWeek: date.getDay(),
        hours: date.getHours(),
        minutes: date.getMinutes()
    }

    //Проверка на то, что день начала работ не является выходным,
    //иначе перенос всех работ на понедельник
    if (objData.dayOfWeek === 0 || objData.dayOfWeek === 6) {

        objData = {
            ...objData,
            ...setEndWorkDay(objData.year, objData.month, objData.day),
            hours: 10,
            minutes: 0
        };

    }

    //Складывание минут хранящися в объекте objData (смотреть строку 172)
    //и переменной minutes (смотреть строку 166).
    //Привидение суммы к часам, при необходимости.
    if ( (objData.minutes !== 0 || minutes !== 0) ) {

        minutes += objData.minutes;

        if (minutes <= 30) {
            objData.minutes = 30;
        } else {
            minutes -= 60;
            minutes > 0
                ? objData.minutes = 30
                : objData.minutes = 0;
            ++hours;
        }

    } else {
        objData.minutes = 0;
    }

    
    //Приведение часов к рабочим дням с откидыванием дробной части
    workDay = hours / 9;
    workDay = Math.trunc(workDay);

    //Отнимаем у переменной hours количество часов, которые приведены к рабочим дням
    if (workDay >= 1) hours -= workDay * 9;

    //Проверка на конец рабочего дня и, соответственно перенос на следующий день
    if (objData.hours > 19 || (objData.hours === 19 && objData.minutes > 0)) {

        objData = {
            ...objData,
            ...setEndWorkDay(objData.year, objData.month, objData.day + 1),
            hours: 10
        };

    }

    //Учитывание и пропуск двух выходных в неделю
    if (workDay >= 5) workDay += Math.trunc(workDay / 5) * 2;

    //Проверка на то, что в текущем рабочем дне осталось меньше рабочих часов,
    //чем требуется на работу
    if ((19 - objData.hours < hours) || (objData.hours + hours === 19 && objData.minutes !== 0)) {

        objData = {
            ...objData,
            ...setEndWorkDay(objData.year, objData.month, objData.day + workDay + 1),
            hours: 10 + hours - (19 - objData.hours)
        };

    } else {

        objData = {
            ...objData,
            ...setEndWorkDay(objData.year, objData.month, objData.day + workDay)
        };

        //Проверка на то, что рабочий день еще не настал, тогда прибавляться часу будут начиная с 10
        if (objData.hours < 10) {
            objData.hours = 10 + hours;
        } else {
            objData.hours += hours;
        }

    }
    
    objData = {
        ...objData,
        day: `${objData.day < 10 ? '0' : ''}${objData.day}`,
        month: `${objData.month < 9 ? '0' : ''}${objData.month + 1}`,
        minutes: `${objData.minutes === 0 ? '0' : ''}${objData.minutes}`
    }

    return `Термин исполнения: ${objData.day}.${objData.month}.${objData.year} в ${objData.hours}:${objData.minutes}`;
}

export {deadlineToStr, deadlineToHour}