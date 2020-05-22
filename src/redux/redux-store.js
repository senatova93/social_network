import {combineReducers, createStore} from "redux";
import profileReduser from "./profile-reduser";
import messageReduser from "./message-reduser";
let redusers = combineReducers({
    profilePage: profileReduser,
    messagePage: messageReduser

})
let store = createStore(redusers);

export default store