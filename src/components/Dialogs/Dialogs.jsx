import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import DialogItems from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/state";


const Dialogs = (props) => {

    let state = props.store.getState().messagePage
    let dialogsElements = state.dialogs.map(d => <DialogItems name={d.name} id={d.id}/>)
    let messageElements = state.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = state.messages.newMessageBody
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator)
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageCreator(body))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea
                        onChange={ onNewMessageChange}
                          value={newMessageBody}
                          placeholder="Enter you message"/></div>
                    <div><button onClick={onSendMessageClick}> SEND</button></div>
                </div>
                

            </div>
        </div>


    )
}
export default Dialogs