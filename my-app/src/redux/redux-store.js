import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer';
import dialogReducer from './dialog-reducer';
import sideBarReducer from './sidebar-reducer';
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import appReducer from "./app-reducer";




let reducers = combineReducers ({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,

});
let store = createStore(reducers, applyMiddleware(thunkMiddleware) , );

export default store