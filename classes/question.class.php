<?php

include_once 'database.class.php';


class Question
{



    public function getquestion()
    {
        $database = new Database();
        $sql = "SELECT id,questions FROM question";
        $stmt = $database->connect()->prepare($sql);
        $stmt->execute();
        $dbQuestion = $stmt->fetchAll(PDO::FETCH_OBJ);
        return $dbQuestion;
    }
}

// $db = new Question();
// $dbs = $db->getquestion();
// echo json_encode($dbs)
// echo '<pre>';
// var_dump($dbs);
// echo '<pre>';











?>