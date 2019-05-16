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
      console.log(`${result.id} |${result.productName} | ${result.departmentName} | ${result.price} `);
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
      connection.query("SELECT * FROM  products WHERE  ?", {
          id: answer.itemID
        },
        function (err, res) {
          if (err) throw err;
          if (parseInt(answer.quantity) <= res[0].stockQuantity) {
            let newQuantity = res[0].stockQuantity - parseInt(answer.quantity);
            connection.query("UPDATE products SET stockQuantity=? WHERE id =?", [
              newQuantity, answer.itemID
            ], function (err) {
              if (err) throw err;
              console.log(res);
              console.log("Your purchase was made successfully")
              console.log("Your total is  :", res[0].price * parseInt(answer.quantity));
            })

          } else {
            console.log("Sorry this item is out of stock!")
          }
          start();
        });
    });
}