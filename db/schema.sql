### Schema

CREATE DATABASE food_db;
USE food_db;

CREATE TABLE food
(
	id int NOT NULL AUTO_INCREMENT,
	food_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
