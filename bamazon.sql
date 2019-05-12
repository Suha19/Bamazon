DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  productName VARCHAR(50) NOT NULL,
  departmentName VARCHAR(50) NOT NULL,
  price INT NOT NULL,
  stockQuantity INT NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (productName,departmentName,price,stockQuantity)
VALUES ('lip liner','MAC',20,3)