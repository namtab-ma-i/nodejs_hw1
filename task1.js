/*
  1. Создайте модуль person.js, который будет экспортировать объект с двумя свойствами-функциями
     Одна функция будет называться setName, принимать параметр с именем и сетить его в переменную name
     Вторая функция sayHello должна выводить "Hello, I'm (имя)" в консоль
     Доступа к переменной name извне быть не должно
*/
const person = require(''); // вставьте сюда путь

person.setName('Petya');
person.sayHello(); // здесь в консоль должно вывестись Hello, I'm Petya
console.log(person.name); // здесь должно быть undefined
