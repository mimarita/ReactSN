import { combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer';
import dialogReducer from './dialog-reducer';
import sideBarReducer from './sidebar-reducer';
import usersReducer from "./users-reducer";


let reducers = combineReducers ({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
});
let store = createStore(reducers);

export default store