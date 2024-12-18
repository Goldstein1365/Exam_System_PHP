<?php
include('config.php'); // Include database connection

// Array of users to be added manually
$users = [
    ['username' => 'gospel', 'password' => 'password123', 'email' => 'gospel@example.com', 'full_name' => 'Gospel'],
    ['username' => 'john_doe', 'password' => 'securepass', 'email' => 'john@example.com', 'full_name' => 'John Doe'],
    ['username' => 'jane_smith', 'password' => 'mypassword', 'email' => 'jane@example.com', 'full_name' => 'Jane Smith'],
];

// Loop through each user and insert into the database
foreach ($users as $user) {
    $username = $user['username'];
    $password = password_hash($user['password'], PASSWORD_DEFAULT); // Hash the password
    $email = $user['email'];
    $full_name = $user['full_name'];

    // SQL query to insert the user into the database
    $sql = "INSERT INTO users (username, password, email, full_name) VALUES ('$username', '$password', '$email', '$full_name')";

    if (mysqli_query($conn, $sql)) {
        echo "User $username created successfully!<br>";
    } else {
        echo "Error creating user $username: " . mysqli_error($conn) . "<br>";
    }
}
?>