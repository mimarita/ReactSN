const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'Its my first post', likesCount: 22 },
        { id: 3, message: 'Test', likesCount: 421 },
        { id: 4, message: 'Hi', likesCount: 1 },
        { id: 5, message: 'Ou', likesCount: 41 },
        { id: 6, message: '??', likesCount: 11 }
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
        let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT: 
        state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export const addPostActionCreater = () => ({
    
    type: 'ADD-POST'
  })
export const updateNewPostTextActionCreater = (text) => 
({type: 'UPDATE-NEW-POST-TEXT', newText: text})

export default profileReducer;