<?php
include_once '../classes/question-answer.class.php';
include_once '../classes/database.class.php';


// this file  for access to the data from classes php and also to be   intermidiary between js and php files 

// for getquestion 
   
    $getquetions_answer = new Question();
    $getquestion_answers = $getquetions_answer->getquestion();
    echo json_encode($getquestion_answers);
    


    if(isset($_POST['score'])) saveScore();
    function saveScore(){
        $socre = $_POST['score'];
        $database = new Database();
        $sql ="INSERT INTO `history`(`score`) VALUES ($socre)";
        $stmt = $database->connect()->prepare($sql);
        $stmt->execute();
    }
     






















?>