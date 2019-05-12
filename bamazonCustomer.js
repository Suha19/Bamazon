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
    // afterConnection();
    // start();
    console.log("hi")
    customerPurches();
  });
  // connection.end();
//   function start() {
//   inquirer
//     .prompt({
//       name: "postOrBid",
//       type: "list",
//       message: "Please enter the [ID] of the product you want to buy and the [quantity] of the product you need?",
//       choices: ["ID", "QUANTITY", "EXIT"]
//     })
//     .then(function(answer) {
//       // based on their answer, either call the bid or the post functions
//       if (answer.idOrQuantity === ID) {
//         console.log(ID)
//         buyPrudect();
//       }
//       else{
//         connection.end();
//       }
//     });
// }
function customerPurches() {
  // prompt for info about the item being put up for auction
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
        message: "How many of this item you need to?"
        // validate: function(value) {
        //   if (isNaN(value) === false) {
        //     return true;
        //   }
        //   return false;
        // }
      }
    ])
    .then(function(answer) {
      // when finished prompting, insert a new item into the db with that info
      // connection.query(
      //   "INSERT INTO auctions SET ?",
      //   {
      //     item_name: answer.item,
      //     category: answer.category,
      //     starting_bid: answer.startingBid || 0,
      //     highest_bid: answer.startingBid || 0
      //   },
      //   function(err) {
      //     if (err) throw err;
      //     console.log("Your auction was created successfully!");
      //     // re-prompt the user for if they want to bid or post
      //     start();
      //   }
      // );
    });
}
