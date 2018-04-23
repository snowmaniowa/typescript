console.log("Hello World - TypeScript!");


//------------------------------------------------------------
//## Topic: Array Functions and Implicit Functions 
//------------------------------------------------------------
//Array
const pizzaArray = [
  {
    name: "chicken is awesome",
    toppings: ["Grilled Chicken", "Black Olives"]
  },
  {
    name: "Tuna is healthy",
    toppings: ["Tuna", "Lettuce"]
  }
];

const mappedPizzas = pizzaArray.map(function(arrayElement) {
  return arrayElement.name.toUpperCase();
});
console.log(mappedPizzas);

//------------------------------------------------------------
//function is replaced with =>

const refinedPizzas = pizzaArray.map(arrayElement => {
  return arrayElement.name.toUpperCase();
});
console.log(refinedPizzas);

//------------------------------------------------------------
//implicit return function

const implicitPizzas = pizzaArray.map(arrayElement => arrayElement.name.toUpperCase);
console.log(implicitPizzas);

//------------------------------------------------------------
