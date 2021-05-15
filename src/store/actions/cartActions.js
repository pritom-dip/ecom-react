export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const GET_CART = "GET_CART";
export const UPDATE_CART = "UPDATE_CART";

export const addToCart = item => {
    return {
        type: ADD_TO_CART,
        payload: { item }
    };
}

export const removeFromCart = id => {
    return {
        type: REMOVE_FROM_CART,
        payload: id
    }
}

export const getCartsProduct = () => {
    return {
        type: GET_CART
    }
}

export const updateCart = (id, data) => {
    return {
        type: UPDATE_CART,
        payload: {
            id: id,
            data: data
        }
    }
}