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
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    displayProducts(); 
    start();
  });
  
  function start() {
     
    inquirer
      .prompt({
        name: "customerChoice",
        type: "list",
        message: "Would you like to buy something?",
        choices: ["Buy", "Exit"]
      })
      .then(function(answer) {
        // based on their answer, either call the buy or exit
        if (answer.customerChoice === "Buy") {
          customerBuy();
        }else{
          connection.end();
        }
      });
  
  }

function customerBuy() {
  
  // prompt for info about what item the customer wants to buy
  inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "What is the item you would like to buy?"
      },
      
      {
        name: "quantity",
        type: "input",
        message: "How many of this item you need to buy?"
        
      }
    ])
    .then(function(answer) {
     
    });
}
// function deleteProduct() {
//   console.log("Deleting all strawberry icecream...\n");
//   connection.query(
//     "DELETE FROM products WHERE ?",
//     {
//       flavor: "strawberry"
//     },
//     function(err, res) {
//       console.log(res.affectedRows + " products deleted!\n");
//       // Call readProducts AFTER the DELETE completes
//       readProducts();
//     }
//   );
// }
function displayProducts() {
  connection.query("SELECT * FROM products", function(err, result) {
    if (err) throw err;
    console.log(result);
  });
}


