// ЗАДАНИЕ № 1
// // Cтрока короче 20 символов
// имяФункции('проверяемая строка', 20); // true
// // Длина строки ровно 18 символов
// имяФункции('проверяемая строка', 18); // true
// // Строка длиннее 10 символов
// имяФункции('проверяемая строка', 10); // false
const isLessOrEqual = (string, length) => {
  if (string.length <= length) {
    return true
  }
  return false
};
// ПРОВЕРКА первого задания
console.log(isLessOrEqual('проверяемая строка', 10));


// // ЗАДАНИЕ № 2
// // Строка является палиндромом
// имяФункции('топот'); // true
// // Несмотря на разный регистр, тоже палиндром
// имяФункции('ДовОд'); // true
// // Это не палиндром
// имяФункции('Кекс');  // false
// Это палиндром
// имяФункции('Лёша на полке клопа нашёл '); // true
const isPolindrom = (string) => {
  const newString = string
    .toLowerCase()
    .replaceAll(' ', '')
  return newString === newString.split('').reverse().join('')
}
// ПРОВЕРКА второго задания
console.log(isPolindrom('ДовОд'));

// // ЗАДАНИЕ № 3
// имяФункции('2023 год');            // 2023
// имяФункции('ECMAScript 2022');     // 2022
// имяФункции('1 кефир, 0.5 батона'); // 105
// имяФункции('агент 007');           // 7
// имяФункции('а я томат');           // NaN
// имяФункции(2023); // 2023
// имяФункции(-1);   // 1
// имяФункции(1.5);  // 15
const extractNumber = (string) => {
  if (typeof string === 'number') {
    return string;
  }
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNan(parseInt(string.at(i), 10))){
      result += string.at(i);
    }
  }
  return parseInt(result,10)
}
extractNumber()

// // ЗАДАНИЕ № 4
// // Добавочный символ использован один раз
// имяФункции('1', 2, '0');      // '01'
// // Добавочный символ использован три раза
// имяФункции('1', 4, '0');      // '0001'
// // Добавочные символы обрезаны с конца
// имяФункции('q', 4, 'werty');  // 'werq'
// // Добавочные символы использованы полтора раза
// имяФункции('q', 4, 'we');     // 'wweq'
// // Добавочные символы не использованы, исходная строка не изменена
// имяФункции('qwerty', 4, '0'); // 'qwerty'

const myPadStart = (string, minLength, pad) => {
  let result = string;
  while (result.length < minLength) {
    const newResultLength = result.length + pad.length;
    const actualPad = newResultLength <= ? pad % pad.slice(0, minLength- newResultLength);
    result = actualPad + result
  }
  return result
}

myPadStart()
