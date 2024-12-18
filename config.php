<?php
$servername = "localhost"; 
$username = "root";
$password = "";
$dbname = "exam_system";

// create connection
$conn = mysqli_connect($servername, $username,$password, $dbname);

// check conection 
if (!$conn){
    die("Connectio failed: " . mysqli_connect_error());
}
?>