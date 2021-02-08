import React from 'react';
import s from './Posts.module.css';

const Posts = (props) => {
    return (
      <div className={s.item}>
        <img
          src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg"
          alt="avatar"
        />
        <div className={s.message}>
          {props.message}
        </div>
        <div className={s.like}>
          <span>like {props.like}</span>
        </div>
      </div>
    );
}

export default Posts;