import setPrice from './../js/setPrice/setPrice';
import {deadlineToStr} from './../js/setDeadline/setDeadline'



test('Проверка setPrice от 1 до 1000 символов и по всем языкам', () => {
    //---------------------------------------------
    //---------------------------------------------
    //              symbols     language    expectedResult
    expect(setPrice(1,          'ru')).toBe('50,00 грн.');
    expect(setPrice(1,          'ua')).toBe('50,00 грн.');
    expect(setPrice(1,          'en')).toBe('120,00 грн.');
    expect(setPrice(1000,       'ru')).toBe('50,00 грн.');
    expect(setPrice(1000,       'ua')).toBe('50,00 грн.');
    expect(setPrice(1000,       'en')).toBe('120,00 грн.');
});

test('Проверка setPrice на различные значения символов ([1001, 2005, 3456, 7892, 123456]) и по всем языкам', () => {
    //---------------------------------------------
    //---------------------------------------------
    //              symbols     language    expectedResult
    expect(setPrice(1001,       'ru')).toBe('50,05 грн.');
    expect(setPrice(1001,       'ua')).toBe('50,05 грн.');
    expect(setPrice(1001,       'en')).toBe('120,12 грн.');
    expect(setPrice(2005,       'ru')).toBe('100,25 грн.');
    expect(setPrice(2005,       'ua')).toBe('100,25 грн.');
    expect(setPrice(2005,       'en')).toBe('240,60 грн.');
    expect(setPrice(3456,       'ru')).toBe('172,80 грн.');
    expect(setPrice(3456,       'ua')).toBe('172,80 грн.');
    expect(setPrice(3456,       'en')).toBe('414,72 грн.');
    expect(setPrice(7892,       'ru')).toBe('394,60 грн.');
    expect(setPrice(7892,       'ua')).toBe('394,60 грн.');
    expect(setPrice(7892,       'en')).toBe('947,04 грн.');
    expect(setPrice(123456,     'ru')).toBe('6172,80 грн.');
    expect(setPrice(123456,     'ua')).toBe('6172,80 грн.');
    expect(setPrice(123456,     'en')).toBe('14814,72 грн.');
});

test('Проверка deadlineToStr от 1 до 1333 символов и по всем языкам и от 1 до 333 для английского', () => {
    //---------------------------------------------
    //---------------------------------------------
    //                      durationHours   durationMinutes     startTime                           expectedResult
    expect(deadlineToStr(   1,              0,                  new Date("2020-09-07 03:00"))).toBe('Термин исполнения: 07.09.2020 в 11:00');
    expect(deadlineToStr(   1,              0,                  new Date("2020-09-07 11:00"))).toBe('Термин исполнения: 07.09.2020 в 12:00');
    expect(deadlineToStr(   1,              0,                  new Date("2020-09-07 11:30"))).toBe('Термин исполнения: 07.09.2020 в 12:30');
    expect(deadlineToStr(   1,              0,                  new Date("2020-09-07 18:00"))).toBe('Термин исполнения: 07.09.2020 в 19:00');
    expect(deadlineToStr(   1,              0,                  new Date("2020-09-07 19:00"))).toBe('Термин исполнения: 08.09.2020 в 11:00');
    //---------------------------------------------
    //---------------------------------------------
    //                      durationHours   durationMinutes     startTime                           expectedResult
    expect(deadlineToStr(   1,              30,                 new Date("2020-09-07 03:00"))).toBe('Термин исполнения: 07.09.2020 в 11:30');
    expect(deadlineToStr(   1,              30,                 new Date("2020-09-07 11:00"))).toBe('Термин исполнения: 07.09.2020 в 12:30');
    expect(deadlineToStr(   1,              30,                 new Date("2020-09-07 11:30"))).toBe('Термин исполнения: 07.09.2020 в 13:00');
    expect(deadlineToStr(   1,              30,                 new Date("2020-09-07 18:00"))).toBe('Термин исполнения: 08.09.2020 в 10:30');
    expect(deadlineToStr(   1,              30,                 new Date("2020-09-07 19:00"))).toBe('Термин исполнения: 08.09.2020 в 11:30');
});


