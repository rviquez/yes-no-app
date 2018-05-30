function decide() {
  var interval = setInterval(randomizeResult, 500);
  let resultElement = document.getElementById("result");
  let resultContainer = document.getElementById("display-result");
  let result = 0;

  var random = setTimeout(function () {

    result = getDecision();
    resultContainer.className = "";
    resultElement.innerHTML = result <= 0 ? "No" : "Yes";
    resultContainer.classList.add(result <= 0 ? "no" : "yes");
    clearInterval(interval);
  }, 4000);
  clearTimeout(result);
};

function checkInput(event) {
  let questionInput = document.getElementById("question");
  let decideButton = document.getElementById("decide");

  if (event.keyCode === 13 && questionInput.value.length > 2) {

    decide();
  }

  if (questionInput.value.length > 2) {
    decideButton.className = "";
    decideButton.classList.add("btn--blue");
    decideButton.disabled = false;

  } else {
    decideButton.classList = "";
    decideButton.classList.add("btn--gray");
    decideButton.disabled = true;
  }

};

function getDecision() {
  let result = Math.round(Math.random());
  return result;
};

function randomizeResult() {
  let resultElement = document.getElementById("result");
  let resultContainer = document.getElementById("display-result");

  if (resultContainer.className === "" || resultContainer.className === "yes") {
    resultContainer.className = "";
    resultElement.innerHTML = "No";
    resultContainer.classList.add("no");
  } else {
    resultContainer.className = "";
    resultElement.innerHTML = "Yes";
    resultContainer.classList.add("yes");
  }

};

function init() {
  document.getElementById("decide").addEventListener("click", decide);
  document.getElementById("question").addEventListener("keyup", checkInput);
};
init();
