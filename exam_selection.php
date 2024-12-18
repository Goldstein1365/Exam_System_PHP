<?php
session_start();

if (!isset($_SESSION['username'])) {
    header("Location: login.html"); // Redirect to login if not logged in
    exit();
}

// List of available exams
$exams = [
    'html' => 'HTML',
    'java' => 'JAVA',
    'physics' => 'Physics',
    'chemistry' => 'Chemistry',
    'eet224' => 'EET224',
    'css' => 'CSS',
    'mce1' => 'MCE320',
    'mce' => 'MCE220'
];
?>

<!DOCTYPE html>
<html>
<head>
    <title>Exam Selection</title>
    <link rel="stylesheet" href="exam5.css">

  <style>
    .exam_select{
      text-align: center;
      display: inline-block;
      margin: 50px 35%;
      height: 70%;
      background: rgba(0,0,0,0.6);
      color: aliceblue;
      border-radius: 13px;
      padding: 50px 60px;
    }
    h1{
      font-size: 20px;
      margin-bottom: 30px;
      text-transform: uppercase;
    }
    p{
      font-size: 19px;
      font-family: sofia, sans-serif;
      /* margin-top: 20px; */
    }
    label{
      font-size: 19px;
      text-transform: capitalize;
    }
    select{
      margin-top: 25px;
      outline: none;
      padding-inline-start: 3px 10px;
      overflow: hidden;
    }
    input[type="submit"]{
      margin-top: 15px;
      padding: 5px 15px;
      outline: none;
      border: 1px solid #fff;
      font-size: 17px;
      border-radius: 7px;
      color: #fff;
      background: transparent;
      cursor: pointer;
    }
    input[type="submit"]:hover{
      background: linear-gradient(to right, #008080, #40e0d0);
    }
  </style>
</head>
<body>
    <section class="exam_select">
    <h1>Welcome, <?php echo $_SESSION['full_name']; ?>!</h1>
    <p>Select an exam to begin:</p>
    <form action="start_exam.php" method="POST">
        <label for="exam">Choose an exam:</label>
        <select name="exam" id="exam">
            <?php
            foreach ($exams as $code => $name) {
                echo "<option value='$code'>$name</option>";
            }
            ?>
        </select>
        <br><br>
        <input type="submit" value="Proceed">
    </form>
    </section>
</body>
</html>
