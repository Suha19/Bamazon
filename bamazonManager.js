var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "",
    database: "bamazon_db"
});
connection.connect(function (err) {
    if (err) throw err;
    start();
});

function start() {

    inquirer
        .prompt({
            name: "managerChoice",
            type: "list",
            message: "Please select your option :",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product", "Exit"]
        })
        .then(function (answer) {

            if (answer.managerChoice === "View Products for Sale") {
                viewProducts();
            } else if (answer.managerChoice === "View Low Inventory") {
                viewLowInventory();
            } else if (answer.managerChoice === "Add to Inventory") {
                addInventory();
            } else if (answer.managerChoice === "Add New Product") {
                addProduct();
            } else {
                connection.end();
            }
        });
}

function viewProducts() {
    connection.query("SELECT * FROM products", function (err, result) {
        if (err) throw err;
        // console.log(result);
        result.forEach(result => {
            console.log(`${result.id} |${result.productName} | ${result.departmentName} | ${result.price} | ${result.stockQuantity}`);
        });
    });
}


function viewLowInventory() {
    const minStockQuantity = 5;
    connection.query("SELECT * FROM products", function (err, result) {
        if (result.stockQuantity < minStockQuantity) {
            if (err) throw err;
            result.forEach(result => {
                console.log(`${result.id} |${result.productName} | ${result.departmentName} | ${result.price} | ${result.stockQuantity}`);
            });

        } else {
            console.log("you do not have low inventory!")
        }
    });
}

function addInventory() {
    inquirer
        .prompt([{
                name: "itemID",
                type: "input",
                message: "Please enter the ID of the product you would like to add more to :"
            },
            {
                name: "quantity",
                type: "input",
                message: "What is the new quantity?"
            }
        ])
        .then(function (answer) {
            connection.query("UPDATE products SET WHERE ?", {
                    products: answer.itemID
                },
                function (err) {
                    if (err) throw err;
                    let newQuantity = (products.stockQuantity + answer.quantity);
                    console.log(`${result.id} |${result.productName} | ${result.departmentName} | ${result.price} | ${newQuantity}`);
                    console.log("Your add Inventory was successful!");
                    start();
                }
            );
        });
}

