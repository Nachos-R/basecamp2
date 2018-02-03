<?php
try{
	$connect = new PDO("mysql:host=localhost;dbname=task10_db", 'root', 'novocaine');

	header("Content-Type: application/json");

	$data = json_decode(stripslashes(file_get_contents("php://input")));

	$name = $data->name;
	$city = $data->city;
	$phone = $data->phone;
	$logo = $data->img;

	$sql ="INSERT INTO users  VALUES (NULL, '$name', '$city', '$phone', '$logo')";

	$connect->exec($sql);

	$last_id = $connect->lastInsertId();
	
	echo json_encode($last_id);
}
catch(PDOException $e){
	echo json_encode($sql . $e->getMessage());
}


	
	 
