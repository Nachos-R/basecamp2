<?php
try{
	$connect = new PDO("mysql:host=localhost;dbname=task10_db", 'root', 'novocaine');

	$i = 0;
	
	foreach($connect->query('SELECT * FROM users') as $row) {
		
    	$users[$i++] = 
    	  (object)[ 'id' => $row['ID'], 'name' => $row['name'], 'city' => $row['city'], 'phone' => $row['phone'], 'img' => $row['logo_url'] ];
}
	
	echo json_encode($users);
}
catch(PDOException $e){
	echo json_encode($sql . $e->getMessage());
}

