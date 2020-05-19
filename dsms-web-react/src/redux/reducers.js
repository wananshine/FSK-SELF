import { combineReducers } from "redux";

import login from './actions/login'
import actions from './actions/action'


export default combineReducers({
    login,
    actions
});