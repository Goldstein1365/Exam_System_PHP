<?php
session_start(); // Start session to access session variables

// Check if all necessary data is available
if (isset($_SESSION['username'], $_SESSION['full_name'], $_POST['score'], $_POST['percentage'], $_POST['subject'])) {
    $username = $_SESSION['username'];
    $full_name = $_SESSION['full_name'];
    $score = $_POST['score'];
    $percentage = $_POST['percentage'];
    $subject = $_POST['subject'];
    $exam_taken_at = date("Y-m-d H:i:s");

    // Connect to the database
    $conn = new mysqli("localhost", "root", "", "exam_system");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Insert the result into the database
    $stmt = $conn->prepare("INSERT INTO exam_results (username, full_name, score, percentage, exam_taken_at, subject) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssddss", $username, $full_name, $score, $percentage, $exam_taken_at, $subject);

    if ($stmt->execute()) {
        echo "Result saved successfully.";
        header('Location: results_page.php'); // Redirect to results page if needed
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Required fields are missing.";
}
?>
