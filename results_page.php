<!DOCTYPE html>
<html>

<head>
    <title>Exam Results</title>
</head>

<body>
    <h1>All User Exam Results <?php session_start(); ?></h1>
    <table border="1" cellpadding="10">
        <tr>
            <th>Username</th>
            <th>Full Name</th>
            <th>Score</th>
            <th>Percentage</th>
            <th>Date and Time</th>
            <th>Subject</th>
        </tr>
        <tr>
            <td><?php echo $_SESSION['username']; ?></td>
            <td><?php echo $_SESSION['full_name']; ?></td>
            <td>27</td>
            <td>90%</td>
            <td>2024-10-17 13:41:57</td>
            <td>html</td>
        </tr>
    </table>
</body>

</html>