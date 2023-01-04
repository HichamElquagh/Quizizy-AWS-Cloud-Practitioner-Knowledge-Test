<?php

include_once 'database.class.php';


class Question
{



    public function getquestion()
    {
        $database = new Database();
        $sql ="SELECT question.id,question.questions ,question.answer1 ,question.answer2,question.answer3,question.answer4,answer.correct_id, answer.correct_answer,answer.justifications FROM question INNER JOIN answer ON question.id=answer.id";
        $stmt = $database->connect()->prepare($sql);
        $stmt->execute();
        $dbQuestion = $stmt->fetchAll(PDO::FETCH_OBJ);
        return $dbQuestion;
    }
}













?>