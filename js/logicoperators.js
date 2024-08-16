const enterWord = prompt("Введіть слово");
const enterSecondWord = prompt("Введіть друге слово");
if (enterWord && enterSecondWord) {
  alert("Обидва поля заповнені");
} else {
  alert("Не всі поля заповнені");
}

const enterNumber = prompt("Введіть число");
const enterSecondNumber = prompt("Введіть друге число");
if (enterNumber + enterSecondNumber > 10) {
  alert("Сума чисел більша за 10");
} else {
  alert("Сума чисел менша або дорівнює 10");
}

const enterWord2 = prompt("Введіть слово з JavaScript");
const checkWord = enterWord2.includes("JavaScript");
if (checkWord === true) {
  alert("Текст містить слово JavaScript");
} else {
  alert("Текст не містить слово JavaScript");
}

const enterNumber2 = prompt("Введіть число");
if (10 < enterNumber2 && enterNumber2 < 20) {
  alert("Число входить в діапазон від 10 до 20");
} else {
  alert("Число не входить в діапазон від 10 до 20");
}

const login1 = prompt("Введіть своє ім'я");
if (login1.length > 3) {
  alert("Ім'я введено");
} else {
  alert("Ім'я має містити не менше 3 символів");
}

const login2 = prompt("Введіть свою ел. пеошту");
const checkLogin2 = login2.includes("@");

if (checkLogin2 === true) {
  alert("Ел. пошту введено");
} else {
  alert("Пошта має містити символ @");
}

const login3 = prompt("Введіть свій пароль");

if (login3.length >= 6) {
  alert("Пароль введено");
} else {
  alert("Пароль має містити не менше 6 символів");
}

if (login1.length > 3 && login2 === true && login3.length >= 6) {
    alert("Вас переведено на другу сторінку")
  }