test('Проверка deadlineToStr на различные значения символов ([1500, 2005, 3456, 7892, 123456]) и по всем языкам', () => {
    //---------------------------------------------
    //---------------------------------------------
    //                      durationHours   durationMinutes     startTime                           expectedResult
    expect(deadlineToStr(   1,              38,                 new Date("2020-09-07 03:00"))).toBe('Термин исполнения: 07.09.2020 в 12:00');
    expect(deadlineToStr(   5,              0.27,               new Date("2020-09-07 03:00"))).toBe('Термин исполнения: 07.09.2020 в 15:30');
    expect(deadlineToStr(   1,              38,                 new Date("2020-09-07 11:00"))).toBe('Термин исполнения: 07.09.2020 в 13:00');
    expect(deadlineToStr(   5,              0.27,               new Date("2020-09-07 11:00"))).toBe('Термин исполнения: 07.09.2020 в 16:30');
    expect(deadlineToStr(   1,              38,                 new Date("2020-09-07 11:30"))).toBe('Термин исполнения: 07.09.2020 в 13:30');
    expect(deadlineToStr(   5,              0.27,               new Date("2020-09-07 11:30"))).toBe('Термин исполнения: 07.09.2020 в 17:00');
    expect(deadlineToStr(   1,              38,                 new Date("2020-09-07 18:00"))).toBe('Термин исполнения: 08.09.2020 в 11:00');
    expect(deadlineToStr(   5,              0.27,               new Date("2020-09-07 18:00"))).toBe('Термин исполнения: 08.09.2020 в 14:30');
    expect(deadlineToStr(   1,              38,                 new Date("2020-09-07 19:00"))).toBe('Термин исполнения: 08.09.2020 в 12:00');
    expect(deadlineToStr(   5,              0.27,               new Date("2020-09-07 19:00"))).toBe('Термин исполнения: 08.09.2020 в 15:30');
    //---------------------------------------------
    //---------------------------------------------
    //                      durationHours   durationMinutes     startTime                           expectedResult
    expect(deadlineToStr(   2,              0.25,               new Date("2020-09-07 03:00"))).toBe('Термин исполнения: 07.09.2020 в 12:30');
    expect(deadlineToStr(   6,              31,                 new Date("2020-09-07 03:00"))).toBe('Термин исполнения: 07.09.2020 в 17:00');
    expect(deadlineToStr(   2,              0.25,               new Date("2020-09-07 11:00"))).toBe('Термин исполнения: 07.09.2020 в 13:30');
    expect(deadlineToStr(   6,              31,                 new Date("2020-09-07 11:00"))).toBe('Термин исполнения: 07.09.2020 в 18:00');
    expect(deadlineToStr(   2,              0.25,               new Date("2020-09-07 11:30"))).toBe('Термин исполнения: 07.09.2020 в 14:00');
    expect(deadlineToStr(   6,              31,                 new Date("2020-09-07 11:30"))).toBe('Термин исполнения: 07.09.2020 в 18:30');
    expect(deadlineToStr(   2,              0.25,               new Date("2020-09-07 18:00"))).toBe('Термин исполнения: 08.09.2020 в 11:30');
    expect(deadlineToStr(   6,              31,                 new Date("2020-09-07 18:00"))).toBe('Термин исполнения: 08.09.2020 в 16:00');
    expect(deadlineToStr(   2,              0.25,               new Date("2020-09-07 19:00"))).toBe('Термин исполнения: 08.09.2020 в 12:30');
    expect(deadlineToStr(   6,              31,                 new Date("2020-09-07 19:00"))).toBe('Термин исполнения: 08.09.2020 в 17:00');
    //---------------------------------------------
    //---------------------------------------------
    //                      durationHours   durationMinutes     startTime                           expectedResult
    expect(deadlineToStr(   3,              5,                  new Date("2020-09-07 03:00"))).toBe('Термин исполнения: 07.09.2020 в 13:30');
    expect(deadlineToStr(   10,             53,                 new Date("2020-09-07 03:00"))).toBe('Термин исполнения: 08.09.2020 в 12:00');
    expect(deadlineToStr(   3,              5,                  new Date("2020-09-07 11:00"))).toBe('Термин исполнения: 07.09.2020 в 14:30');
    expect(deadlineToStr(   10,             53,                 new Date("2020-09-07 11:00"))).toBe('Термин исполнения: 08.09.2020 в 13:00');
    expect(deadlineToStr(   3,              5,                  new Date("2020-09-07 11:30"))).toBe('Термин исполнения: 07.09.2020 в 15:00');
    expect(deadlineToStr(   10,             53,                 new Date("2020-09-07 11:30"))).toBe('Термин исполнения: 08.09.2020 в 13:30');
    expect(deadlineToStr(   3,              5,                  new Date("2020-09-07 18:00"))).toBe('Термин исполнения: 08.09.2020 в 12:30');
    expect(deadlineToStr(   10,             53,                 new Date("2020-09-07 18:00"))).toBe('Термин исполнения: 09.09.2020 в 11:00');
    expect(deadlineToStr(   3,              5,                  new Date("2020-09-07 19:00"))).toBe('Термин исполнения: 08.09.2020 в 13:30');
    expect(deadlineToStr(   10,             53,                 new Date("2020-09-07 19:00"))).toBe('Термин исполнения: 09.09.2020 в 12:00');
    //---------------------------------------------
    //---------------------------------------------
    //                      durationHours   durationMinutes     startTime                           expectedResult
    expect(deadlineToStr(   6,              25,                 new Date("2020-09-07 03:00"))).toBe('Термин исполнения: 07.09.2020 в 16:30');
    expect(deadlineToStr(   24,             12,                 new Date("2020-09-07 03:00"))).toBe('Термин исполнения: 09.09.2020 в 16:30');
    expect(deadlineToStr(   6,              25,                 new Date("2020-09-07 11:00"))).toBe('Термин исполнения: 07.09.2020 в 17:30');
    expect(deadlineToStr(   24,             12,                 new Date("2020-09-07 11:00"))).toBe('Термин исполнения: 09.09.2020 в 17:30');
    expect(deadlineToStr(   6,              25,                 new Date("2020-09-07 11:30"))).toBe('Термин исполнения: 07.09.2020 в 18:00');
    expect(deadlineToStr(   24,             12,                 new Date("2020-09-07 11:30"))).toBe('Термин исполнения: 09.09.2020 в 18:00');
    expect(deadlineToStr(   6,              25,                 new Date("2020-09-07 18:00"))).toBe('Термин исполнения: 08.09.2020 в 15:30');
    expect(deadlineToStr(   24,             12,                 new Date("2020-09-07 18:00"))).toBe('Термин исполнения: 10.09.2020 в 15:30');
    expect(deadlineToStr(   6,              25,                 new Date("2020-09-07 19:00"))).toBe('Термин исполнения: 08.09.2020 в 16:30');
    expect(deadlineToStr(   24,             12,                 new Date("2020-09-07 19:00"))).toBe('Термин исполнения: 10.09.2020 в 16:30');
    //---------------------------------------------
    //---------------------------------------------
    //                      durationHours   durationMinutes     startTime                           expectedResult
    expect(deadlineToStr(   93,             7,                  new Date("2020-09-07 03:00"))).toBe('Термин исполнения: 21.09.2020 в 13:30');
    expect(deadlineToStr(   371,            14,                 new Date("2020-09-07 03:00"))).toBe('Термин исполнения: 03.11.2020 в 12:30');
    expect(deadlineToStr(   93,             7,                  new Date("2020-09-07 11:00"))).toBe('Термин исполнения: 21.09.2020 в 14:30');
    expect(deadlineToStr(   371,            14,                 new Date("2020-09-07 11:00"))).toBe('Термин исполнения: 03.11.2020 в 13:30');
    expect(deadlineToStr(   93,             7,                  new Date("2020-09-07 11:30"))).toBe('Термин исполнения: 21.09.2020 в 15:00');
    expect(deadlineToStr(   371,            14,                 new Date("2020-09-07 11:30"))).toBe('Термин исполнения: 03.11.2020 в 14:00');
    expect(deadlineToStr(   93,             7,                  new Date("2020-09-07 18:00"))).toBe('Термин исполнения: 22.09.2020 в 12:30');
    expect(deadlineToStr(   371,            14,                 new Date("2020-09-07 18:00"))).toBe('Термин исполнения: 04.11.2020 в 11:30');
    expect(deadlineToStr(   93,             7,                  new Date("2020-09-07 19:00"))).toBe('Термин исполнения: 22.09.2020 в 13:30');
    expect(deadlineToStr(   371,            14,                 new Date("2020-09-07 19:00"))).toBe('Термин исполнения: 04.11.2020 в 12:30');
})