const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState =  {
    dialogs: [
        { id: 1, name: 'Groot', avatar: 'https://animeslayers.ru/wp-content/uploads/2018/12/dlyasteam4.jpg' },
        { id: 2, name: 'Anthony Edward Stark', avatar: 'https://animeslayers.ru/wp-content/uploads/2018/12/dlyasteam4.jpg' },
        { id: 3, name: 'Wanda Maximoff', avatar: 'https://animeslayers.ru/wp-content/uploads/2018/12/dlyasteam4.jpg' },
        { id: 4, name: 'Loki Laufeyson', avatar: 'https://animeslayers.ru/wp-content/uploads/2018/12/dlyasteam4.jpg' },
        { id: 5, name: 'Robert Bruce Banner', avatar: 'https://animeslayers.ru/wp-content/uploads/2018/12/dlyasteam4.jpg' },
        { id: 6, name: 'Natasha Romanoff', avatar: 'https://animeslayers.ru/wp-content/uploads/2018/12/dlyasteam4.jpg' }],
    messages: [
        { id: 1, message: '1qqq' },
        { id: 2, message: '2qqq' },
        { id: 3, message: '3qq' },
        { id: 4, message: '4qqq' },
        { id: 5, message: '5qqq' },
    ],
    newMessageBody: '',
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: 
        return {
            ...state,
            newMessageBody: action.body
        };
        //это (выше) мы создаем объект stateCopy, но не даем ему имя, а прям сразу возвращаем
     case SEND_MESSAGE: 
        let body = state.newMessageBody;
        return {...state, 
            newMessageBody: '',
            messages: [...state.messages, { id: 6, message: body }]
        }; //это (выше) мы создаем объект stateCopy, но не даем ему имя, а прям сразу возвращаем
        default:
        return state;
    }
}
export const sendMessageCreator = () => ({
    
    type: 'SEND-MESSAGE'
  })
export const updateNewMessageBodyCreator = (body) => 
({type: 'UPDATE-NEW-MESSAGE-BODY', body: body})
export default dialogReducer