import React from 'react';
import s from './Users.module.css';

let Users = (props) => {
    return <div>
            {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.avatar} className={s.photo}/>
                        </div>
                        <div>
                            {u.followed 
                            ? <button onClick = { () => {props.unfollow(u.id) } } >Follow</button> 
                            : <button  onClick = { () => {props.follow(u.id) } } >Unfollow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullname}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.planet}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>) }
             </div>}

            export default Users;