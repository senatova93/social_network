import {combineReducers, createStore} from "redux";
import profileReduser from "./profile-reduser";
import messageReduser from "./message-reduser";
import usersReduser from "./users-reduser";
let redusers = combineReducers({
    profilePage: profileReduser,
    messagePage: messageReduser,
    usersPage: usersReduser

})
let store = createStore(redusers);
window.store = store
export default store