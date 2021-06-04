import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';




const Profile = () => {
  return <div className={s.content}>
    <div>
      <img src="https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg"></img>
    </div>
    <div>
      ava+description
    </div>
    <MyPosts />
  </div>
}

export default Profile;