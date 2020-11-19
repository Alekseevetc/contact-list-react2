import { combineReducers } from "redux";
import ContactListReducer from "./ContactListReducer";
import adminReducer from "./AdminReducer";

import SearchReducer from "./SearchReducer";


export default combineReducers({
    ContactListReducer,
    SearchReducer,
    adminReducer
});