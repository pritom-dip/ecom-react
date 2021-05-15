import * as actions from '../actions/cartActions';
const cartState = {
    cart: []
};

export const cartReducer = (state = [], action) => {
    switch (action.type) {

        case actions.GET_CART:
            const data = sessionStorage.getItem('cart');
            let newData = [];
            if (data) {
                newData = JSON.parse(data)
            }

            return [
                ...newData
            ];

        case actions.ADD_TO_CART:

            const newItem = action.payload.item;
            const existingProduct = state.find(product => product.id == newItem.id);

            if (existingProduct) {
                const qty = existingProduct.quantity;
                existingProduct.quantity = qty + 1;
            } else {
                newItem.quantity = 1;
                state.push(newItem)
            }

            sessionStorage.setItem('cart', JSON.stringify(state));

            return [
                ...state
            ];

        case actions.REMOVE_FROM_CART:
            console.log('payload', action.payload);
            const filteredItem = state.filter(product => parseInt(product.id) !== action.payload);

            sessionStorage.setItem('cart', JSON.stringify(filteredItem));

            return [
                ...filteredItem
            ]

        case actions.UPDATE_CART:
            const updatedItem = state.filter(product => {
                if (product.id === action.payload.id) {
                    return product.quantity = parseInt(action.payload.data);
                }
            });

            sessionStorage.setItem('cart', JSON.stringify(state));

            return [
                ...state
            ];


        default:
            return state;
    }
}