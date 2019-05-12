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
    console.log("connected as id " + connection.threadId);
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
// viewProducts(){
//     console.log("viewProducts")
// }
// viewLowInventory(){
//     console.log("viewLowInventory")
// }
// addInventory(){
//     console.log("addInventory")
// }
// addProduct(){
//     console.log("addProduct")
// }