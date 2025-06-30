// dominio da apicaçao: carrinho de compras

// as ententidades representadas 
// carrinho de compras
// itens
import createItem from './services/item.js';
import * as cartservises from './services/cart.js';

const mycart = [];
const mywishlist = [];

console.log("benvindo ao carrinho de compras");

// codigo para criar item
const item1 = await createItem("computador", 2500.00, 5);
const item2 = await createItem("notebook", 1980.00, 2);

// codigo para adicionar item no carrinho
await cartservises.addItem(mycart, item1);
await cartservises.addItem(mycart, item2);

// codigo para remover item pelo indice
await cartservises.removeItem(mycart, item1);
await cartservises.removeItem(mycart, item1);


// codigo para exibir o carrinho
await cartservises.displaycart(mycart);

// codigo para excluir item do carrinho
//await cartservises.deleteItem(mycart, item2.name);
//await cartservises.deleteItem(mycart, item1.name);


await cartservises.calculateTotal(mycart);


// continuar na ultima aula chamada "remove item"