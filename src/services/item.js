// casos de uso dos itens

// criar item com subtotal certo
async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity
    };
}

// atualizar item com subtotal certo
/*async function updateItem(item, name, price, quantity) {
    
}

// calcular subtotal do item*/

export default createItem;