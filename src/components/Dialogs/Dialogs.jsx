import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/state';
import DialogItem from './DialogItem/DialogItem';
import d from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} />
  ));
  let newMessageBody = state.newMessageBody;
  let newMessages = React.createRef();
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  }
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  }

  return (
    <div className="app-wrapper-content">
      <div className={d.dialogs}>
        <div className={d.dialogsItems}>{dialogsElements}</div>
        <div className={d.messages}>
        <div>{messagesElements}</div>  
          </div>
      </div>
      <div>
        <textarea onChange={onNewMessageChange} value = {newMessageBody} placeholder = "Enter your message" ref={newMessages}></textarea>
      </div>
      <div>
        <button onClick={onSendMessageClick}>Send</button>
      </div>
    </div>
  );
};
export default Dialogs;
