<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <link rel="stylesheet" href="assets/css/style.css" />

  <title></title>
</head>

<body>
  <!-- <ul>
        <li><a href="#">Contact</a></li>
        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
    </ul> -->
  <!-- <div >
        
    </div> -->

  <!-- NAVBAR -->
  <nav>
    <div class="navBar">
      <!-- <div class="logo"><a href="index.html">Quizizy</a></div> -->
      <img class="image-quiziz" src="assets/img/Quizziz_Logo-white.png" alt="logo" srcset="">
      <div class="links">
        <div class="icons"><a href="#">Contact</a></div>
        <div class="icons"><a href="#">Info</a></div>
        <div class="icons"><a href="#"><i class="fab fa-instagram"></i></a></div>
        <div class="icons"><a href="#"><i class="fab fa-twitter"></i></a></div>
      </div>
    </div>
  </nav>
  <div class="container">
    <div class="stepper-component">
      <div class="progress" id="progress"></div>
      <div class="component-step component-step-active">
        <p>information</p>
      </div>
      <div class="component-step ">
        <p>Questionnaire</p>
      </div>
      <div class="component-step ">
        <p>Résultat
        </p>
      </div>
    </div>
  </div>

  <div class="container" id="infoo">
    <div id="parent-information" class="parent-information-active">
      <div class="information">
        <h3 class="title-info">information</h3>
        <p class="info-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          laborum, doloremque at aliquid itaque facilis ipsum dolor quia,
          placeat minima fuga molestiae repudiandae non veniam odit! In
          aperiam necessitatibus veritatis Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ex, earum
          magni fuga voluptate id deserunt cupiditate odio dolore nemo vitae optio eum tenetur. Quidem nemo quibusdam
          esse qui doloremque?
        </p>
        <div class="info-btn d-flex justify-content-end flex-wrap">
          <button id="btn-nex" class="btn-next">Next</button>
        </div>
      </div>

    </div>
  </div>

  <div class="start container">
    <div class="start-card" onclick="startQuiz();">
      <h1>Start Quiz</h1>
    </div>
  </div>
  <!-- <div class="container">
        
    </div> -->

  <div class="question container" id="question-container">
    <div class="container-bar">
      <div class="progress-bar" data-stagees="10"></div>
    </div>
    <div class="d-flex flex-column align-content-between">
      <div class="question-card">
        <h1>Lorem ipsum, dolor sit amet consectetur adipi</h1>
      </div>
      <div id="card" class="">
        <!-- <div id="progress" class="progress"></div> -->
        <div class="answer1-card" onclick="nextQuestion(1);" id="1"></div>
        <div class="answer1-card" onclick="nextQuestion(2);" id="2"></div>
        <div class="answer1-card" onclick="nextQuestion(3);" id="3"></div>
        <div class="answer1-card" onclick="nextQuestion(4);" id="4"></div>
      </div>
      <div class="info-btn d-flex justify-content-end flex-wrap">
        <button id="btn-nex-question" class="btn-next" onclick="showresultat();">Next</button>
      </div>
    </div>
  </div>
  <div class=" container-resultat container">
    <div class="parent-result-score">
      <div class="score-para ">
        <p>
          YOUR SCORE :
        </p>
      </div>
      <div class="btn-restart " onclick="location. reload();">
        <!-- <button calss="restart" onclick="location. reload();">
                Try again 
            </button> -->
        Try again
      </div>
    </div>
    <div class="resultat">

    </div>

  </div>

  <script src="./assets/js/scripts.js"></script>
</body>

</html>