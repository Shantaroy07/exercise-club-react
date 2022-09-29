const addToDb = id => {
    let itemCart = {};

    //get  cart from local storage
    const storedCart = localStorage.getItem('item');
    if (storedCart) {
        itemCart = JSON.parse(storedCart);
    }

    // add 
    const quantity = itemCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        itemCart[id] = newQuantity;
    }
    else {
        itemCart[id] = 1;
    }
    localStorage.setItem('item', JSON.stringify(itemCart));
}
const getStoreCart = () => {
    let itemCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('item');
    if (storedCart) {
        itemCart = JSON.parse(storedCart);
    }
    return itemCart;

}

const removeFromDb = id => {
    const storedCart = localStorage.getItem('item');
    if (storedCart) {
        const itemCart = JSON.parse(storedCart);
        if (id in itemCart) {
            delete itemCart[id];
            localStorage.setItem('item', JSON.stringify(itemCart));
        }
    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('item');
}

export {
    addToDb,
    removeFromDb,
    deleteShoppingCart,
    getStoreCart
}