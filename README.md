# Bamazon
* Bamazon app is an Amazon-like storefront. Using MySQL the app will take in orders from customers and deplete        stock from the store's inventory. 

# Bamazon SQL:
* On bamazon DB I have products table contain the following columns:
![image](https://user-images.githubusercontent.com/47680905/57798433-5888fc80-7712-11e9-8f3d-3fe2bdb99222.png)

# Bamazon Customer:
* When running bamazonCustomer.js. it will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
![image](https://user-images.githubusercontent.com/47680905/57798674-e664e780-7712-11e9-9f0f-c5212f094c01.png)

* The app should then prompt users with two messages.
  * The first should ask them the ID of the product they would like to buy.
  * The second message should ask how many units of the product they would like to buy.

# Bamazon Manager:
* When running bamazonManager.js. The application will prompt options:
  * View Products for Sale : If a manager selects View Products for Sale, the app should list every available item:    the item IDs, names, prices, and quantities.

  * View Low Inventory : If a manager selects View Low Inventory, then it should list all items with an inventory     count lower than five.

  * Add to Inventory : If a manager selects Add to Inventory, your app should display a prompt that will let the      manager "add more" of any item currently in the store.

  * Add New Product : If a manager selects Add New Product, it should allow the manager to add a completely new      product to the store.

