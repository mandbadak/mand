# mand
help

i have given the screen shot , Create that type of directory structure.
in app.js we have entire code of our backend 
the way your signup page  is designed , in that way make your users table schema 

CREATE DATABASE ecommerce_db;

USE ecommerce_db;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    address TEXT,
    contact_no VARCHAR(15)
);

drop table users;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address TEXT NOT NULL,
    sex ENUM('male', 'female', 'other') NOT NULL,
    contact_no VARCHAR(10) NOT NULL
);

select * from users;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    address TEXT,
    sex ENUM('Male', 'Female', 'Other') NOT NULL,
    contact_number VARCHAR(15) NOT NULL,
    password VARCHAR(255) NOT NULL
);

select * from users;

