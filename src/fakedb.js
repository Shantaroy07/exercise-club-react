// use local storage to manage cart data
const addToDb = id => {
    let ExerciseItem = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('ExerciseItem');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = ExerciseItem[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        ExerciseItem[id] = newQuantity;
    }
    else {
        ExerciseItem[id] = 1;
    }
    localStorage.setItem('ExerciseItem', JSON.stringify(shoppingCart));
}
const getStoreCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('ExerciseItem');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;

}

const removeFromDb = id => {
    const storedCart = localStorage.getItem('ExerciseItem');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('ExerciseItem', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('ExerciseItem');
}

export {
    addToDb,
    removeFromDb,
    deleteShoppingCart,
    getStoreCart
}