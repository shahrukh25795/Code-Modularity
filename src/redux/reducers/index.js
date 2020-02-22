
import { combineReducers } from 'redux';

import UserListReducer from '../reducers/UserListReducer/userListReducer';

const reducers = combineReducers({
    UserListReducer: UserListReducer
});

export default reducers;