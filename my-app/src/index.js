import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from './storeContext'


 let rerenderEntireTree = (state) => {
    ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
        <App state={state} dispatch={store.dispatch.bind (store)} store = {store}/>
        </Provider> 
        </BrowserRouter>, document.getElementById('root'))
        }

rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
    });
