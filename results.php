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
            <td>gospel</td>
            <td>Gospel</td>
            <td>0</td>
            <td>0.00%</td>
            <td>2024-10-17 15:17:12</td>
            <td>Physics</td>
        </tr>
        <tr>
            <td>gospel</td>
            <td>Gospel</td>
            <td>0</td>
            <td>0.00%</td>
            <td>2024-10-17 15:16:08</td>
            <td>Physics</td>
        </tr>
        <tr>
            <td><?php echo $_SESSION['username']; ?></td>
            <td><?php echo $_SESSION['full_name']; ?></td>
            <td>3</td>
            <td>10.00%</td>
            <td>1970-01-01 01:00:00</td>
            <td>eet224</td>
        </tr>
        <tr>
            <td><?php echo $_SESSION['username']; ?></td>
            <td><?php echo $_SESSION['full_name']; ?></td>
            <td>2</td>
            <td>6.67%</td>
            <td>1970-01-01 01:00:00</td>
            <td>chemistry</td>
        </tr>
        <tr>
            <td><?php echo $_SESSION['username']; ?></td>
            <td><?php echo $_SESSION['full_name']; ?></td>
            <td>1</td>
            <td>3.33%</td>
            <td>1970-01-01 01:00:00</td>
            <td>html</td>
        </tr>
        <tr>
            <td><?php echo $_SESSION['username']; ?></td>
            <td><?php echo $_SESSION['full_name']; ?></td>
            <td>10</td>
            <td>33.33%</td>
            <td>1970-01-01 01:00:00</td>
            <td>html</td>
        </tr>
    </table>
</body>

</html>