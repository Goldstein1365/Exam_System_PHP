<?php
session_start();
include('config.php'); // Include your database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $full_name = mysqli_real_escape_string($conn, $_POST['full_name']);
    $score = mysqli_real_escape_string($conn, $_POST['score']);
    $subject = mysqli_real_escape_string($conn, $_POST['subject']); // Capture the subject taken
    $percentage = mysqli_real_escape_string($conn, $_POST['percentage']);

    // Insert the result into the database
    $sql = "INSERT INTO exam_results (username, full_name, score, percentage, subject) VALUES ('$username', '$full_name', '$score', '$percentage', '$subject')";
    
    if (mysqli_query($conn, $sql)) {
        echo "Result saved successfully!";
        updateResultsHTML(); // Call function to update the HTML file
    } else {
        echo "Error: " . mysqli_error($conn);
    }
}

function updateResultsHTML() {
    global $conn;
    // Fetch all results from the database
    $sql = "SELECT * FROM exam_results ORDER BY exam_taken_at DESC";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $htmlContent = '<!DOCTYPE html><html><head><title>Exam Results</title></head><body>';
        $htmlContent .= '<h1>All User Exam Results <?php session_start(); ?></h1>';
        $htmlContent .= '<table border="1" cellpadding="10"><tr><th>Username</th><th>Full Name</th><th>Score</th><th>Percentage</th><th>Date and Time</th><th>Subject</th></tr>';

        // Loop through results and generate the HTML table
        while ($row = mysqli_fetch_assoc($result)) {
            $formattedDate = date("Y-m-d H:i:s", strtotime($row['exam_taken_at'])); // Format date and time
            $htmlContent .= '<tr>';
            $htmlContent .= '<td>' . $row['username'] . '</td>';
            $htmlContent .= '<td>' . $row['full_name'] . '</td>';
            $htmlContent .= '<td>' . $row['score'] . '</td>';
            $htmlContent .= '<td>' . $row['percentage'] . '%</td>';
            $htmlContent .= '<td>' . $formattedDate . '</td>'; // Show date and time
            $htmlContent .= '<td>' . $row['subject'] . '</td>';
            $htmlContent .= '</tr>';
        }
        $htmlContent .= '</table>';
        $htmlContent .= '</body></html>';

        // Write the HTML content to a file
        file_put_contents('results.php', $htmlContent);
    }
}
?>
