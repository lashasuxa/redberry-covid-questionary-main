const previousBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");

previousBtn.addEventListener("click", () => {
  document.location.href = "../Covid/covid.html";
});

nextBtn.addEventListener("click", () => {
  document.location.href = "../Office/office.html";
});
