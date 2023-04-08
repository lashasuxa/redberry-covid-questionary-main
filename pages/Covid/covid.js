const previousBtn = document.querySelector(".previous-btn");
console.log(previousBtn);
const nextBtn = document.querySelector(".next-btn");

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
          <input type="number" id="test-date" name="test-date" placeholder="რიცხვი">
          <br>
          <input type="number" id="test-result" name="test-result" min="0" max="10000000" placeholder="ანტისხეულების რაოდენობა">
        `;
});
testNo.addEventListener("click", () => {
  testInfo.innerHTML = `
    <p>მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*</p>
    <input type="date" id="exposure-date" name="exposure-date" placeholder="დდ/თთ/წწ" >
  `;
});

previousBtn.addEventListener("click", () => {
  document.location.href = "../Personal/personal.html";
});

// nextBtn.addEventListener("click", () => {
//   document.location.href = "../Vaccine/vaccine.html";
// });

nextBtn.addEventListener("click", () => {
  // Check if all required inputs are filled
  let allInputsFilled = true;

  const selectedVirusRadio = document.querySelector(
    'input[name="virus"]:checked'
  );

  if (!selectedVirusRadio) {
    allInputsFilled = false;
  } else if (selectedVirusRadio.value === "yes") {
    if (
      !document.getElementById("test-date").value ||
      !document.getElementById("test-result").value
    ) {
      allInputsFilled = false;
    }
  }

  // If all inputs are filled, proceed to next page
  if (allInputsFilled) {
    document.location.href = "../Vaccine/vaccine.html";
  } else {
    // Show an error message or highlight the required fields
    alert("Please fill in all required fields.");
  }
});
