<?php
try{
	$connect = new PDO("mysql:host=localhost;dbname=task10_db", 'root', 'novocaine');

	$i = 0;
	
	foreach($connect->query('SELECT * FROM messages') as $row) {
		
    	$messages[$i++] = 
    	  (object)[ 'id' => $row['ID'], 'user_id' => $row['user_id'], 'message' => $row['message'] ];
	}
	
	echo json_encode($messages);
}
catch(PDOException $e){
	echo json_encode($sql . $e->getMessage());
}
