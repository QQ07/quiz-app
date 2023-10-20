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
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle error in a way suitable for your application
    });
}
