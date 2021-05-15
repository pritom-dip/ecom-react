import * as actions from '../actions/userActions'
// const userState = {
//     user: {}
// }

export const userReducer = (state = [], action) => {
    switch (action.type) {
        case actions.GET_ALL_USERS:
            return {
                ...state,
                user: action.payload.data
            };

        default:
            return state;
    }
}