import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/preloader/formControl/FormsControls";
import { maxLengthCreator, required } from "../../validators/validators";

const maxLength100 = maxLengthCreator(100);

const Dialogs = (props) => {
  let state = props.dialogPage;

  let dialogsElement = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));
  let messagesElement = state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));
 
  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsElement}</div>
      <div className={s.messages}>
        <div>{messagesElement}</div>
        <AddMessageReduxForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} 
               name="newMessageBody"  
               placeholder="Enter your message"
               validate={[required, maxLength100]} />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({
  form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs;
