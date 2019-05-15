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
  // console.log("connected as id " + connection.threadId);
  start();
});

function start() {
  connection.query("SELECT * FROM products", function (err, result) {
    if (err) throw err;
    // console.log(result);
    result.forEach(result => {
      console.log(`${result.id} |${result.productName} | ${result.departmentName} | ${result.price} | ${result.stockQuantity}`);
    });
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
    .prompt([
      {
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
    
      connection.query("UPDATE products SET WHERE ?", { products: answer.itemID },
      function (err) {
          if (err) throw err;
          let newQuantity = (products.stockQuantity - answer.quantity);
          console.log(`${result.id} |${result.productName} | ${result.departmentName} | ${result.price} | ${newQuantity}`);
          console.log("Your purchase was successful!");
          start();
      }
  );
});
  }


