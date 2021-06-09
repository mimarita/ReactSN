import React from 'react';
import s from './DialogItem.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <div>
            <img className={s.avatar} alt='ава' src={props.avatar}/>
        <NavLink  to={path}>{props.name}</NavLink></div>
    </div>
}
export default DialogItem;