import * as actions from '../actions/cartActions';
const cartState = {
    cart: []
};

export const cartReducer = (state = [], action) => {
    switch (action.type) {
        case actions.ADD_TO_CART:
            const cart = state;

            const newItem = action.payload.item;
            const existingProduct = state.find(product => product.id == newItem.id);
            if (existingProduct) {
                const qty = existingProduct.quantity;
                newItem.quantity = qty + 1;
            } else {
                newItem.quantity = 1;
                state.push(newItem)
            }

            return [
                ...state
            ];

        case actions.REMOVE_FROM_CART:
            console.log('payload', action.payload);
            const filteredItem = state.filter(product => parseInt(product.id) !== action.payload);

            return [
                ...filteredItem
            ]

        default:
            return state;
    }
}