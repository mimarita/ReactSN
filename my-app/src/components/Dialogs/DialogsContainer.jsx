import React from 'react';
import { sendMessageCreater, updateNewMessageBodyCreater } from '../../redux/dialog-reducer';
import StoreContext from '../../storeContext';
import Dialogs from './Dialogs';

const DialogsContainer = () => {


  return <StoreContext.Consumer>
    { store => {
      let state = store.getState().dialogsPage;

      let onSendMessageClick = () => {
        store.dispatch(sendMessageCreater());
      }
    
      let onNewMessageChange = (body) => {
        store.dispatch(updateNewMessageBodyCreater(body));
      }
   return <Dialogs
      updateNewMessageBody={onNewMessageChange}
      sendMessage={onSendMessageClick}
      dialogsPage={state} />
    }
    } 
    </StoreContext.Consumer>
}

export default DialogsContainer;