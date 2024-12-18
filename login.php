<?php
session_start();
include('config.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    $sql = "SELECT * FROM users WHERE username = '$username'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);

    if ($row && password_verify($password, $row['password'])) {
        $_SESSION['user_id'] = $row['id'];
        $_SESSION['username'] = $row['username'];
        $_SESSION['full_name'] = $row['full_name']; // Assuming you have a full name column
        header("Location: exam_selection.php"); // Redirect to the exam selection page
        exit();
    } else {
        echo "<h1>Invalid username or password.</h1>";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Start Exam</title>
    <link rel="stylesheet" href="exam5.css">
    <style>
    body {
        height: 100vh;
        display: flex;
        align-items: center;
      }
      h1 {
        font-family: sans-serif;
        font-size: 50px;
        line-height: 1.3;
        width: 100%;
        padding: 30px;
        text-align: center;
        color: red;
      }
      button {
        width: 50px;
        height: 20px;
        margin: 10px;
      }
      textarea {
        width: 300px;
        height: 100px;
      }
    </style>
</head>
<body>
    
</body>
</html>
