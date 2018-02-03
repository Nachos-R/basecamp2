<?php
try{
	$connect = new PDO("mysql:host=localhost;dbname=task10_db", 'root', 'novocaine');

	header("Content-Type: application/json");

	$data = json_decode(file_get_contents("php://input"));

	$message = $data->message;
	$id = intval($data->id);

	$sql = "INSERT INTO messages  VALUES (NULL, '$id', '$message')";

	$connect->exec($sql);
	
	echo json_encode("Message added successfully");
}
catch(PDOException $e){
	echo json_encode($sql . $e->getMessage());
}
