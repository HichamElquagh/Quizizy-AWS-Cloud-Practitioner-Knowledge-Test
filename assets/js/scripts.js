//question

let questions = [
  {
    Question:
      "Why is AWS more economical than traditional data centers for applications with varying computeworkloads ?",
    Ansewer1: "Amazon EC2 costs are billed on a monthly basis.",
    Ansewer2:
      "Users retain full administrative access to their Amazon EC2 instances.",
    Ansewer3: "Amazon EC2 instances can be launched on demand when needed..",
    Ansewer4:
      "Users can permanently run enough instances to handle peak workloads",
    Trueanswers: 3,
  },

  {
    Question:
      "Which AWS service would simplify the migration of a database to AWS?",
    Ansewer1: "AWS Storage Gateway",
    Ansewer2: "AWS Database Migration Service (AWS DMS)",
    Ansewer3: "Amazon EC2",
    Ansewer4: "Amazon AppStream 2.0",
    Trueanswers: 2,
  },
  {
    Question:
      "Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?",

    Ansewer1: "AWS Config",
    Ansewer2: "AWS OpsWorks",
    Ansewer3: "AWS SDK",
    Ansewer4: "AWS Marketplace",
    Trueanswers: 4,
  },
  {
    Question:
      "Which AWS networking service enables a company to create a virtual network within AWS?",

    Ansewer1: "AWS Config",
    Ansewer2: "Amazon Route 53",
    Ansewer3: "AWS Direct Connect",
    Ansewer4: "Amazon Virtual Private Cloud (Amazon VPC)",
    Trueanswers: 4,
  },

  {
    Question:
      "Which of the following is an AWS responsibility under the AWS shared responsibility model?",
    Ansewer1: "Configuring third-party applications",
    Ansewer2: "Maintaining physical hardware",
    Ansewer3: "Securing application access and data",
    Ansewer4: "Managing guest operating systems",
    Trueanswers: 2,
  },
  {
    id: "6",
    Question:
      "Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?",

    Ansewer1: "AWS Regions",
    Ansewer2: "Edge locations",
    Ansewer3: "Availability Zones",
    Ansewer4: "Virtual Private Cloud (VPC)",
    Trueanswers: 2,
  },
  {
    Question:
      "How would a system administrator add an additional layer of login security to a user's AWS Management Console?",

    Ansewer1: "Use Amazon Cloud Directory",
    Ansewer2: "Audit AWS Identity and Access Management (IAM) roles",
    Ansewer3: "Enable multi-factor authentication",
    Ansewer4: "Enable AWS CloudTrail",
    Trueanswers: 3,
  },
  {
    Question:
      "Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?",
    Ansewer1: "AWS Trusted Advisor",
    Ansewer2: "AWS CloudTrail",
    Ansewer3: "AWS X-Ray",
    Ansewer4: "AWS Identity and Access Management (AWS IAM)",
    Trueanswers: 2,
  },
  {
    Question:
      "Which service would be used to send alerts based on Amazon CloudWatch alarms?",

    Ansewer1: "Amazon Simple Notification Service (Amazon SNS)",
    Ansewer2: "AWS CloudTrail",
    Ansewer3: "AWS Trusted Advisor",
    Ansewer4: "Amazon Route 53",
    Trueanswers: 1,
  },

  {
    Question:
      "Where can a user find information about prohibited actions on the AWS infrastructure?",

    Ansewer1: "AWS Trusted Advisor",
    Ansewer2: "AWS Identity and Access Management (IAM)",
    Ansewer3: "AWS Billing Console",
    Ansewer4: "AWS Acceptable Use Policy",
    Trueanswers: 4,
  },
];
const progress = document.getElementById("progress");
const btnNext = document.getElementById("btn-nex");
const btnNextQuestion = document.getElementById("btn-nex-question");
const component = document.querySelectorAll(".component-step");
const displayQst = document.querySelector("#question-container");
const infoo = document.querySelector("#infoo");
const start = document.querySelector(".start");
const progressBar = document.querySelector(".progress-bar");

let coo = 0;
var percentage = (1 * 100) / questions.length;

btnNext.addEventListener("click", () => {
  coo++;
  if (coo < component.length) {
    update(coo);
  }
});

btnNextQuestion.addEventListener("click", () => {
  let coo = 1;
  coo++;
  if (coo < component.length) {
    update(coo);
  }
});

function update(coo) {
  component[coo].classList.add("component-step-active");
  component[coo - 1].classList.remove("component-step-active");
  start.style.display = "block";
  infoo.style.display = "none";
}

// this function for dispaly the question
const showQuestion = document.querySelector(".question-card");
const showAnsewer = document.getElementById("card");
const ansewercard = document.querySelectorAll(".answer1-card");
const showresultatt = document.querySelector(".container-resultat");
var index = randomindex(questions);
var progressindex = 0;
function randomindex(arr) {
  let indice = Math.floor(Math.random() * (arr.length - 1));
  return indice;
}

function startQuiz() {
  displayQst.style.display = "block";
  start.style.display = "none";
  // console.log(index);
  displayquestion(index);
  progresss(progressindex);
}
function displayquestion(q) {
  let tag = "<h3>" + questions[q].Question + "</h3>";
  let optionTag =
    '<div  onclick="nextQuestion(1);"  class="answer1-card" id="1">' +
    questions[q].Ansewer1 +
    "</div>" +
    '<div  onclick="nextQuestion(2);" class="answer1-card" id="2">' +
    questions[q].Ansewer2 +
    "</div>" +
    '<div onclick="nextQuestion(3);"   class="answer1-card" id="3">' +
    questions[q].Ansewer3 +
    "</div>" +
    '<div onclick="nextQuestion(4);" class="answer1-card" id="4">' +
    questions[q].Ansewer4 +
    "</div>";
  showQuestion.innerHTML = tag;
  showAnsewer.innerHTML = optionTag;
}

function progresss(q) {
  if (q <= questions.length + q) {
    let width = `${(q + 1) * percentage}%`;
    progressBar.style.width = width;
    progressBar.style.color = "#D5CEA3";
    progressBar.innerText = width;
  }
}

function nextQuestion(d) {
  let answer = null ;
  
  // ansewercard.forEach(anscard =>{
    // anscard.addEventListener('click', function clicked(){}
    // if (anscard ==   ){
    //   answer = anscard.id ;
    // }
  // });
  // console.log(answer);
  // if (answer == questions[index].Trueanswers){
  //   console.log('success');
  //   document.getElementById(answer).style.background = "green" ;
  //   console.log(document.getElementById(answer));
  // }

  // else if (answer != questions[index].Trueanswers){
  //   console.log('wrong');
  //   document.getElementById(answer).style.background = "red" ;
  //   document.getElementById(answer).style.background = "red" ;
  //   document.getElementById(answer).style.background = "red" ;
  // }
  if (questions.length == 0) {
    btnNextQuestion.style.display = "block";
    return;
  }
  // }


  

  if (d == questions[index].Trueanswers) {
    console.log("true");
    ansewercard.classList.add("active"); 
    
  } else {
    console.log("false");
  }


  questions.splice(index, 1);
  index = randomindex(questions);
  displayquestion(index);
  // progress

  progressindex++;
  progresss(progressindex);
}

function showresultat(){
  displayQst.style.display= "none";
  start.style.display= "none";
  showresultatt.style.display= "block";


};


function correctionansewer() {}
