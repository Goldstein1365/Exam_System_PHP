CREATE DATABASE exam_system;

USE exam_system;

CREATE TABLE users (
id INT(11) AUTO_INCREMENT PRIMARY KEY, 
username VARCHAR(50) NOT NULL,
password VARCHAR(255) NOT NULL,
email VARCHAR(100),
full_name VARCHAR(100)
);

CREATE TABLE exam_results (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100),
    full_name VARCHAR(255),
    score INT,
    percentage FLOAT,
    exam_taken_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);