import { categories } from "./scripts/constant.js";
import { ele } from "./scripts/ui.js";

//! Olay İzleyecileri
document.addEventListener("DOMContentLoaded", () => {
  const index = Math.floor(Math.random() * categories.length);
  getResults(categories[index]);
});

ele.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = e.target[0].value;
  getResults(query);
});

//! Fonksiyonlar

//arama sonuçlarını çekip ekrana basar
function getResults(query) {
  if (!query) {
    Toastify({
      text: "Lütfen formu doldurun",
      duration: 3000,
      close: true,
      gravity: "bottom",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #fbda61, #ff5acd)",
        textShadow: "0 0 30px black",
      },
    }).showToast();
  }
}
