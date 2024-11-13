let num1 = Number(prompt("Введите первое число:"));
let num2 = Number(prompt("Введите второе число:"));

if (isNaN(num1)) {
  alert("Пожалуйста, введите число");
} else if (isNaN(num2)) {
  alert("Пожалуйста, введите число");
} else if (num1 < num2) {
  alert("Очевидно, что " + num2 + " больше, чем " + num1);
} else if (num1 > num2) {
  alert("Очевидно, что " + num1 + " больше, чем " + num2);
} else if (num1 === num2) {
  alert("Я очень удивился, узнав, что  " + num1 + " равно " + num2);
}
