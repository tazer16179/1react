import React from 'react';
import { NavLink } from 'react-router-dom';
import d from './Dialogs.module.css';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={d.dialog + ' ' + d.active}>
      <NavLink to="path" className={d.dialogg}>
        {props.name}
      </NavLink>
    </div>
  );
};
const Message = (props) => {
  return <div className={d.massage}>{props.message}</div>;
};
let dialogs = [
  { id: 1, name: 'Roma' },
  { id: 2, name: 'Nikita' },
  { id: 3, name: 'Vlad' },
  { id: 4, name: 'Ignat' },
];

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How much did you earn?' },
  { id: 3, message: 'Five million dolars!' },
];

let dialogsElements = dialogs.map((d) => (
  <DialogItem name={d.name} id={d.id} />
));
let messagesElements = messages.map((m) => <Message message={m.message} />);

const Dialogs = (props) => {
  return (
    <div className="app-wrapper-content">
      <div className={d.dialogs}>
        <div className={d.dialogsItems}>{dialogsElements}</div>
        <div className={d.messages}>{messagesElements}</div>
      </div>
    </div>
  );
};
export default Dialogs;
