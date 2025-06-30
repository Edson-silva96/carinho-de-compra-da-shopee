// quais açoes meu carrinho pode fazer

// adicionar item no carrinho
async function addItem(usercart, item) {
    usercart.push(item);
}

// deletar item do carrinho
async function deleteItem(usercart, name) {
    const index = usercart.findIndex(item => item.name === name); 
    if (index !== -1) {
        usercart.splice(index, 1);
    } else {
        console.log(`Item ${name} não encontrado no carrinho.`);
    }
    }

// remover item do carrinho
async function removeItem(usercart, item) {
    // verificar se o item existe no carrinho
    const indexFound = usercart.findIndex((p) => p.name === item.name)
    
    // caso nao encontre o item
    if (indexFound === -1) {
        console.log(`Item ${item.name} não encontrado no carrinho.`);
        return;
    }
     
    // item > 1 subtrair um item
    if (usercart[indexFound].quantity > 1) {
        usercart[indexFound].quantity -= 1;
        return;
    }
    
    // caso item = 1 deletar o item
    if (usercart[indexFound].quantity === 1) {
        usercart.splice(indexFound, 1);
        return;
    }
}

// calcular total do carrinho
async function calculateTotal(usercart) {
    console.log("total do carrinho: ");
    const result = usercart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`\nTotal: ${result}`);
}

// exibir itens do carrinho
async function displaycart(usercart) {
    console.log("Itens no carrinho:");
    usercart.forEach(item => {
        console.log(`Item: ${item.name}, Preço: ${item.price}, Quantidade: ${item.quantity}, Subtotal: ${item.subtotal()}`);
    }); 
    
}

export { addItem, 
    deleteItem, 
    removeItem, 
    calculateTotal,
    displaycart
};