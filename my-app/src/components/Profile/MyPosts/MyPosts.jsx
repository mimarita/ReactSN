import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {

  let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12}, 
    {id: 2, message: 'Its my first post', likesCount: 22}, 
    {id: 3, message: 'Test', likesCount: 421}, 
    {id: 4, message: 'Hi', likesCount: 1}, 
    {id: 5, message: 'Ou', likesCount: 41}, 
    {id: 6, message: '??', likesCount: 11}, 
  ];
  
  let postsElements = posts.map (p => <Post message={p.message} likesCount={p.likesCount} />);
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div><textarea></textarea></div>
        <div> <button>Add post</button></div>
      </div>
      <div className={s.posts}>
      {postsElements}
      <Post />
      <Post />
      </div>
    </div>)

}


export default MyPosts;