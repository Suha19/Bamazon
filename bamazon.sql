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
VALUES ('LIP COLOR','MAC',20,50);
INSERT INTO products (productName,departmentName,price,stockQuantity)
VALUES ('LIP COLOR','REVLON',10,35);
INSERT INTO products (productName,departmentName,price,stockQuantity)
VALUES ('LIP COLOR','FOREVER',20,20);
INSERT INTO products (productName,departmentName,price,stockQuantity)
VALUES ('FUNDATION','BOBBI',45,60);
INSERT INTO products (productName,departmentName,price,stockQuantity)
VALUES ('CONCEALER','MAC',20,3);
INSERT INTO products (productName,departmentName,price,stockQuantity)
VALUES ('EYE LINER','ANASTASIA',20,4);
INSERT INTO products (productName,departmentName,price,stockQuantity)
VALUES ('HIGHLIGHTER','BECCA',15,10);
INSERT INTO products (productName,departmentName,price,stockQuantity)
VALUES ('EYE SHADOW','MILANI',10,1);
