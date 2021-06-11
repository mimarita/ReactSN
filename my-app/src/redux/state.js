const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
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
        dialogsPage: {
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === 'SEND-MESSAGE') {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this._callSubscriber(this._state);
        }
    }

}
export const addPostActionCreater = () => ({
    
      type: 'ADD-POST'
    })
  export const updateNewPostTextActionCreater = (text) => 
  ({type: 'UPDATE-NEW-POST-TEXT', newText: text})
  
  export const sendMessageCreater = () => ({
    
    type: 'SEND-MESSAGE'
  })
export const updateNewMessageBodyCreater = (body) => 
({type: 'UPDATE-NEW-MESSAGE-BODY', body: body})

export default store;
window.store = store;