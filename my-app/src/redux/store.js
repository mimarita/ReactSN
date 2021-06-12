import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 2, message: 'Its my first post', likesCount: 22 },
                { id: 3, message: 'Test', likesCount: 421 },
                { id: 4, message: 'Hi', likesCount: 1 },
                { id: 5, message: 'Ou', likesCount: 41 },
                { id: 6, message: '??', likesCount: 11 }
            ],
            newPostText: '',
        },
        dialogsPage:{
            dialogs: [
                { id: 1, name: 'Dimych', avatar: 'https://animeslayers.ru/wp-content/uploads/2018/12/dlyasteam4.jpg' },
                { id: 2, name: 'Vagrid', avatar: 'https://animeslayers.ru/wp-content/uploads/2018/12/dlyasteam4.jpg' },
                { id: 3, name: 'Ika', avatar: 'https://animeslayers.ru/wp-content/uploads/2018/12/dlyasteam4.jpg' },
                { id: 4, name: 'Era', avatar: 'https://animeslayers.ru/wp-content/uploads/2018/12/dlyasteam4.jpg' },
                { id: 5, name: 'Eva', avatar: 'https://animeslayers.ru/wp-content/uploads/2018/12/dlyasteam4.jpg' },
                { id: 6, name: 'Irina', avatar: 'https://animeslayers.ru/wp-content/uploads/2018/12/dlyasteam4.jpg' }],
            messages: [
                { id: 1, message: '1qqq' },
                { id: 2, message: '2qqq' },
                { id: 3, message: '3qq' },
                { id: 4, message: '4qqq' },
                { id: 5, message: '5qqq' },
            ],
            newMessageBody: '',
        },
        sideBar: { 
            friends: [
                { id: 1, name: 'Vagrid', avatar: 'https://animeslayers.ru/wp-content/uploads/2018/12/dlyasteam4.jpg' },
                { id: 2, name: 'Era', avatar: 'https://animeslayers.ru/wp-content/uploads/2018/12/dlyasteam4.jpg' },
                { id: 3, name: 'Ika', avatar: 'https://animeslayers.ru/wp-content/uploads/2018/12/dlyasteam4.jpg' },
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer (this._state.profilePage,action); 
        this._state.dialogsPage = dialogReducer (this._state.dialogsPage,action);
        this._state.sideBar = sideBarReducer (this._state.sideBar,action);
        this._callSubscriber(this._state);
        }
    }


 

export default store;
window.store = store;