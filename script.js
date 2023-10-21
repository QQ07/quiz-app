let currentQuestion = "";

// function askQuestion() {
//   currentQuestion = prompt("Enter your question:");
//   document.getElementById("question-display-audience").innerText =
//     currentQuestion;
// }

function saveAnswer() {
  const answer = document.getElementById("answerInput").value;
   //   fetch("https://quiz-app-production-1fb9.up.railway.app/saveAnswer", {
  fetch("https://quiz-app-production-1fb9.up.railway.app/saveAnswer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ answer }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
       displayPopup();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function displayPopup() {
  var popup = document.getElementById("popup");
  popup.classList.add("show");
  var hide= document.getElementById("audience-screen");
  hide.classList.add("hide");
  // setTimeout(function () {
  //   popup.classList.remove("show");
  // }, 2000); // Adjust the time here (in milliseconds) for how long you want the popup to be displayed
}
