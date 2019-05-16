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
        result.forEach(result => {
            console.log(`\n${result.id} |${result.productName} | ${result.departmentName} | ${result.price} | ${result.stockQuantity}`);
        });
        start();
    });

}


function viewLowInventory() {
    const minStockQuantity = 5;
    connection.query("SELECT * FROM products WHERE stockQuantity <=? ", [minStockQuantity], function (err, results) {
        if (err) throw err;
        results.forEach(result => {
            console.log(`${result.id} |${result.productName} | ${result.departmentName} | ${result.price} | ${result.stockQuantity}`);
        });
        start();
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
            connection.query("SELECT * FROM  products WHERE  ?", {
                    id: answer.itemID
                },
                function (err, res) {
                    if (err) throw err;
                    let newQuantity = res[0].stockQuantity + parseInt(answer.quantity);
                    connection.query("UPDATE products SET stockQuantity=? WHERE id =?", [
                        newQuantity, answer.itemID
                    ], function (err) {
                        if (err) throw err;
                        console.log("\nYour add inventory was made successfully")
                        console.log("Your new quantity is  :", newQuantity);
                        start();
                    })
                    
                    
                });
               
        });
        
}

function addProduct() {

    inquirer
        .prompt([{
                name: "itemName",
                type: "input",
                message: "What is your new product?"
            },
            {
                name: "depName",
                type: "input",
                message: "What is the prand of your new product?"
            },
            {
                name: "itemPrice",
                type: "input",
                message: "What would be the price ?",
            },
            {
                name: "itemQuantity",
                type: "input",
                message: "How many of this item do you have ?",
            }
        ])
        .then(function (answer) {
            // when finished prompting, insert a new item into the db with that info
            connection.query(
                "INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES (?, ?, ?, ?) ", [
                    answer.itemName,
                    answer.depName,
                    answer.itemPrice,
                    answer.itemQuantity
                ],
                function (err) {
                    if (err) throw err;
                    console.log("Your Item was added successfully!");
                    start();
                }
            );
        });

}