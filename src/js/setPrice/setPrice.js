//---------------------------------------------
//Функция формирования цены услуг в виде строки
//---------------------------------------------
let setPrice = (symbols, language) => {
    //Начальное объявление переменной, в которой будет храниться цена
    let price = 0;

    //Формирование цены исходя из количества символов и коэффициента языка
    language === 'en' 
        ? price = symbols * 0.12 
        : price = symbols * 0.05;

    //Проверка на минимальную цену исходя из выбранного языка.
    //Если цена ниже минимальной, то вне зависимости от количества символов принимается минимальная
    if (price < 50 && language !== 'en') {
        price = 50;
    } else if (price < 120 && language === 'en') {
        price = 120;
    }

    //Округление цены до 2-х знаков после запятой
    price = Math.round(price * 100) / 100;

    let residue = price - Math.trunc(price) === 0 ? '00' : Math.round( (price - Math.trunc(price)) * 100 );

    if (residue < 10 && residue !== '00') residue = `0${residue}`;

    //Вывод цены в виде строки
    return `${Math.trunc(price)},${residue} грн.`;
}

export default setPrice