DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  id INTEGER NOT NULL AUTO_INCREMENT,
  productName VARCHAR(50) NOT NULL,
  departmentName VARCHAR(50) NOT NULL,
  price INTEGER NOT NULL,
  stockQuantity INTEGER NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ('lip liner', 'MAC', '20', '150');
INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ('lip color', 'FOREVER', 25, 300);
INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ('fundation', 'REVLON', 45, 50);
INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ('loosepowder', 'MAYBELLINE', 15, 10);