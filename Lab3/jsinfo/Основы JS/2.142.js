const number = +prompt("Введите число между 0 и 3", "");

switch (number) {
  case 0:
    alert("0");
    break;

  case 1:
    alert("1");
    break;

  case 2:
  case 3:
    alert("2 и 3");
    break;
}
