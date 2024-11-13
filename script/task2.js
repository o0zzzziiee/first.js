let age = Number(prompt("Сколько тебе лет?"));

if (isNaN(age)) {
  alert("Пожалуйста, введите число");
} else if (age >= 18) {
  alert("Ты совершеннолетний");
} else {
  alert("Ты несовершеннолетний");
}
