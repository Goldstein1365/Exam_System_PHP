<?php
session_start();

if (!isset($_SESSION['username'])) {
    header("Location: login.html"); // Redirect to login if not logged in
    exit();
}

if (isset($_POST['exam'])) {
    $exam_code = $_POST['exam']; // Get the selected exam code from the form
    header("Location: exam5.html?exam=$exam_code"); // Redirect to the exam page with exam code
    exit();
} else {
    echo "No exam selected!";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Start Exam</title>
    <link rel="stylesheet" href="exam5.css">
</head>
<body>
    
</body>
</html>
