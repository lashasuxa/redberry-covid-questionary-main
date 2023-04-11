const previousBtn = document.querySelector(".previous-btn");
const endBtn = document.querySelector(".next-btn");
endBtn.setAttribute("type", "button");

previousBtn.addEventListener("click", () => {
  document.location.href = "../Vaccine/vaccine.html";
});

endBtn.addEventListener("click", () => {
  document.location.href = "../Thanks/thanks.html"; // does not work because this button is part of form tag
});
