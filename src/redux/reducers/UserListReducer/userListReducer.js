
import * as actionTypes from '../../actions/ActionType/actionType';


let initialState = {
    userList: ["old user data"],
};

const userListReducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.USER_LIST):
            return {
                ...state,
                userList: action.payload.userList,
            }
        default:
            return state
    }
};

export default userListReducer;