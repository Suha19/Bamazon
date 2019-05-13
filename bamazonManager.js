var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
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
function viewProducts(){
    connection.query("SELECT * FROM products", function (err, result) {
        if (err) throw err;
        console.log(result);
    start();    
    });
}
function viewLowInventory(){
    connection.query("SELECT  FROM products WHERE ", 
            [
              {
                stockQuantity: 5
              }
            ],
            function (err, result) {  
                if (err) throw err;
    });
}
function addInventory(){
    console.log("addInventory")
}
function addProduct(){
    console.log("addProduct")
}