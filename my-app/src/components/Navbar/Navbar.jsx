import React from 'react';
import { NavLink } from 'react-router-dom';
import FriendsOnline from './FriendsOnline/FriendsOnline';
import s from './Navbar.module.css';


const Navbar = (props) => {
  let friendsElements = props.state.friends.map(friendsonline => <FriendsOnline name={friendsonline.name} id={friendsonline.id} avatar={friendsonline.avatar} />);
  
  return <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="dialogs" activeClassName={s.activeLink}>Messages</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="news" activeClassName={s.activeLink}>News</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="music" activeClassName={s.activeLink}>Music</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="settings" activeClassName={s.activeLink}>Settings</NavLink>
    </div>
    <div className={s.item}>FRIENDS
  <div>{friendsElements}</div>
    </div>
  </nav>
}

export default Navbar;