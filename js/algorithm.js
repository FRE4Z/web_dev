

const form = document.querySelector("#fit-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const diameter = Number(form.elements.namedItem("diameter").value);
  const side = Number(form.elements.namedItem("side").value);
  const result = document.querySelector("#fit-result");

  result.textContent = side <= diameter / Math.sqrt(2)
    ? "Да, квадратный брус поместится в бревне."
    : "Нет, квадратный брус не поместится в бревне.";
});
