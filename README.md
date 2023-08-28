# Fullstack-CRUD-and-Movielist-API
# Getting Started
 create your database (MySql) and then create table like this script
 
 ```bash
CREATE DATABASE `portfolio`

CREATE TABLE `customers` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `create_date` datetime DEFAULT NULL,
  `update_date` datetime DEFAULT NULL,
  `profile_img` varchar(5000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(5000) NOT NULL,
  `password` varchar(5000) NOT NULL,
  `login_date` datetime DEFAULT NULL,
  `verify_code` varchar(5000) DEFAULT NULL,
  `email` varchar(5000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8;


```

# DB Connection
create your .env file and add your variable for DB connection like this 
-DB_NAME = *your DB Name.*\
-DB_HOSTNAME = *your DB Host.*\
-DB_USERNAME = *your DB Username.*\
-DB_PASSWORD = *your DB Password.*\
-DB_PORT = *your DB Port.*
