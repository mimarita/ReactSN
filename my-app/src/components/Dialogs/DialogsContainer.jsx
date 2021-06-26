import React from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body))
    },
    sendMessage: () => {
      dispatch(sendMessageCreator())
    }
  }
}
let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (AuthRedirectComponent);

export default DialogsContainer;