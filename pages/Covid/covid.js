const previousBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");

previousBtn.addEventListener("click", () => {
  document.location.href = "../Personal/personal.html";
});

nextBtn.addEventListener("click", () => {
  document.location.href = "../Vaccine/vaccine.html";
});

const virusRadios = document.querySelectorAll('input[name="virus"]');
const testedRadioGroup = document.querySelector("#tested-radio-group");

virusRadios.forEach(function (virusRadio) {
  virusRadio.addEventListener("click", function (event) {
    if (event.target.value === "yes") {
      testedRadioGroup.style.display = "flex";
    } else {
      testedRadioGroup.style.display = "none";
    }
  });
});

const testYes = document.querySelector("#tested-yes");
const testNo = document.querySelector("#tested-no");
const testInfo = document.querySelector(".tested-info");

testYes.addEventListener("click", () => {
  testInfo.innerHTML = `
          <p>თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*</p>
          <input type="date" id="test-date" name="test-date">
          <br>
          <input type="number" id="test-result" name="test-result" min="0" max="100">
        `;
});
testNo.addEventListener("click", () => {
  testInfo.innerHTML = `
    <p>მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*</p>
    <input type="date" id="exposure-date" name="exposure-date" >
  `;
});
