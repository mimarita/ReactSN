import React from 'react';
import s from './Message.module.css';
import { NavLink } from 'react-router-dom';


const Message = (props) => {
    let mesElement = React.createRef();

    let addMes = () => {
        let text = mesElement.current.value;
        alert('заглушка')
    }


    return <div className={s.dialog}>{props.message}
    <div>
        
    </div> </div>
}

export default Message;