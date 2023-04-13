//Завдання 1
let age = prompt("Скільки вам років?");
let message =
  age >= 18 && age <= 45
    ? "Вітаємо,ви проходите далі!"
    : "Вибачте, наразі немає вільних вакансій";
alert(message);

//Завдання 2
// let a = +prompt("Введіть змінну а:");
// let b = +prompt("Введіть змінну b:");
// let message = a > 3 && a < 12 && b >= 5 && b < 13 ? "Вірно!" : "Не вірно!";
// alert(message);

//Завдання 3
// let name = prompt("Введіть ваше ім'я:");
// let deposit = prompt("Введіть суму депозиту:");
// let period = prompt("Введіть строк дії депозиту:");
// let depositRate = 0.2;
// let depositRate1 = 0.15;
// let depositRate2 = 0.16;
// let depositRate3 = 0.17;
// let profit = deposit * period * depositRate;
// let profit1 = deposit * period * depositRate1;
// let profit2 = deposit * period * depositRate2;
// let profit3 = deposit * period * depositRate3;
// let message =
//   period < 6
//     ? `Шановний ${name},Ви внесли ${deposit} грн., під 15% річних, на термін ${period} роки. За цей період часу ви заробите ${profit1} грн.`
//     : period >= 6 && period <= 9
//     ? `Шановний ${name},Ви внесли ${deposit} грн., під 16% річних, на термін ${period} роки. За цей період часу ви заробите ${profit2} грн.`
//     : period > 9
//     ? `Шановний ${name},Ви внесли ${deposit} грн., під 17% річних, на термін ${period} роки. За цей період часу ви заробите ${profit3} грн.`
//     : `Шановний ${name},Ви внесли ${deposit} грн., під 20% річних, на термін ${period} роки. За цей період часу ви заробите ${profit} грн.`;
// alert(message);
