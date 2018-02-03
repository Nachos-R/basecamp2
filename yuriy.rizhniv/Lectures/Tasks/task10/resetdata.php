<?php

    $connect = new PDO("mysql:host=localhost;dbname=task10_db", 'root', 'novocaine');
    
    $sql = "DELETE FROM users";

    $connect->query($sql);
    echo json_encode("Records deleted successfully");
