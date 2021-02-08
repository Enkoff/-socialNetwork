import React from "react";
import Posts from "./Post/Post";
import s from "./MyPosts.module.css";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../validators/validators";
import { Textarea } from "../../common/preloader/formControl/FormsControls";

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
  let postsElement = props.posts.map((p) => (
    <Posts message={p.message} like={p.likesCount} key={p.id} />
  ));

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <AddNewPostForm onSubmit={onAddPost}/>
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
};

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
      <Field component={Textarea} name="newPostText" validate={[required, maxLength10]}/>  
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

AddNewPostForm = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;
