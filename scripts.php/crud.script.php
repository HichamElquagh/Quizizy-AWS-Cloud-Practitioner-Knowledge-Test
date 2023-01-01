<?php
include_once '../classes/question.class.php';

// this file  for access to the data from classes php and also to be   intermidiary between js and php files 

// for getquestion 
$getmatches = new Question();
$getmatchess = $getmatches->getquestion();
echo json_encode($getmatchess);





























?>