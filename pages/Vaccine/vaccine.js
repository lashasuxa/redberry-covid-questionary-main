const previousBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");

const virusRadios = document.querySelectorAll('input[name="virus"]');
const testedRadioGroup = document.querySelector("#tested-radio-group");
const testedRadioGroup2 = document.querySelector("#tested-radio-group2");
const testInfo = document.querySelector(".tested-info"); // empty div for adding spans

virusRadios.forEach(function (virusRadio) {
  virusRadio.addEventListener("click", function (event) {
    if (event.target.value === "yes") {
      testedRadioGroup.style.display = "flex";
      testedRadioGroup2.style.display = "none";
      testInfo.innerHTML = "";
    } else {
      testedRadioGroup2.style.display = "flex";
      testedRadioGroup.style.display = "none";
      testInfo.innerHTML = "";
    }
  });
});

const testYes = document.querySelector("#tested-yes");
const testNo = document.querySelector("#tested-no");
const testNo1 = document.querySelector("#tested-no1");

testYes.addEventListener("click", () => {
  testInfo.innerHTML = `
   `;
});
testNo.addEventListener("click", () => {
  testInfo.innerHTML = `
   `;
});

testNo1.addEventListener("click", () => {
  testInfo.innerHTML = `
  <span id="delay-msg">რომ არ გადადო, <br>
  ბარემ ახლავე დარეგისტრირდი <br>
 <a href="https://booking.moh.gov.ge/">https://booking.moh.gov.ge/</a>
</span> `;
});

const answerNo = document.querySelector("#answer-no");
const answerYes = document.querySelector("#answer-yes");
const answerNo1 = document.querySelector("#answer-no1");

answerYes.addEventListener("click", () => {
  testInfo.innerHTML = `
  <span id="delay-msg">
 <a href="https://booking.moh.gov.ge/">👉 https://booking.moh.gov.ge/</a>
</span>
   `;
});
answerNo.addEventListener("click", () => {
  testInfo.innerHTML = `
   `;
});

answerNo1.addEventListener("click", () => {
  testInfo.innerHTML = `
  `;
});

previousBtn.addEventListener("click", () => {
  document.location.href = "../Covid/covid.html";
});

nextBtn.addEventListener("click", () => {
  // Check if all required inputs are filled
  let allInputsFilled = true;

  const selectedVirusRadio = document.querySelector(
    'input[name="virus"]:checked'
  );

  const selectedTestedRadio = document.querySelector(
    'input[name="tested"]:checked'
  );

  const selectedVaccineRadio = document.querySelector(
    'input[name="vaccine"]:checked'
  );

  //bug on one radio input
  if (!selectedTestedRadio) {
    allInputsFilled = false;
  } else {
    allInputsFilled = true;
  }

  // If all inputs are filled, proceed to next page
  if (allInputsFilled) {
    document.location.href = "../Office/office.html";
  } else {
    // Show an error message or highlight the required fields
    alert("გთხოვთ შეავსოთ მოცემული ველები");
  }
});
