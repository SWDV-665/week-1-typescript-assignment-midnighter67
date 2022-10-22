/**
 * Mike Wooldridge
 * SWDV 665
 * Fall 22b
 */

class Grocery {
    name: string;
    price: string;
    quantity: string;
    
   
    constructor(name: string, price: string, quantity: string) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }

    getName(): string {
        return this.name;
    }

    getPrice(): string {
        return this.price;
    }

    getQuantity(): string {
        return this.quantity;
    }
  }


var item1 = new Grocery('coffee', '9.99', '1');
var item2 = new Grocery('dog food', '19.99', '1');
var item3 = new Grocery('soda', '5.99', '1');
  

let h1 = document.createElement("h2");
h1.textContent = item1.getName();
document.body.appendChild(h1);
 
let h2 = document.createElement("h2");
h2.innerText = item1.getQuantity();
document.body.appendChild(h2);

let h3 = document.createElement("h2");
h3.innerText = item1.getPrice();
document.body.appendChild(h3);

let h4 = document.createElement("h2");
h4.textContent = item2.getName();
document.body.appendChild(h4);
 
let h5 = document.createElement("h2");
h5.innerText = item2.getQuantity();
document.body.appendChild(h5);

let h6 = document.createElement("h2");
h6.innerText = item2.getPrice();
document.body.appendChild(h6);

let h7 = document.createElement("h2");
h7.textContent = item3.getName();
document.body.appendChild(h7);
 
let h8 = document.createElement("h2");
h8.innerText = item3.getQuantity();
document.body.appendChild(h8);

let h9 = document.createElement("h2");
h9.innerText = item3.getPrice();
document.body.appendChild(h9);