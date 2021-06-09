import React from 'react';
import s from './FriendsOnline.module.css';


const FriendsOnline = (props) => {
    return <div className = {s.friends}>
    <div><img className={s.avatar} src={props.avatar}/><div className={s.name}>{props.name}</div></div>
    </div>
        
}
export default FriendsOnline;



