/*
Using what you have learned from the Functions section, I want you to do the following.

Your assignment is to build a simple object that contains multiple properties and functions.

Here are the things that should be included:

1. An object named "restaurantMenu"

2. Properties that contains

    a. The name of the restaurant

    b. The items that the restaurant sells which includes the names and prices. Price can just be a number. Limit this to 5 items.

    c. A method that lists out all the menu items with their prices via an alert.

    d. A method that allows the user to select which menu item that the user wants to order via a prompt. Simply alert the menu item back to the user.
*/

let restaurantMenu = {
    restaurantName: "Ramen Pizzeria",
    restaurantItems: {
        item1: {
            name: "13.5 inch Pepperoni Ramen Pizza",
            price: 12
        },
        item2: {
            name: "13.5 inch Vegetarian Ramen Pizza",
            price: 9
        },
        item3: {
            name: "13.5 inch Vegan Ramen Pizza",
            price: 8
        },
        item4: {
            name: "Ramen Beef Burger with fries and drink",
            price: 6
        },
        item5: {
            name: "Ramen Chicken Burger with fries and drink",
            price: 5
        }
    },
    itemList: function() {
        alert("Welcome to Ramen Pizzeria! Here are the following items that we are offering for today!" + "\n\n" +
        "item1: " + this.restaurantItems.item1.name + " | " + "price: $" + this.restaurantItems.item1.price + "\n" +
        "item2: " + this.restaurantItems.item2.name + " | " + "price: $" + this.restaurantItems.item2.price + "\n" +
        "item3: " + this.restaurantItems.item3.name + " | " + "price: $" + this.restaurantItems.item3.price + "\n" +
        "item4: " + this.restaurantItems.item4.name + " | " + "price: $" + this.restaurantItems.item4.price + "\n" +
        "item5: " + this.restaurantItems.item5.name + " | " + "price: $" + this.restaurantItems.item5.price);
    },
    selectItem: function() {
        let itemSelected = prompt("What would you like to order? (please enter the item number i.e 'item1')");
        
        switch(itemSelected) {
            case "item1": 
                alert("You have selected a " + this.restaurantItems.item1.name + ". This will cost you $" + this.restaurantItems.item1.price);
                break;
            case "item2": 
                alert("You have selected a " + this.restaurantItems.item2.name + ". This will cost you $" + this.restaurantItems.item2.price);
                break;
            case "item3": 
                alert("You have selected a " + this.restaurantItems.item3.name + ". This will cost you $" + this.restaurantItems.item3.price);
                break;
            case "item4": 
                alert("You have selected a " + this.restaurantItems.item4.name + ". This will cost you $" + this.restaurantItems.item4.price);
                break;
            case "item5": 
                alert("You have selected a " + this.restaurantItems.item5.name + ". This will cost you $" + this.restaurantItems.item5.price);
                break;
            default:
                alert("We could not match the item with what you have entered, please try again.");
        }
    }
}

restaurantMenu.itemList();

restaurantMenu.selectItem();

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||Refactored version|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

let restaurantMenu = {
    restaurantName: "Ramen Pizzeria",
    restaurantItems: [
        {
            name: "13.5 inch Pepperoni Ramen Pizza",
            price: 12
        },
        {
            name: "13.5 inch Vegetarian Ramen Pizza",
            price: 9
        },
        {
            name: "13.5 inch Vegan Ramen Pizza",
            price: 8
        },
        {
            name: "Ramen Beef Burger with fries and drink",
            price: 6
        },
        {
            name: "Ramen Chicken Burger with fries and drink",
            price: 5
        }
    ],

    itemList: function() {
        let menuList = "Welcome to Ramen Pizzeria! Here are the following items that we are offering for today!" + "\n\n";
        for(let i = 0; i <= 4; i++) {
            menuList += i + ": " + this.restaurantItems[i].name + " | price: $" + this.restaurantItems[i].price + "\n";
        }
        alert(menuList);

        let answer = prompt("What would you like to order? (please enter the item number)");
        this.selectedMenuItem(answer);
    },
    selectedMenuItem: function(number) {
        if(number >= 0 && number <= 4) {
            alert("You have selected a " + this.restaurantItems[number].name + ". This will cost you $" + this.restaurantItems[number].price);
        } else {
            alert("We could not match the item with what you have entered, please try again.");
        }
    }
}

restaurantMenu.itemList();

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||Refactored version with Eslint|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

const restaurantMenu = {
  restaurantName: 'Ramen Pizzeria',
  restaurantItems: [
    {
      name: '13.5 inch Pepperoni Ramen Pizza',
      price: 12,
    },
    {
      name: '13.5 inch Vegetarian Ramen Pizza',
      price: 9,
    },
    {
      name: '13.5 inch Vegan Ramen Pizza',
      price: 8,
    },
    {
      name: 'Ramen Beef Burger with fries and drink',
      price: 6,
    },
    {
      name: 'Ramen Chicken Burger with fries and drink',
      price: 5,
    },
  ],

  itemList() {
    let menuList = 'Welcome to Ramen Pizzeria! Here are the following items that we are offering for today! \n\n';
    for (let i = 0; i <= 4; i++) {
      menuList += `${i}: ${this.restaurantItems[i].name} | price: $${this.restaurantItems[i].price}\n`;
    }
    alert(menuList);

    const answer = prompt('What would you like to order? (please enter the item number)');
    this.selectedMenuItem(answer);
  },
  selectedMenuItem(number) {
    if (number >= 0 && number <= 4) {
      alert(`You have selected a ${this.restaurantItems[number].name}. This will cost you $${this.restaurantItems[number].price}`);
    } else {
      alert('We could not match the item with what you have entered, please try again.');
    }
  },
}

restaurantMenu.itemList();
