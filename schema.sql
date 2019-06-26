DROP DATABASE IF EXISTS tacos_db;
CREATE DATABASE tacos_db;
USE tacos_db;

-- Create the table tacos.
CREATE TABLE tacos (
  id int AUTO_INCREMENT,
  taco_name varchar(30) NOT NULL,
  shell varchar(30) NOT NULL,
  vegetarian boolean NOT NULL,
  pickUp boolean NOT NULL,
  PRIMARY KEY(id)
);
INSERT INTO tacos (taco_name, shell, vegetarian, pickUp) VALUES ("chicken taco", "soft/flour", false, false );
INSERT INTO tacos (taco_name, shell, vegetarian, pickUp) VALUES ("chili taco", "corn/hard", true, false );
INSERT INTO tacos (taco_name, shell, vegetarian, pickUp) VALUES ("Al pastor", "corn/soft", true, true );
INSERT INTO tacos (taco_name, shell, vegetarian, pickUp) VALUES ("La Taqueria", "corn/hard", false, false );