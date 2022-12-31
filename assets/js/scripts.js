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
    explication:
      " C – The ability to launch instances on demand when needed allows users to launch and terminate instances in response to a varying workload. This is a more economical practice than purchasing enough on-premises servers to handle the peak load",
  },
  
  {
    Question:
      "Which AWS service would simplify the migration of a database to AWS?",
    Ansewer1: "AWS Storage Gateway",
    Ansewer2: "AWS Database Migration Service (AWS DMS)",
    Ansewer3: "Amazon EC2",
    Ansewer4: "Amazon AppStream 2.0",
    Trueanswers: 2,
    explication:
      "  B – AWS DMS helps users migrate databases to AWS quickly and securely. The source database remainsfully operational during the migration, minimizing downtime to applications that rely on the databaseAWS DMScan migrate data to and from most widely used commercial and open-source databases",
  },
  {
    Question:
      "Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?",
  
    Ansewer1: "AWS Config",
    Ansewer2: "AWS OpsWorks",
    Ansewer3: "AWS SDK",
    Ansewer4: "AWS Marketplace",
    Trueanswers: 4,
    explication:
      " D – AWS Marketplace is a digital catalog with thousands of software listings from independent softwarevendors that makes it easy to find, test, buy, and deploy software that runs on AWS.",
  },
  {
    Question:
      "Which AWS networking service enables a company to create a virtual network within AWS?",
  
    Ansewer1: "AWS Config",
    Ansewer2: "Amazon Route 53",
    Ansewer3: "AWS Direct Connect",
    Ansewer4: "Amazon Virtual Private Cloud (Amazon VPC)",
    Trueanswers: 4,
    explication:
      " D – Amazon VPC lets users provision a logically isolated section of the AWS Cloud where users can launchAWS resources in a virtual network that they define.",
  },
  
  {
    Question:
      "Which of the following is an AWS responsibility under the AWS shared responsibility model?",
    Ansewer1: "Configuring third-party applications",
    Ansewer2: "Maintaining physical hardware",
    Ansewer3: "Securing application access and data",
    Ansewer4: "Managing guest operating systems",
    Trueanswers: 2,
    explication:
      "  B – Maintaining physical hardware is an AWS responsibility under the AWS shared responsibility model.",
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
    explication:
      " B – To deliver content to users with lower latency, Amazon CloudFront uses a global network of points ofpresence (edge locations and regional edge caches) worldwide. ",
  },
  {
    Question:
      "How would a system administrator add an additional layer of login security to a user's AWS Management Console?",
  
    Ansewer1: "Use Amazon Cloud Directory",
    Ansewer2: "Audit AWS Identity and Access Management (IAM) roles",
    Ansewer3: "Enable multi-factor authentication",
    Ansewer4: "Enable AWS CloudTrail",
    Trueanswers: 3,
    explication:
      " C – Multi-factor authentication (MFA) is a simple best practice that adds an extra layer of protection on top of a username and password. With MFA enabled, when a user signs in to an AWS ManagementConsole, they will be prompted for their username and password (the first factor—what they know), as well as for an authentication code from their MFA device (the second factor—what they have). Taken together, these multiple factors provide increased security for AWS account settings and resources.  ",
  },
  {
    Question:
      "Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?",
    Ansewer1: "AWS Trusted Advisor",
    Ansewer2: "AWS CloudTrail",
    Ansewer3: "AWS X-Ray",
    Ansewer4: "AWS Identity and Access Management (AWS IAM)",
    Trueanswers: 2,
    explication:
      " B – AAWS CloudTrail helps users enable governance, compliance, and operational and risk auditing of their AWS accounts. Actions taken by a user, role, or an AWS service are recorded as events in CloudTrail. Events include actions taken in the AWS Management Console, AWS Command Line Interface (CLI), and AWS SDKs and APIs.",
  },
  {
    Question:
      "Which service would be used to send alerts based on Amazon CloudWatch alarms?",
  
    Ansewer1: "Amazon Simple Notification Service (Amazon SNS)",
    Ansewer2: "AWS CloudTrail",
    Ansewer3: "AWS Trusted Advisor",
    Ansewer4: "Amazon Route 53",
    Trueanswers: 1,
    explication:
      " A – Amazon SNS and Amazon CloudWatch are integrated so users can collect, view, and analyze metrics for every active SNS. Once users have configured CloudWatch for Amazon SNS, they can gain better insight into the performance of their Amazon SNS topics, push notifications, and SMS deliveries.",
  },
  
  {
    Question:
      "Where can a user find information about prohibited actions on the AWS infrastructure?",
  
    Ansewer1: "AWS Trusted Advisor",
    Ansewer2: "AWS Identity and Access Management (IAM)",
    Ansewer3: "AWS Billing Console",
    Ansewer4: "AWS Acceptable Use Policy",
    Trueanswers: 4,
    explication:
      "D – The AWS Acceptable Use Policy provides information regarding prohibited actions on the AWS infrastructure. ",
  }
];
const progress = document.getElementById("progress");
const btnNext = document.getElementById("btn-nex");
const btnNextQuestion = document.getElementById("btn-nex-question");
const component = document.querySelectorAll(".component-step");
const displayQst = document.querySelector("#question-container");
const infoo = document.querySelector("#infoo");
const start = document.querySelector(".start");
const progressBar = document.querySelector(".progress-bar");

