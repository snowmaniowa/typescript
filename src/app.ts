
console.log("== 3. Object literal improvements ==");

const pizza = {
  name: 'Chicken',
  price: 7.99,

  getName(){
    return this.name;
  },
};
console.log(pizza.getName());//Just like Java language

//--------------------------------------------------------------------
const toppings = ['Tuna', 'Black olives', 'Lettue'];
const order = {pizza, toppings};
console.log(order);

//--------------------------------------------------------------------
function createCustomerOrder(pizza: any, toppings: any){
  return {pizza, toppings};
};
console.log(createCustomerOrder(pizza, toppings));