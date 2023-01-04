var questions = [];
ajax_json_data();
const progress = document.getElementById("progress");
const btnNext = document.getElementById("btn-nex");
const btnNextQuestion = document.getElementById("btn-nex-question");
const component = document.querySelectorAll(".component-step");
const displayQst = document.querySelector("#question-container");
const infoo = document.querySelector("#infoo");
const start = document.querySelector(".start");
const progressBar = document.querySelector(".progress-bar");

var coo = 0;

btnNext.addEventListener("click", () => {
  coo++;
  if (coo < component.length) {
    update(coo);
    coo++;
  }
});



function update(coo) {
  component[coo].classList.add("component-step-active");
  component[coo - 1].classList.remove("component-step-active");
  // progress.style.width = "30%"
  if (coo == 1) {
    start.style.display = "block";
    infoo.style.display = "none";
  } else {
    start.style.display = "none";
  }
}

// this function for dispaly the question
const showQuestion = document.querySelector(".question-card");
const showAnsewer = document.getElementById("card");
const ansewercard = document.querySelectorAll(".answer1-card");
const showresultatt = document.querySelector(".container-resultat");
const result = document.querySelector(".resultat");
const score = document.querySelector(".score-para");
var index = 0;
var progressindex = 0;
var trueinsewer = 0;
questions.sort(function () {
  return Math.random() - 0.5;
});

function startQuiz() {
  displayQst.style.display = "block";
  start.style.display = "none";

  displayquestion(index);
  progresss();
}
function displayquestion(q) {
  // console.log(index);
  let tag = "<h3>" + questions[index].questions + "</h3>";
  let optionTag =
    '<div  onclick="nextQuestion(1);"  class="answer1-card" id="1">' +
    questions[index].answer1 +
    "</div>" +
    '<div  onclick="nextQuestion(2);" class="answer1-card" id="2">' +
    questions[index].answer2 +
    "</div>" +
    '<div onclick="nextQuestion(3);"   class="answer1-card" id="3">' +
    questions[index].answer3 +
    "</div>" +
    '<div onclick="nextQuestion(4);" class="answer1-card" id="4">' +
    questions[index].answer4 +
    "</div>";
  showQuestion.innerHTML = tag;
  showAnsewer.innerHTML = optionTag;
  progresss();
  // console.log(q);
}

function progresss() {
  let percentage = (1 * 100) / questions.length;
  let width = `${index * percentage}%`;
  progressBar.style.width = width;
  progressBar.style.color = "#D5CEA3";
  progressBar.innerText = width;
}

let wrong = [];
let correct = [];
// let answer =0;
function nextQuestion(d) {
  console.log(d);
  let selectedAnswer = document.getElementById(d);
  if (d == questions[index].correct_id) {
    let corrects = {
      correctAnsewer: questions[index].correct_answer,
      questions: questions[index].questions,
      explications: questions[index].justifications,
    };
    correct.push(corrects);
    selectedAnswer.style.backgroundColor = "#008000b0";
    trueinsewer++;
  } else {
    let wrongs = {
      correctAnsewer: questions[index].correct_answer,
      questions: questions[index].questions,
      explications: questions[index].justifications,
    };

    wrong.push(wrongs);
    selectedAnswer.style.backgroundColor = "#ff000087";
    // for(let i=0;i<ansewercard.length;i++){
    let qq = questions[index].correct_id;
    let tre = document.getElementById(qq);
    //  console.log(tre);
    tre.style.backgroundColor = "#008000b0";
    // tre.classList.toggle('correct');
  }
  // stop count down here
  setTimeout(function () {
    index++;
    if (index == questions.length) {
      showresultat();
    } else displayquestion();
    // restart count down here
  }, 2000);
}

function showresultat() {
  component[coo].classList.add("component-step-active");
  component[coo - 1].classList.remove("component-step-active");
  displayQst.style.display = "none";
  start.style.display = "none";
  showresultatt.style.display = "block";
  correctionansewer();

  $.post(
    "scripts.php/crud.script.php",
    {
      score: trueinsewer * 10,
    },
    function (data, status) {},
    "json"
  );
}

function correctionansewer() {
  score.innerHTML =
    '<div class="score-para">' +
    "<p>" +
    "YOUR SCORE : " +
    trueinsewer * 10 +
    " %";
  "</p>" + "</div>";

  for (let i = 0; i < wrong.length; i++) {
    result.innerHTML +=
      '<div class="resultat text-light" style="background-color:#ff000087;margin:10px 0" >' +
      '<p class="paragraph-question">' +
      (i + 1) +
      ")" +
      wrong[i].questions +
      "</p>" +
      '<p class="" style="color:#ffffffba;">' +
      wrong[i].explications +
      "</p>" +
      "</div>";
    // '<div class="resultat text-light" >' +
    // wrong[i].correctAnsewer +
    // "</div>" +
    // '<div class="resultat text-light" >' +
    // wrong[i].explications +
    // "</div>";
    console.log("1");
  }

  for (let i = 0; i < correct.length; i++) {
    console.log("2");
    result.innerHTML +=
      '<div class="resultat "  style="background-color:#008000b0;margin:10px 0" >' +
      '<p class="">' +
      (i + 1) +
      ")" +
      correct[i].questions +
      "</p>" +
      '<p style="color:#ffffffba;">' +
      correct[i].explications +
      "</p>" +
      "</div>";
  }
}

function ajax_json_data() {
  let getdata = new XMLHttpRequest();

  getdata.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      questions = JSON.parse(this.responseText);
      progresss();
    }
  };
  getdata.open(
    "POST",
    "http://localhost/Quizizy-AWS-Cloud-Practitioner-Knowledge-Test/scripts.php/crud.script.php"
  );
  getdata.send();
}
