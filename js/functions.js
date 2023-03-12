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
