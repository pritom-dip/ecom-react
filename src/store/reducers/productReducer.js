import * as actions from '../actions/productActions'

const productState = {
    products: []
};

export const productReducer = (state = productState, action) => {
    switch (action.type) {
        case actions.GET_ALL_PRODUCTS:
            return {
                ...state,
                products: action.payload.data
            };

        default:
            return state;
    }
}