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
  connection.query("SELECT * FROM products", function (err, result) {
    if (err) throw err;
    console.log(result);
  inquirer
    .prompt({
      name: "customerChoice",
      type: "list",
      message: "Would you like to buy something?",
      choices: ["Buy", "Exit"]
    })
    .then(function (answer) {
      // based on their answer, either call the buy or exit
      if (answer.customerChoice === "Buy") {
        customerBuy();
      } else {
        connection.end();
      }
    });
  });
}

function customerBuy() {
  // prompt for info about what item the customer wants to buy
  inquirer
    .prompt([{
        name: "itemID",
        type: "input",
        message: "Please enter the ID of the item you would like to buy :"
      },

      {
        name: "quantity",
        type: "input",
        message: "Please enter the quantity you need :"

      }
      
    ])
    .then(function (answer) {
      connection.query(
        "UPDATE products WHERE id = answer.itemID ?",
        {
         
          // if (answer.quantity < stockQuantity){
          // stockQuantity: stockQuantity-answer.quantity
          // console.log("Your purchase was made successfully!");
          // start();
          // }else{
          //   console.log("Insufficient quantity!")
          //   connection.end();
          // }
        },
        function(err) {
          if (err) throw err;
          
          // re-prompt the user for if they want to do another purchase
          
        }
      );
    });
}


