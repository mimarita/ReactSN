import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';




const Profile = (props) => {


  return <div>
    <div>
      <ProfileInfo />
    </div>
    <MyPostsContainer />
  </div>
}




export default Profile;