import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogs = [
    {id: 1, name: 'Dimych'}, 
    {id: 2, name: 'Vagrid'}, 
    {id: 3, name: 'Ika'}, 
    {id: 4, name: 'Era'}, 
    {id: 5, name: 'Eva'}, 
    {id: 6, name: 'Irina'}, 
];
    let messages = [
    {id: 1, message: '1qqq'}, 
    {id: 2, message: '2qqq'}, 
    {id: 3, message: '3qq'}, 
    {id: 4, message: '4qqq'}, 
    {id: 5, message: '5qqq'}, 
    {id: 6, message: '6qqq'}, 
];

let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

let messagesElements = messages.map(m => <Message message={m.message} />);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
              {dialogsElements}
            </div>
            <div className={s.messages}>
              {messagesElements} 
            </div>
        </div>
    )
}

export default Dialogs;