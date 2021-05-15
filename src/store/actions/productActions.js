import { getProducts } from "../../api/productsApi";

export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';

export const getAllProdcuts = () => async (dispatch) => {
    try {
        const { data } = await getProducts();
        dispatch({ type: GET_ALL_PRODUCTS, payload: { data } });
    } catch (error) {
        console.log(error);
    }
}