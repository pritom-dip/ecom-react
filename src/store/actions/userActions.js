import { getUsers } from "../../api/userApi";

export const GET_ALL_USERS = "GET_ALL_USERS";

export const getAllUsers = () => async (dispatch) => {
    try {
        const { data } = await getUsers();
        dispatch({ type: GET_ALL_USERS, payload: { data } });
    } catch (error) {
        console.log(error);
    }
}