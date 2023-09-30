const questionCard = document.querySelectorAll(".questionCard");

questionCard.forEach((question) => {
  question.addEventListener("click", function () {
    const answer = question.querySelector(".answer-container");
    answer.classList.toggle("active");
  });
});