var coo = 0;
var percentage = (1 * 100) / questions.length;

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
const score =document.querySelector(".score-para");
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
  progresss();
  console.log(q);
}

function progresss() {
  let width = `${index * percentage}%`;
  progressBar.style.width = width;
  progressBar.style.color = "#D5CEA3";
  progressBar.innerText = width;
}

let wrong = [];
let correct = [];
// let answer =0;
function nextQuestion(d) {
  let selectedAnswer = document.getElementById(d);
  if (d == questions[index].Trueanswers) {
    
    let corrects = {
      correctAnsewer: questions[index].Trueanswers,
      questions: questions[index].Question,
      explications: questions[index].explication,
    };
    correct.push(corrects)
    selectedAnswer.style.backgroundColor = "#008000b0";
    trueinsewer++;
  } else {
    let wrongs = {
      correctAnsewer: questions[index].Trueanswers,
      questions: questions[index].Question,
      explications: questions[index].explication,
    };

    wrong.push(wrongs);
    selectedAnswer.style.backgroundColor = "#ff000087";
    // for(let i=0;i<ansewercard.length;i++){
       let qq = questions[index].Trueanswers;
       let tre = document.getElementById(qq);
       tre.style.backgroundColor = "#008000b0"; 
      
    // }


  
      
  // });
    
  }
  // stop count down here
  setTimeout(function(){
    index++;
    if (index == questions.length) {    
      showresultat();
    }
    else  displayquestion(index);
    // restart count down here
  },2000)
}

function showresultat() {
  component[coo].classList.add("component-step-active");
  component[coo - 1].classList.remove("component-step-active");
  displayQst.style.display = "none";
  start.style.display = "none";
  showresultatt.style.display = "block";
  correctionansewer();
}

function correctionansewer() {
     score.innerHTML = '<div class="score-para">'
     +'<p>'+ 'YOUR SCORE : '+ trueinsewer * 10+' %'
 '</p>' + '</div>'; 
    
  for (let i = 0; i < wrong.length; i++) {
    result.innerHTML +=
      '<div class="resultat text-light" style="background-color:#ff000087;margin:10px 0" >' +
        '<p class="paragraph-question">'  +(i+1)+  ')' +  
        wrong[i].questions + '</p>'+
        '<p class="" style="color:#ffffffba;">' + wrong[i].explications +'</p>'
        + "</div>" 
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
    '<div class="resultat "  style="background-color:#008000b0;margin:10px 0" >' + '<p class="">'  +(i+1)+  ')' +  
    correct[i].questions + '</p>'+
    '<p style="color:#ffffffba;">' + correct[i].explications +'</p>'
    + "</div>"
  }
}

// function restartquiz(){
  
//   showresultatt.style.display = "none";
//   infoo.style.display = "block";
//   coo=0;
//   component[coo].classList.add("component-step-active");
//   component[coo - 2].classList.remove("component-step-active");


// }
