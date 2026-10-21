

const russianAlphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
const latinAlphabet = [
  "A", "B", "V", "G", "D", "E", "Yo", "Zh", "Z", "I", "Y",
  "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "F",
  "Kh", "Ts", "Ch", "Sh", "Shch", "", "Y", "", "E", "Yu", "Ya",
];

function transliterate(value) {
  return value.replace(/[А-ЯЁ]/gi, (letter) => {
    const latin = latinAlphabet[russianAlphabet.indexOf(letter.toUpperCase())];
    return letter === letter.toUpperCase() ? latin : latin.toLowerCase();
  });
}

const fields = [...document.querySelectorAll(
  "#passport-surname, #passport-first-name, #passport-birthplace, #passport-gender, #passport-issuer"
)];
const originalValues = fields.map((field) => field.textContent);
const button = document.querySelector("#translate-names");
let isLatin = false;

button.addEventListener("click", () => {
  isLatin = !isLatin;
  fields.forEach((field, index) => {
    field.textContent = isLatin ? transliterate(originalValues[index]) : originalValues[index];
  });
  button.textContent = isLatin ? "Вернуть кириллицу" : "Переключить на латиницу";
});
