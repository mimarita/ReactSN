import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  return (
    <div>
      My posts
      <div>
        New post
      </div>
      <div className={s.posts}>
        <Post message='Hi, how are you?' like='22'/>
        <Post message="It's my first post" like='15'/>
        <Post />
        <Post />
      </div>
    </div>)
  
}

export default MyPosts;